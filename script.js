// Menú hamburguesa funcional en mobile
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Opcional: cerrar el menú al hacer click fuera
  document.addEventListener('click', function(e) {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});