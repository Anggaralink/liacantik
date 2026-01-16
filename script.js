// Hamburger menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
};

// Dark mode
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll animation
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});