const API_URL = "https://javascript-capstone-backend.onrender.com/users";

let users = [];

async function fetchUsersFromAPI() {
  const headline = document.getElementById("headlineText");
  try {
    headline.innerText = "Loading users...";

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    users = data.map((user) => ({
      id: user.id,

      name: `${user.first_name} ${user.last_name}`.trim(),

      weight: 1,
    }));

    headline.innerText = "It's your lucky day:";
    renderUsers();
  } catch (error) {
    console.error("Failed to fetch users from your Render backend:", error);
    headline.innerText = "Error loading users.\nPlease check API link.";
  }
}

function renderUsers() {
  const container = document.getElementById("userList");
  if (!container) return;

  container.innerHTML = "";

  users.forEach((user, index) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user-item";
    userDiv.innerHTML = `
            <div>${user.name}: ${user.weight}</div>
            <div class="btn-container">
                <button class="btn-minus" data-index="${index}">-</button>
                <button class="btn-plus" data-index="${index}">+</button>
            </div>
        `;
    container.appendChild(userDiv);
  });
}

function adjustWeight(index, change) {
  if (users[index]) {
    users[index].weight += change;
    if (users[index].weight < 0) {
      users[index].weight = 0;
    }
    renderUsers();
  }
}
function pickUser() {
  const totalWeight = users.reduce((sum, user) => sum + user.weight, 0);
  const headline = document.getElementById("headlineText");

  document.querySelectorAll(".user-item").forEach((el) => {
    el.classList.remove("is-selected");
  });

  if (users.length === 0) {
    headline.innerText = "Waiting for user data...";
    return;
  }
  if (totalWeight === 0) {
    headline.innerText = "Add weight to pick someone!";
    return;
  }

  let randomNum = Math.random() * totalWeight;
  let selectedUser = null;

  for (let i = 0; i < users.length; i++) {
    randomNum -= users[i].weight;
    if (randomNum <= 0) {
      selectedUser = users[i];
      break;
    }
  }

  if (selectedUser) {
    headline.innerText = `It's your lucky day:\n🎉 ${selectedUser.name}!`;

    const targetElement = document.querySelector(
      `.user-item[data-id="${selectedUser.id}"]`
    );
    if (targetElement) {
      targetElement.classList.add("is-selected");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchUsersFromAPI();

  document.getElementById("rollButton").addEventListener("click", pickUser);

  document.getElementById("userList").addEventListener("click", (event) => {
    const target = event.target;
    const index = parseInt(target.getAttribute("data-index"), 10);

    if (isNaN(index)) return;

    if (target.classList.contains("btn-minus")) {
      adjustWeight(index, -1);
    } else if (target.classList.contains("btn-plus")) {
      adjustWeight(index, 1);
    }
  });
});
