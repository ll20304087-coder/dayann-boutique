/* =========================================
   DAYANN BOUTIQUE
========================================= */


/* =========================
   WHATSAPP
========================= */

const TELEFONO_WHATSAPP = "50259824462";


/* =========================
   VARIABLES
========================= */

let carrito = [];

let productoActual = null;

let tallaSeleccionada = "";

let cantidadProducto = 1;


/* =========================
   CATEGORÍAS
========================= */

function mostrarCategoria(categoria, boton) {

    const productos =
        document.querySelectorAll(".product");


    const botones =
        document.querySelectorAll(
            ".category-button"
        );


    botones.forEach(function(btn) {

        btn.classList.remove("active");

    });


    boton.classList.add("active");


    productos.forEach(function(producto) {

        if (
            producto.dataset.categoria === categoria
        ) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

}


/* =========================
   ABRIR PRODUCTO
========================= */

function abrirProducto(
    nombre,
    precio,
    descripcion,
    color,
    imagen
) {

    productoActual = {

        nombre: nombre,

        precio: precio,

        descripcion: descripcion,

        color: color,

        imagen: imagen

    };


    tallaSeleccionada = "";

    cantidadProducto = 1;


    document.getElementById(
        "modalProductName"
    ).textContent = nombre;


    document.getElementById(
        "modalProductPrice"
    ).textContent =
        "Q" + precio.toFixed(2);


    document.getElementById(
        "modalProductDescription"
    ).textContent = descripcion;


    document.getElementById(
        "modalProductColor"
    ).textContent = color;


    const imagenModal =
        document.getElementById(
            "modalProductImage"
        );


    imagenModal.src = imagen;

    imagenModal.alt = nombre;


    document.getElementById(
        "productQuantity"
    ).textContent = "1";


    document.querySelectorAll(
        ".size-button"
    ).forEach(function(btn) {

        btn.classList.remove("selected");

    });


    document.querySelector(
        ".size-message"
    ).textContent =
        "Selecciona una talla.";


    document.getElementById(
        "productModal"
    ).classList.add("active");


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================
   CERRAR PRODUCTO
========================= */

function cerrarProducto() {

    document.getElementById(
        "productModal"
    ).classList.remove("active");


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================
   SELECCIONAR TALLA
========================= */

function seleccionarTalla(button) {

    document.querySelectorAll(
        ".size-button"
    ).forEach(function(btn) {

        btn.classList.remove("selected");

    });


    button.classList.add("selected");


    tallaSeleccionada =
        button.textContent.trim();


    document.querySelector(
        ".size-message"
    ).textContent =
        "Talla seleccionada: " +
        tallaSeleccionada;

}


/* =========================
   CAMBIAR CANTIDAD
========================= */

function cambiarCantidad(cambio) {

    cantidadProducto += cambio;


    if (cantidadProducto < 1) {

        cantidadProducto = 1;

    }


    if (cantidadProducto > 20) {

        cantidadProducto = 20;

    }


    document.getElementById(
        "productQuantity"
    ).textContent =
        cantidadProducto;

}


/* =========================
   AGREGAR AL CARRITO
========================= */

function agregarProductoDesdeModal() {

    if (!productoActual) {

        return;

    }


    if (!tallaSeleccionada) {

        document.querySelector(
            ".size-message"
        ).textContent =
            "⚠️ Selecciona una talla.";

        return;

    }


    const existente =
        carrito.find(function(producto) {

            return (

                producto.nombre ===
                productoActual.nombre

                &&

                producto.talla ===
                tallaSeleccionada

            );

        });


    if (existente) {

        existente.cantidad +=
            cantidadProducto;

    }

    else {

        carrito.push({

            nombre:
                productoActual.nombre,

            precio:
                productoActual.precio,

            descripcion:
                productoActual.descripcion,

            color:
                productoActual.color,

            talla:
                tallaSeleccionada,

            cantidad:
                cantidadProducto,

            imagen:
                productoActual.imagen

        });

    }


    actualizarCarrito();

    cerrarProducto();

    abrirCarrito();

}


/* =========================
   ACTUALIZAR CARRITO
========================= */

function actualizarCarrito() {

    const contenedor =
        document.getElementById(
            "cart-items"
        );


    const contador =
        document.getElementById(
            "cart-count"
        );


    const totalElemento =
        document.getElementById(
            "cart-total"
        );


    contenedor.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    if (carrito.length === 0) {

        contenedor.innerHTML = `

            <p class="empty-cart">

                Tu carrito está vacío.

            </p>

        `;

    }


    carrito.forEach(
        function(producto, index) {


            const subtotal =
                producto.precio *
                producto.cantidad;


            total += subtotal;


            cantidadTotal +=
                producto.cantidad;


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "cart-product";


            elemento.innerHTML = `

                <div class="cart-product-top">

                    <div class="cart-product-info">

                        <h3>
                            ${producto.nombre}
                        </h3>

                        <p>

                            Talla:
                            <strong>
                                ${producto.talla}
                            </strong>

                            <br>

                            Color:
                            ${producto.color}

                            <br>

                            Cantidad:
                            ${producto.cantidad}

                        </p>

                    </div>


                    <strong>

                        Q${subtotal.toFixed(2)}

                    </strong>

                </div>


                <div class="cart-controls">

                    <button
                        onclick="disminuirCantidadCarrito(${index})"
                    >
                        −
                    </button>


                    <span>
                        ${producto.cantidad}
                    </span>


                    <button
                        onclick="aumentarCantidadCarrito(${index})"
                    >
                        +
                    </button>


                    <button
                        class="remove-product"
                        onclick="eliminarProducto(${index})"
                    >
                        ELIMINAR
                    </button>

                </div>

            `;


            contenedor.appendChild(
                elemento
            );

        }
    );


    contador.textContent =
        cantidadTotal;


    totalElemento.textContent =
        "Q" + total.toFixed(2);

}


/* =========================
   AUMENTAR CARRITO
========================= */

function aumentarCantidadCarrito(index) {

    carrito[index].cantidad++;

    actualizarCarrito();

}


/* =========================
   DISMINUIR CARRITO
========================= */

function disminuirCantidadCarrito(index) {

    carrito[index].cantidad--;


    if (
        carrito[index].cantidad <= 0
    ) {

        carrito.splice(index, 1);

    }


    actualizarCarrito();

}


/* =========================
   ELIMINAR PRODUCTO
========================= */

function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();

}


/* =========================
   ABRIR CARRITO
========================= */

function abrirCarrito() {

    actualizarCarrito();


    document.getElementById(
        "cartOverlay"
    ).classList.add("active");

}


/* =========================
   CERRAR CARRITO
========================= */

function cerrarCarrito() {

    document.getElementById(
        "cartOverlay"
    ).classList.remove("active");

}


/* =========================
   COMPRAR POR WHATSAPP
========================= */

function comprarCarrito() {


    /* -------------------------
       COMPROBAR CARRITO
    ------------------------- */

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    /* -------------------------
       FORMA DE PAGO
    ------------------------- */

    const paymentSelect =
        document.getElementById(
            "paymentMethod"
        );


    const formaPago =
        paymentSelect.value;


    if (!formaPago) {

        alert(
            "Por favor selecciona una forma de pago."
        );


        paymentSelect.focus();


        return;

    }


    /* -------------------------
       MENSAJE
    ------------------------- */

    let mensaje =
        "Hola 👋, quiero hacer un pedido en DAYANN BOUTIQUE 🖤🤎\n\n";


    carrito.forEach(
        function(producto) {


            const subtotal =
                producto.precio *
                producto.cantidad;


            mensaje +=
                "🛍️ PRODUCTO\n";


            mensaje +=
                "Nombre: " +
                producto.nombre +
                "\n";


            mensaje +=
                "Talla: " +
                producto.talla +
                "\n";


            mensaje +=
                "Color: " +
                producto.color +
                "\n";


            mensaje +=
                "Cantidad: " +
                producto.cantidad +
                "\n";


            mensaje +=
                "Precio: Q" +
                producto.precio.toFixed(2) +
                "\n";


            mensaje +=
                "Subtotal: Q" +
                subtotal.toFixed(2) +
                "\n\n";

        }
    );


    /* -------------------------
       TOTAL
    ------------------------- */

    const total =
        carrito.reduce(
            function(suma, producto) {

                return (
                    suma +
                    producto.precio *
                    producto.cantidad
                );

            },
            0
        );


    mensaje +=
        "💰 TOTAL: Q" +
        total.toFixed(2) +
        "\n\n";


    /* -------------------------
       PAGO
    ------------------------- */

    mensaje +=
        "💳 FORMA DE PAGO: " +
        formaPago +
        "\n\n";


    mensaje +=
        "Quedo pendiente de las instrucciones para realizar el pago. 😊";


    /* -------------------------
       WHATSAPP
    ------------------------- */

    const mensajeCodificado =
        encodeURIComponent(mensaje);


    const whatsapp =
        "https://wa.me/" +
        TELEFONO_WHATSAPP +
        "?text=" +
        mensajeCodificado;


    window.open(
        whatsapp,
        "_blank"
    );

}


/* =========================
   CERRAR MODAL AL TOCAR AFUERA
========================= */

document
    .getElementById("productModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                cerrarProducto();

            }

        }
    );


/* =========================
   CERRAR CARRITO AL TOCAR AFUERA
========================= */

document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                cerrarCarrito();

            }

        }
    );


/* =========================
   ESC PARA CERRAR
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            cerrarProducto();

            cerrarCarrito();

        }

    }
);
