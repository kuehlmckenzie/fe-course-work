const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");
const jokeList = document.getElementById("joke-list");

const API_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

async function fetchJoke() {
  try {
    generateBtn.disabled = true;
    generateBtn.textContent = "Loading...";

    const response = await fetch(API_URL);
    const data = await response.json();

    const li = document.createElement("li");
    li.classList.add("joke-item");

    if (data.type === "single") {
      li.innerHTML = `<p class="joke-text">${data.joke}</p>`;
    } else if (data.type === "twopart") {
      li.innerHTML = `
                <p class="joke-setup"><strong>Setup:</strong> ${data.setup}</p>
                <p class="joke-delivery"><strong>Delivery:</strong> ${data.delivery}</p>
            `;
    }

    jokeList.insertBefore(li, jokeList.firstChild);
  } catch (error) {
    console.error("Error fetching joke:", error);
    alert("Failed to retrieve a joke. Please check your connection.");
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = "Get New Joke";
  }
}

function clearJokes() {
  jokeList.innerHTML = "";
}

generateBtn.addEventListener("click", fetchJoke);
clearBtn.addEventListener("click", clearJokes);
