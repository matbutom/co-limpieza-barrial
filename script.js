// Hamburguesa para menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });

    // Opcional: cerrar menú al hacer click fuera o en un link
    nav.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
    // Click fuera: cerrar
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      }
    });
  }
});