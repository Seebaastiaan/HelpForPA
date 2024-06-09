window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("blurred-nav");
  } else {
    navbar.classList.remove("blurred-nav");
  }
});

var typyingEffect = new Typed(".multiText", {
  strings: [
    "SEGURIDAD ",
    "INNOVACION",
    "TECNOLOGIA",
    "SOSTENIBILIDAD",
    "ESPERANZA",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
});

function enviarCorreo() {
  window.location.href =
    "mailto:contact.sparksystems@gmail.com?subject=Cotización de Flame Guard&body=Me gustaría recibir más información sobre este producto.";
}
