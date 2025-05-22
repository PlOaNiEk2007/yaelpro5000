const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



const buscador = document.getElementById("buscador");
const secciones = document.querySelectorAll(".seccion-jugadores");

buscador.addEventListener("input", () => {
  const filtro = buscador.value.toLowerCase();

  secciones.forEach(seccion => {
    const jugadores = seccion.querySelectorAll(".jugador");
    let algunoVisible = false;

    jugadores.forEach(jugador => {
      const nombre = jugador.querySelector("h2").textContent.toLowerCase();
      if (nombre.includes(filtro)) {
        jugador.style.display = "block";
        algunoVisible = true;
      } else {
        jugador.style.display = "none";
      }
    });

    // Mostrar u ocultar toda la sección según haya jugadores visibles
    seccion.style.display = algunoVisible ? "block" : "none";
  });
});