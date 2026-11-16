const hexDisplay = document.getElementById("hex-display");
const colorTrigger = document.getElementById("color-trigger");

function applyRandomHexColor() {
  const freshHex =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  document.body.style.backgroundColor = freshHex;
  hexDisplay.textContent = freshHex.toUpperCase();
}

colorTrigger.addEventListener("click", applyRandomHexColor);

applyRandomHexColor();
