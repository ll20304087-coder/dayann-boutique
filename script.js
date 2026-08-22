/* =========================================
   MENÚ PARA CELULAR
========================================= */

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Cerrar menú al seleccionar una sección */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   BOTONES DE COMPRA
========================================= */

function comprar(producto) {

    const mensaje =
        "¡Hola! Me interesa comprar: " +
        producto +
        " de DAYANN BOUTIQUE.";

    alert(mensaje);

}


/* =========================================
   FORMULARIO DE CONTACTO
========================================= */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "¡Gracias por contactar a DAYANN BOUTIQUE! 🤎\n\n" +
        "Hemos recibido tu mensaje."
    );

    contactForm.reset();

});
