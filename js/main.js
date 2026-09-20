// main.js — Portafolio Megs (sitio multipágina)
document.addEventListener("DOMContentLoaded", function () {

  // Animaciones de entrada (WOW.js + animate.css)
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // Galería con lightbox (FancyBox) — cubre la galería y el carousel de destacados
  if (window.Fancybox) {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: { display: ["counter", "zoom", "close"] }
    });
  }

  // Carousel Owl de "Proyectos destacados" — solo existe en portafolio.html
  if (window.jQuery && jQuery.fn.owlCarousel) {
    jQuery(".carousel-owl-megs").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      margin: 24,
      center: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        700: { items: 3 },
        1200: { items: 5 }
      }
    });
  }

  // Año dinámico en el footer
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // Formulario de contacto — solo existe en contacto.html
  var formContacto = document.getElementById("formContacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!formContacto.checkValidity()) {
        formContacto.reportValidity();
        return;
      }
      var mensajeOk = document.getElementById("formMsgOk");
      if (mensajeOk) mensajeOk.classList.add("show");
      formContacto.reset();
    });
  }
});
