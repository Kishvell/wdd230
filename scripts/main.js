const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('main-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.textContent = menu.classList.contains('hidden') ? '☰' : '✖';
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const main = document.querySelector('main');
const body = document.querySelector('body'); // Add the body element
const header = document.querySelector('header'); // Add the header element
const nav = document.querySelector('nav'); // Add the nav element
const footer = document.querySelector('footer'); // Add the footer element

darkModeToggle.addEventListener('click', () => {
  main.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode'); // Toggle dark mode for the body
  header.classList.toggle('dark-mode'); // Toggle dark mode for the header
  nav.classList.toggle('dark-mode'); // Toggle dark mode for the nav
  footer.classList.toggle('dark-mode'); // Toggle dark mode for the footer
});