console.log("Portfolio Loaded 🚀");

// simple fade animation
document.querySelectorAll("section").forEach((sec) => {
  sec.style.opacity = 0;
  setTimeout(() => {
    sec.style.transition = "1s";
    sec.style.opacity = 1;
  }, 500);
});