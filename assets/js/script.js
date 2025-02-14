// DOM elements 
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');

// Eventlistener for open menu
menuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

// Eventlistener for close menu
closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});