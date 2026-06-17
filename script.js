// Strict Global Interaction Initializer Scope Block
document.addEventListener("DOMContentLoaded", () => {
  const toggleIcon = document.querySelector(".toggleicon");
  const navMenu = document.querySelector(".nav-menu");

  // Custom Navigation Sidebar View Toggle Control Method
  toggleIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  // Closes mobile sidebar view upon selecting menu context item cleanly
  document.querySelectorAll('.menu-items a, .btn-wrap a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      navMenu.classList.remove("active");
    });
  });

  // Handle clicking outside the sidebar menu container target element to auto-collapse panel views
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleIcon.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });
});
