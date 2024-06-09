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
