const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});