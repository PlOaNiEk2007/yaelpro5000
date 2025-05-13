// JavaScript para el menú de navegación en dispositivos móviles

// Obtener elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Función para alternar la clase activa en el menú de navegación
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
