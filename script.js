document.querySelector(".toggleicon").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    document.querySelector(".nav-menu").classList.remove("active");
  });
});