// const hamburgerBtn = document.getElementById("hamburgerBtn");
// const navLinks = document.getElementById("navLinks");

// hamburgerBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// document.querySelectorAll(".nav-links a").forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });
function myFunction() {
  var x = document.getElementById("myNavBar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}
