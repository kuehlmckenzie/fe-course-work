const symbols = ["🖤", "💀 ", "🧛", "⚰️", "🥀", "🩸"];
const symbolValues = {
  "🖤": 2,
  "💀 ": 3,
  "🧛 ": 4,
  "⚰️": 5,
  "🥀": 10,
  "🩸": 50,
};

let balance = 100;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

async function spinReelsWithAnimation() {
  console.log("\nSpinning... 🎰");

  for (let i = 0; i < 5; i++) {
    process.stdout.write(
      `\r| ${getRandomSymbol()} | ${getRandomSymbol()} | ${getRandomSymbol()} |`
    );
    await delay(100);
  }

  const finalReels = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

  process.stdout.write(`\r| ${finalReels[0]} | 🔄 | 🔄 |`);
  await delay(600);

  process.stdout.write(`\r| ${finalReels[0]} | ${finalReels[1]} | 🔄 |`);
  await delay(600);

  process.stdout.write(
    `\r| ${finalReels[0]} | ${finalReels[1]} | ${finalReels[2]} |\n\n`
  );
  await delay(300);

  return finalReels;
}

function checkWin(reels, bet) {
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    const symbol = reels[0];
    const multiplier = symbolValues[symbol];
    return bet * multiplier;
  }
  return 0;
}

function askQuestion(query) {
  process.stdout.write(query);
  return new Promise((resolve) => {
    process.stdin.once("data", (data) => {
      resolve(data.toString().trim());
    });
  });
}

async function main() {
  console.log("=== Welcome to the Terminally Ill Slot Machine! ===");

  process.stdin.setEncoding("utf8");

  while (balance > 0) {
    console.log(`==============================`);
    console.log(`Current Balance: $${balance}`);

    const input = await askQuestion(
      'Enter your bet amount (or type "exit" to quit): '
    );

    if (input.toLowerCase() === "exit") {
      console.log(`Thanks for playing! You left with $${balance}.`);
      process.exit(0);
    }

    const bet = parseInt(input, 10);

    if (isNaN(bet) || bet <= 0) {
      console.log("Please enter a valid positive number.\n");
      continue;
    }

    if (bet > balance) {
      console.log("You do not have enough balance for that bet!\n");
      continue;
    }

    balance -= bet;

    const reels = await spinReelsWithAnimation();
    const winnings = checkWin(reels, bet);

    if (winnings > 0) {
      balance += winnings;
      console.log(`🎉 JACKPOT! You won $${winnings}!`);
    } else {
      console.log(`☠️ No match. Better luck next time! ☠️`);
    }

    console.log();
  }

  console.log("\n ☠️ Game over! You ran out of money. ☠️");
  process.exit(0);
}

main();
