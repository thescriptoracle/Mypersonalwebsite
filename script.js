function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
ScrollReveal().reveal(".headline");
ScrollReveal().reveal(".tagline", { delay: 1000 });
ScrollReveal().reveal(".punchline", { delay: 2000 });
