class Account {
  constructor(accountNumber, ownerName, pin, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.pin = pin;
    this.balance = parseFloat(balance);
    this.transactions = [];

    if (this.balance > 0) {
      this.recordTransaction("Initial Balance", this.balance);
    }
  }

  recordTransaction(type, amount) {
    const now = new Date();
    this.transactions.push({
      type: type,
      amount: amount,
      balanceAfter: this.balance,
      timestamp: now.toLocaleString([], {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }

  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Deposit amount must be greater than $0.");
    }
    this.balance += amount;
    this.recordTransaction("Deposit", amount);
    return this.balance;
  }

  withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Withdrawal amount must be greater than $0.");
    }
    if (amount > this.balance) {
      throw new Error(
        `Insufficient funds. Available balance: $${this.balance.toFixed(2)}`
      );
    }
    this.balance -= amount;
    this.recordTransaction("Withdrawal", -amount);
    return this.balance;
  }

  updatePin(newPin) {
    if (!/^\d{4}$/.test(newPin)) {
      throw new Error("New PIN must be exactly 4 digits.");
    }
    this.pin = newPin;
  }
}

class Bank {
  constructor() {
    this.accounts = [
      new Account("1001", "Alice Johnson", "1234", 1500.0),
      new Account("1002", "Bob Smith", "5678", 450.5),
      new Account("1003", "Charlie Davis", "0000", 50.0),
      new Account("1004", "Diana Prince", "4321", 8250.75),
      new Account("1005", "Evan Wright", "9999", 0.0),
      new Account("1006", "Fiona Gallagher", "2468", 320.25),
    ];
    this.nextAccountNumber = 1007;
  }

  createAccount(name, pin, initialDeposit) {
    if (!name.trim()) {
      throw new Error("Account holder name is required.");
    }
    if (!/^\d{4}$/.test(pin)) {
      throw new Error("PIN must be exactly 4 numeric digits.");
    }
    if (isNaN(initialDeposit) || initialDeposit < 0) {
      throw new Error("Initial deposit cannot be negative.");
    }

    const accNum = String(this.nextAccountNumber++);
    const newAcc = new Account(accNum, name.trim(), pin, initialDeposit);
    this.accounts.push(newAcc);
    return newAcc;
  }

  authenticate(accountNumber, pin) {
    const account = this.accounts.find(
      (acc) => acc.accountNumber === accountNumber.trim()
    );
    if (!account) {
      throw new Error("Account number not found.");
    }
    if (account.pin !== pin) {
      throw new Error("Incorrect PIN entered.");
    }
    return account;
  }

  deleteAccount(accountNumber) {
    const index = this.accounts.findIndex(
      (acc) => acc.accountNumber === accountNumber
    );
    if (index === -1) {
      throw new Error("Account not found.");
    }
    this.accounts.splice(index, 1);
  }
}

class ATMInterface {
  constructor(bank) {
    this.bank = bank;
    this.currentAccount = null;

    this.screen = document.getElementById("screen");
    this.views = document.querySelectorAll(".view");
    this.modal = document.getElementById("alert-modal");
    this.modalTitle = document.getElementById("modal-title");
    this.modalMessage = document.getElementById("modal-message");

    this.bindEvents();
  }

  showAlert(title, message) {
    this.modalTitle.innerText = title;
    this.modalMessage.innerText = message;
    this.modal.classList.remove("hidden");
  }

  closeAlert() {
    this.modal.classList.add("hidden");
  }

  updateScreen(message) {
    this.screen.innerText = message;
  }

  switchView(viewId) {
    const targetView = document.getElementById(viewId);
    if (!targetView) {
      console.error(`View with ID "${viewId}" was not found in index.html.`);
      return;
    }

    this.views.forEach((view) => view.classList.add("hidden"));
    targetView.classList.remove("hidden");

    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  }

  renderReceipt() {
    const acc = this.currentAccount;
    const container = document.getElementById("receipt-content");
    if (!container) return;

    const printDate = new Date().toLocaleString();
    let txHTML = "";

    if (acc.transactions.length === 0) {
      txHTML = `<li><span>No transactions recorded this session.</span></li>`;
    } else {
      txHTML = acc.transactions
        .map((tx) => {
          const isPositive = tx.amount >= 0;
          const sign = isPositive ? "+" : "-";
          const colorClass = isPositive ? "positive" : "negative";
          return `
                        <li>
                            <div class="tx-meta">
                                <strong>${tx.type}</strong>
                                <span class="tx-date">${tx.timestamp}</span>
                            </div>
                            <span class="tx-amount ${colorClass}">
                                ${sign}$${Math.abs(tx.amount).toFixed(2)}
                            </span>
                        </li>
                    `;
        })
        .join("");
    }

    container.innerHTML = `
            <div class="receipt-header">
                <h4>JS BANK ATM RECEIPT</h4>
                <div>Date: ${printDate}</div>
                <div>Account: ****${acc.accountNumber.slice(-2)} (${acc.ownerName})</div>
            </div>
            <ul class="receipt-list">
                ${txHTML}
            </ul>
            <div class="receipt-footer">
                <span>AVAILABLE BALANCE:</span>
                <span>$${acc.balance.toFixed(2)}</span>
            </div>
        `;
  }

  onClick(id, handler) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", handler);
    } else {
      console.warn(`Button with ID "${id}" not found in HTML.`);
    }
  }

  bindEvents() {
    this.onClick("btn-close-modal", () => this.closeAlert());

    this.onClick("btn-login", () => {
      const cardNum = document.getElementById("login-card").value;
      const pin = document.getElementById("login-pin").value;

      try {
        this.currentAccount = this.bank.authenticate(cardNum, pin);
        this.switchView("main-menu-view");
        this.updateScreen(
          `Welcome, ${this.currentAccount.ownerName}!\nAccount #${this.currentAccount.accountNumber}`
        );
      } catch (error) {
        this.showAlert("Login Failed", error.message);
      }
    });

    this.onClick("btn-create-account", () => {
      const name = document.getElementById("reg-name").value;
      const pin = document.getElementById("reg-pin").value;
      const deposit = parseFloat(
        document.getElementById("reg-deposit").value || 0
      );

      try {
        const newAcc = this.bank.createAccount(name, pin, deposit);
        this.showAlert(
          "Account Created!",
          `Welcome ${newAcc.ownerName}!\nYour new Account Number is: ${newAcc.accountNumber}.\nUse this number to log in.`
        );
        document
          .querySelectorAll("#auth-view input")
          .forEach((i) => (i.value = ""));
      } catch (error) {
        this.showAlert("Registration Error", error.message);
      }
    });

    this.onClick("nav-balance", () => {
      this.updateScreen(
        `Current Balance:\n$${this.currentAccount.balance.toFixed(2)}`
      );
    });

    this.onClick("nav-deposit", () => {
      this.switchView("deposit-view");
      this.updateScreen("Enter deposit amount below.");
    });

    this.onClick("nav-withdraw", () => {
      this.switchView("withdraw-view");
      this.updateScreen("Enter withdrawal amount below.");
    });

    this.onClick("nav-receipt", () => {
      this.renderReceipt();
      this.switchView("receipt-view");
      this.updateScreen("Transaction receipt generated below.");
    });

    this.onClick("nav-settings", () => {
      this.switchView("settings-view");
      this.updateScreen("Manage your PIN or close your account.");
    });

    document.querySelectorAll(".btn-back").forEach((button) => {
      button.addEventListener("click", () => {
        this.switchView("main-menu-view");
        this.updateScreen(`Main Menu - ${this.currentAccount.ownerName}`);
      });
    });

    this.onClick("btn-submit-deposit", () => {
      const amount = parseFloat(
        document.getElementById("deposit-amount").value
      );
      try {
        const newBalance = this.currentAccount.deposit(amount);
        this.switchView("main-menu-view");
        this.updateScreen(
          `Deposited $${amount.toFixed(2)}.\nNew Balance: $${newBalance.toFixed(2)}`
        );
        this.showAlert(
          `"Success", Successfully deposited $${amount.toFixed(2)}.`
        );
      } catch (error) {
        this.showAlert("Transaction Error", error.message);
      }
    });

    this.onClick("btn-submit-withdraw", () => {
      const amount = parseFloat(
        document.getElementById("withdraw-amount").value
      );
      try {
        const newBalance = this.currentAccount.withdraw(amount);
        this.switchView("main-menu-view");
        this.updateScreen(
          `Withdrew $${amount.toFixed(2)}.\nNew Balance: $${newBalance.toFixed(2)}`
        );
        this.showAlert(
          `"Success", Please take your cash: $${amount.toFixed(2)}.`
        );
      } catch (error) {
        this.showAlert("Transaction Error", error.message);
      }
    });

    this.onClick("btn-browser-print", () => {
      window.print();
    });

    this.onClick("btn-update-pin", () => {
      const newPin = document.getElementById("new-pin-input").value;
      try {
        this.currentAccount.updatePin(newPin);
        this.switchView("main-menu-view");
        this.updateScreen("PIN updated successfully.");
        this.showAlert("Security Update", "Your 4-digit PIN has been updated.");
      } catch (error) {
        this.showAlert("Invalid PIN", error.message);
      }
    });

    this.onClick("btn-delete-account", () => {
      try {
        const accNum = this.currentAccount.accountNumber;
        this.bank.deleteAccount(accNum);
        this.currentAccount = null;
        this.switchView("auth-view");
        this.updateScreen("Account closed. Thank you for banking with us.");
        this.showAlert(
          `"Account Deleted", Account #${accNum} has been permanently removed from this session.`
        );
      } catch (error) {
        this.showAlert("Error", error.message);
      }
    });

    this.onClick("btn-logout", () => {
      this.currentAccount = null;
      this.switchView("auth-view");
      this.updateScreen("Card ejected. Please log in or create an account.");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bankSystem = new Bank();
  new ATMInterface(bankSystem);
});
