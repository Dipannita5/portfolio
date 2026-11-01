// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu after clicking a link (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
