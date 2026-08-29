/* =====================================================
   CONFIGURACIÓN DE DAYANN BOUTIQUE
===================================================== */

const CONFIG = {

    whatsapp: "50259824462",

  instagram:
        "https://www.instagram.com/dayann.boutique/",

    facebook:
        "https://www.facebook.com/share/1ZjGBejeD7/?mibextid=wwXIfr",

    tiktok:
        "https://www.tiktok.com/@dayann.boutique?_r=1&_t=ZS-99HKiDxClZl"

};


/* =====================================================
   PRODUCTOS
===================================================== */

const productos = [

    /* DAMAS */

    {
        id: 1,

        nombre:
            "Blusa Strapless",

        categoria:
            "damas",

        precio:
            149,

        descripcion:
            "Blusa elegante y versátil, ideal para combinar con jeans, pantalones o faldas.",

        tallas:
            ["S", "M", "L"],

        colores: [

            {
                nombre: "Beige",
                hex: "#d8c0a6"
            },

            {
                nombre: "Blanco",
                hex: "#f4f1ea"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1564257577054-3d0ea7321b70?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 2,

        nombre:
            "Vestido Drapeado",

        categoria:
            "damas",

        precio:
            199,

        descripcion:
            "Vestido femenino con diseño elegante para ocasiones casuales y especiales.",

        tallas:
            ["XS", "S", "M", "L"],

        colores: [

            {
                nombre: "Café",
                hex: "#795548"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            },

            {
                nombre: "Vino",
                hex: "#722f37"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 3,

        nombre:
            "Conjunto Elegante",

        categoria:
            "damas",

        precio:
            179,

        descripcion:
            "Conjunto moderno y elegante para crear un look sofisticado.",

        tallas:
            ["S", "M", "L"],

        colores: [

            {
                nombre: "Negro",
                hex: "#1c1c1c"
            },

            {
                nombre: "Beige",
                hex: "#d7c1a8"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 4,

        nombre:
            "Vestido Beige",

        categoria:
            "damas",

        precio:
            219,

        descripcion:
            "Vestido cómodo y elegante con acabado moderno.",

        tallas:
            ["S", "M", "L", "XL"],

        colores: [

            {
                nombre: "Beige",
                hex: "#d6bfa5"
            },

            {
                nombre: "Blanco",
                hex: "#f5f3ee"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85"
    },


    /* CABALLEROS */

    {
        id: 5,

        nombre:
            "Camisa Casual",

        categoria:
            "caballeros",

        precio:
            159,

        descripcion:
            "Camisa casual para caballero, ideal para combinar con jeans o pantalón formal.",

        tallas:
            ["S", "M", "L", "XL"],

        colores: [

            {
                nombre: "Blanco",
                hex: "#f5f5f5"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            },

            {
                nombre: "Azul",
                hex: "#324f6b"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 6,

        nombre:
            "Polo Elegante",

        categoria:
            "caballeros",

        precio:
            169,

        descripcion:
            "Polo de estilo limpio y elegante para uso diario.",

        tallas:
            ["S", "M", "L", "XL"],

        colores: [

            {
                nombre: "Beige",
                hex: "#c7ae8e"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            },

            {
                nombre: "Azul Marino",
                hex: "#1d2c44"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1625910513413-5fc45a7e981b?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 7,

        nombre:
            "Chaqueta Hombre",

        categoria:
            "caballeros",

        precio:
            249,

        descripcion:
            "Chaqueta de estilo casual para completar un look moderno.",

        tallas:
            ["M", "L", "XL"],

        colores: [

            {
                nombre: "Negro",
                hex: "#202020"
            },

            {
                nombre: "Café",
                hex: "#694b3a"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 8,

        nombre:
            "Camisa Formal",

        categoria:
            "caballeros",

        precio:
            189,

        descripcion:
            "Camisa formal para eventos, reuniones o un estilo más elegante.",

        tallas:
            ["S", "M", "L", "XL"],

        colores: [

            {
                nombre: "Blanco",
                hex: "#f5f5f5"
            },

            {
                nombre: "Celeste",
                hex: "#bcd5e6"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85"
    },


    /* BOLSOS */

    {
        id: 9,

        nombre:
            "Bolso Beige",

        categoria:
            "bolsos",

        precio:
            199,

        descripcion:
            "Bolso elegante y práctico para combinar con diferentes estilos.",

        tallas:
            ["Única"],

        colores: [

            {
                nombre: "Beige",
                hex: "#c8aa88"
            },

            {
                nombre: "Negro",
                hex: "#222222"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 10,

        nombre:
            "Bolso Elegante",

        categoria:
            "bolsos",

        precio:
            239,

        descripcion:
            "Bolso elegante con diseño moderno para complementar tu outfit.",

        tallas:
            ["Única"],

        colores: [

            {
                nombre: "Café",
                hex: "#795548"
            },

            {
                nombre: "Beige",
                hex: "#d1b99c"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85"
    },


    /* ACCESORIOS */

    {
        id: 11,

        nombre:
            "Collar Dorado",

        categoria:
            "accesorios",

        precio:
            89,

        descripcion:
            "Collar delicado para complementar looks elegantes y casuales.",

        tallas:
            ["Única"],

        colores: [

            {
                nombre: "Dorado",
                hex: "#c7a246"
            },

            {
                nombre: "Plateado",
                hex: "#b7b7b7"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85"
    },


    {
        id: 12,

        nombre:
            "Aretes Elegantes",

        categoria:
            "accesorios",

        precio:
            69,

        descripcion:
            "Aretes elegantes para ocasiones especiales y uso diario.",

        tallas:
            ["Única"],

        colores: [

            {
                nombre: "Dorado",
                hex: "#c7a246"
            },

            {
                nombre: "Plateado",
                hex: "#b7b7b7"
            }

        ],

        imagen:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let carrito =
    JSON.parse(
        localStorage.getItem(
            "dayannCarrito"
        )
    ) || [];


let favoritos =
    JSON.parse(
        localStorage.getItem(
            "dayannFavoritos"
        )
    ) || [];


let categoriaActual =
    "todos";


let productoActual =
    null;


let slideActual =
    0;


/* =====================================================
   SELECTORES
===================================================== */

const $ = selector =>
    document.querySelector(selector);


const $$ = selector =>
    [...document.querySelectorAll(selector)];


/* =====================================================
   PRECIO
===================================================== */

function moneda(valor) {

    return `Q${Number(valor).toFixed(2)}`;

}


/* =====================================================
   GUARDAR
===================================================== */

function guardar() {

    localStorage.setItem(

        "dayannCarrito",

        JSON.stringify(carrito)

    );


    localStorage.setItem(

        "dayannFavoritos",

        JSON.stringify(favoritos)

    );

}


/* =====================================================
   MENSAJE
===================================================== */

function mostrarMensaje(texto) {

    const toast =
        $("#toast");


    toast.textContent =
        texto;


    toast.classList.add(
        "visible"
    );


    clearTimeout(
        toast.temporizador
    );


    toast.temporizador =
        setTimeout(
            () => {

                toast.classList.remove(
                    "visible"
                );

            },

            2200
        );

}


/* =====================================================
   TARJETA PRODUCTO
===================================================== */

function crearProducto(producto) {

    const favorito =
        favoritos.includes(
            producto.id
        );


    return `

        <article class="producto">


            <div
                class="producto-imagen"
                data-ver-producto="${producto.id}"
            >

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >


                <button
                    class="favorito
                    ${favorito ? "activo" : ""}"
                    data-favorito="${producto.id}"
                    aria-label="Favorito"
                >

                    ${favorito ? "♥" : "♡"}

                </button>

            </div>


            <div class="producto-info">

                <h3
                    data-ver-producto="${producto.id}"
                >
                    ${producto.nombre}
                </h3>


                <div class="precio">

                    ${moneda(producto.precio)}

                </div>


                <button
                    class="btn-ver-producto"
                    data-ver-producto="${producto.id}"
                >

                    VER PRODUCTO

                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   NUEVA COLECCIÓN
===================================================== */

function mostrarNuevaColeccion() {

    $("#nuevaColeccion").innerHTML =

        productos
        .slice(0, 4)
        .map(crearProducto)
        .join("");

}


/* =====================================================
   CATÁLOGO
===================================================== */

function obtenerProductosCategoria(
    categoria
) {

    if (
        categoria === "todos"
    ) {

        return productos;

    }


    return productos.filter(

        producto =>
            producto.categoria ===
            categoria

    );

}


/* =====================================================
   MOSTRAR CATÁLOGO
===================================================== */

function mostrarCatalogo(
    categoria,
    mover = true
) {

    categoriaActual =
        categoria;


    const nombres = {

        todos:
            "TODOS LOS PRODUCTOS",

        damas:
            "CATÁLOGO DAMAS",

        caballeros:
            "CATÁLOGO CABALLEROS",

        bolsos:
            "CATÁLOGO DE BOLSOS",

        accesorios:
            "CATÁLOGO DE ACCESORIOS"

    };


    $("#tituloCatalogo").textContent =
        nombres[categoria] ||
        "TODOS LOS PRODUCTOS";


    const lista =
        obtenerProductosCategoria(
            categoria
        );


    $("#productosCatalogo")
        .innerHTML =

        lista
        .map(crearProducto)
        .join("");


    $$(".filtro").forEach(
        boton => {

            boton.classList.toggle(

                "active",

                boton.dataset.catalogo ===
                categoria

            );

        }
    );


    if (mover) {

        $("#catalogo")
            .scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

    }

}


/* =====================================================
   ABRIR PRODUCTO
===================================================== */

function abrirProducto(id) {

    const producto =
        productos.find(
            item =>
                item.id === id
        );


    if (!producto) {

        return;

    }


    productoActual =
        producto;


    const tallasHTML =

        producto.tallas
        .map(
            (talla, index) => `

                <label class="opcion">

                    <input
                        type="radio"
                        name="tallaProducto"
                        value="${talla}"
                        ${index === 0 ? "checked" : ""}
                    >

                    <span>
                        ${talla}
                    </span>

                </label>

            `
        )
        .join("");


    const coloresHTML =

        producto.colores
        .map(
            (color, index) => `

                <label class="opcion color-opcion">

                    <input
                        type="radio"
                        name="colorProducto"
                        value="${color.nombre}"
                        ${index === 0 ? "checked" : ""}
                    >

                    <span>

                        <i
                            class="muestra-color"
                            style="
                            background:${color.hex};
                            "
                        ></i>

                        ${color.nombre}

                    </span>

                </label>

            `
        )
        .join("");


    $("#detalleProducto")
        .innerHTML = `


        <div class="detalle-producto">


            <div class="detalle-imagen">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

            </div>


            <div class="detalle-info">


                <div class="detalle-categoria">

                    ${producto.categoria}

                </div>


                <h2>

                    ${producto.nombre}

                </h2>


                <div class="detalle-precio">

                    ${moneda(producto.precio)}

                </div>


                <p class="detalle-descripcion">

                    ${producto.descripcion}

                </p>


                <div class="selector-producto">

                    <strong>
                        ELIGE TU TALLA
                    </strong>

                    <div class="opciones">

                        ${tallasHTML}

                    </div>

                </div>


                <div class="selector-producto">

                    <strong>
                        ELIGE EL COLOR
                    </strong>

                    <div class="opciones">

                        ${coloresHTML}

                    </div>

                </div>


                <div class="selector-producto">

                    <strong>
                        CANTIDAD
                    </strong>

                    <div class="cantidad-producto">

                        <input
                            id="cantidadProducto"
                            type="number"
                            value="1"
                            min="1"
                            max="10"
                        >

                    </div>

                </div>


                <button
                    id="agregarProductoCarrito"
                    class="
                    btn
                    btn-dorado
                    agregar-producto
                    "
                >

                    🛍 AGREGAR AL CARRITO

                </button>


            </div>

        </div>

    `;


    abrirModal(
        "modalProducto"
    );

}


/* =====================================================
   AGREGAR PRODUCTO CON VARIACIONES
===================================================== */

function agregarProductoSeleccionado() {

    if (!productoActual) {

        return;

    }


    const talla =

        document.querySelector(
            'input[name="tallaProducto"]:checked'
        )?.value;


    const color =

        document.querySelector(
            'input[name="colorProducto"]:checked'
        )?.value;


    let cantidad =

        Number(
            $("#cantidadProducto")?.value
        );


    if (
        !cantidad ||
        cantidad < 1
    ) {

        cantidad = 1;

    }


    const existente =

        carrito.find(

            item =>

                item.id ===
                productoActual.id

                &&

                item.talla ===
                talla

                &&

                item.color ===
                color

        );


    if (existente) {

        existente.cantidad +=
            cantidad;

    }

    else {

        carrito.push({

            id:
                productoActual.id,

            talla:
                talla,

            color:
                color,

            cantidad:
                cantidad

        });

    }


    guardar();

    actualizarCarrito();


    cerrarModal(
        "modalProducto"
    );


    mostrarMensaje(
        "Producto agregado al carrito"
    );

}


/* =====================================================
   ACTUALIZAR CARRITO
===================================================== */

function actualizarCarrito() {

    const contenedor =
        $("#productosCarrito");


    if (
        carrito.length === 0
    ) {

        contenedor.innerHTML = `

            <div
                style="
                text-align:center;
                padding:50px 10px;
                color:#74695e;
                "
            >

                Tu carrito está vacío.

            </div>

        `;

    }

    else {

        contenedor.innerHTML =

            carrito
            .map(
                (item, index) => {


                    const producto =

                        productos.find(
                            p =>
                                p.id ===
                                item.id
                        );


                    if (!producto) {

                        return "";

                    }


                    return `


                        <div class="carrito-item">


                            <img
                                src="${producto.imagen}"
                                alt="${producto.nombre}"
                            >


                            <div>


                                <h4>

                                    ${producto.nombre}

                                </h4>


                                <p class="variante">

                                    Talla:
                                    <strong>
                                        ${item.talla}
                                    </strong>

                                </p>


                                <p class="variante">

                                    Color:
                                    <strong>
                                        ${item.color}
                                    </strong>

                                </p>


                                <div class="carrito-precio">

                                    ${moneda(producto.precio)}

                                </div>


                                <div class="cantidad">


                                    <button
                                        data-restar="${index}"
                                    >
                                        −
                                    </button>


                                    <span>

                                        ${item.cantidad}

                                    </span>


                                    <button
                                        data-sumar="${index}"
                                    >
                                        +
                                    </button>


                                </div>

                            </div>


                            <button
                                class="eliminar"
                                data-eliminar="${index}"
                            >

                                ×

                            </button>


                        </div>


                    `;

                }
            )
            .join("");

    }


    const cantidad =

        carrito.reduce(

            (total, item) =>
                total +
                item.cantidad,

            0

        );


    $("#contadorCarrito")
        .textContent =
        cantidad;


    const total =

        carrito.reduce(

            (suma, item) => {


                const producto =

                    productos.find(
                        p =>
                            p.id ===
                            item.id
                    );


                if (!producto) {

                    return suma;

                }


                return suma +

                    producto.precio *
                    item.cantidad;

            },

            0

        );


    $("#totalCarrito")
        .textContent =
        moneda(total);

}


/* =====================================================
   SUMAR
===================================================== */

function sumarCantidad(index) {

    if (
        !carrito[index]
    ) {

        return;

    }


    carrito[index]
        .cantidad++;


    guardar();

    actualizarCarrito();

}


/* =====================================================
   RESTAR
===================================================== */

function restarCantidad(index) {

    if (
        !carrito[index]
    ) {

        return;

    }


    carrito[index]
        .cantidad--;


    if (
        carrito[index]
        .cantidad <= 0
    ) {

        carrito.splice(
            index,
            1
        );

    }


    guardar();

    actualizarCarrito();

}


/* =====================================================
   ELIMINAR
===================================================== */

function eliminarCarrito(index) {

    carrito.splice(
        index,
        1
    );


    guardar();

    actualizarCarrito();


    mostrarMensaje(
        "Producto eliminado"
    );

}


/* =====================================================
   FAVORITO
===================================================== */

function cambiarFavorito(id) {

    if (
        favoritos.includes(id)
    ) {

        favoritos =
            favoritos.filter(
                item =>
                    item !== id
            );


        mostrarMensaje(
            "Eliminado de favoritos"
        );

    }

    else {

        favoritos.push(id);


        mostrarMensaje(
            "Agregado a favoritos"
        );

    }


    guardar();


    mostrarNuevaColeccion();


    mostrarCatalogo(
        categoriaActual,
        false
    );

}


/* =====================================================
   MOSTRAR FAVORITOS
===================================================== */

function mostrarFavoritos() {

    const lista =

        productos.filter(

            producto =>
                favoritos.includes(
                    producto.id
                )

        );


    if (
        lista.length === 0
    ) {

        $("#listaFavoritos")
            .innerHTML = `

                <p>
                    Todavía no tienes
                    productos favoritos.
                </p>

            `;


        return;

    }


    $("#listaFavoritos")
        .innerHTML =

        lista
        .map(
            producto => `


                <div class="resultado">


                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                    >


                    <div>

                        <strong>

                            ${producto.nombre}

                        </strong>

                        <br>

                        ${moneda(producto.precio)}

                    </div>


                    <button
                        data-ver-producto="${producto.id}"
                    >

                        VER

                    </button>


                </div>


            `
        )
        .join("");

}


/* =====================================================
   BUSCAR
===================================================== */

function buscarProductos(texto) {

    const termino =

        texto
        .trim()
        .toLowerCase();


    if (!termino) {

        $("#resultadosBusqueda")
            .innerHTML = `

                <p>
                    Escribe el nombre
                    de un producto.
                </p>

            `;


        return;

    }


    const resultados =

        productos.filter(

            producto =>

                producto.nombre
                .toLowerCase()
                .includes(termino)

                ||

                producto.categoria
                .toLowerCase()
                .includes(termino)

        );


    if (
        resultados.length === 0
    ) {

        $("#resultadosBusqueda")
            .innerHTML = `

                <p>
                    No se encontraron productos.
                </p>

            `;


        return;

    }


    $("#resultadosBusqueda")
        .innerHTML =

        resultados
        .map(
            producto => `


                <div class="resultado">


                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                    >


                    <div>

                        <strong>

                            ${producto.nombre}

                        </strong>

                        <br>

                        ${moneda(producto.precio)}

                    </div>


                    <button
                        data-ver-producto="${producto.id}"
                    >

                        VER

                    </button>


                </div>


            `
        )
        .join("");

}


/* =====================================================
   WHATSAPP
===================================================== */

function abrirWhatsapp() {

    const mensaje =

        encodeURIComponent(

            "Hola DAYANN Boutique, quiero información sobre sus productos."

        );


    window.open(

        `https://wa.me/${CONFIG.whatsapp}?text=${mensaje}`,

        "_blank"

    );

}


/* =====================================================
   PEDIDO SHEIN
===================================================== */

function abrirPedidoShein() {

    const mensaje =

        encodeURIComponent(

            "Hola DAYANN Boutique, quiero hacer un pedido de SHEIN. ¿Me pueden ayudar?"

        );


    window.open(

        `https://wa.me/${CONFIG.whatsapp}?text=${mensaje}`,

        "_blank"

    );

}


/* =====================================================
   MÉTODO DE PAGO
===================================================== */

function obtenerMetodoPago() {

    const seleccionado =

        document.querySelector(
            'input[name="metodoPago"]:checked'
        );


    return seleccionado
        ? seleccionado.value
        : "Pago contra entrega";

}


/* =====================================================
   FINALIZAR PEDIDO
===================================================== */

function finalizarPedido() {

    if (
        carrito.length === 0
    ) {

        mostrarMensaje(
            "Tu carrito está vacío"
        );


        return;

    }


    const metodoPago =
        obtenerMetodoPago();


    let texto =

        "Hola DAYANN Boutique, quiero realizar este pedido:%0A%0A";


    carrito.forEach(
        item => {


            const producto =

                productos.find(
                    p =>
                        p.id ===
                        item.id
                );


            if (!producto) {

                return;

            }


            texto +=

                `🛍 ${producto.nombre}%0A`;


            texto +=

                `Talla: ${item.talla}%0A`;


            texto +=

                `Color: ${item.color}%0A`;


            texto +=

                `Cantidad: ${item.cantidad}%0A`;


            texto +=

                `Subtotal: ${moneda(
                    producto.precio *
                    item.cantidad
                )}%0A%0A`;

        }
    );


    const total =

        carrito.reduce(

            (suma, item) => {


                const producto =

                    productos.find(
                        p =>
                            p.id ===
                            item.id
                    );


                return suma +

                    (
                        producto
                        ?
                        producto.precio *
                        item.cantidad
                        :
                        0
                    );

            },

            0

        );


    texto +=

        `💰 TOTAL: ${moneda(total)}%0A%0A`;


    texto +=

        `💳 MÉTODO DE PAGO: ${metodoPago}%0A%0A`;


    texto +=

        "¿Me pueden confirmar disponibilidad y los datos para completar mi pedido?";


    window.open(

        `https://wa.me/${CONFIG.whatsapp}?text=${texto}`,

        "_blank"

    );

}


/* =====================================================
   MODALES
===================================================== */

function abrirModal(id) {

    $("#" + id)
        .classList
        .add(
            "visible"
        );


    document.body
        .classList
        .add(
            "sin-scroll"
        );

}


function cerrarModal(id) {

    $("#" + id)
        .classList
        .remove(
            "visible"
        );


    document.body
        .classList
        .remove(
            "sin-scroll"
        );

}


/* =====================================================
   ABRIR CARRITO
===================================================== */

function abrirCarrito() {

    $("#carritoLateral")
        .classList
        .add(
            "abierto"
        );


    $("#overlay")
        .classList
        .add(
            "visible"
        );


    document.body
        .classList
        .add(
            "sin-scroll"
        );

}


/* =====================================================
   CERRAR CARRITO
===================================================== */

function cerrarCarrito() {

    $("#carritoLateral")
        .classList
        .remove(
            "abierto"
        );


    $("#overlay")
        .classList
        .remove(
            "visible"
        );


    document.body
        .classList
        .remove(
            "sin-scroll"
        );

}


/* =====================================================
   HERO
===================================================== */

function mostrarSlide(numero) {

    const slides =
        $$(".hero-slide");


    const puntos =
        $$(".hero-puntos button");


    slideActual =

        (
            numero +
            slides.length
        )

        %

        slides.length;


    slides.forEach(
        (slide, index) => {

            slide.classList.toggle(

                "active",

                index ===
                slideActual

            );

        }
    );


    puntos.forEach(
        (punto, index) => {

            punto.classList.toggle(

                "active",

                index ===
                slideActual

            );

        }
    );

}


/* =====================================================
   INICIO
===================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        /* REDES SOCIALES */

        $("#instagram").href =
            CONFIG.instagram;


        $("#facebook").href =
            CONFIG.facebook;


        $("#tiktok").href =
            CONFIG.tiktok;


        /* PRODUCTOS */

        mostrarNuevaColeccion();


        mostrarCatalogo(
            "todos",
            false
        );


        actualizarCarrito();


        /* EVENTOS GENERALES */

        document.addEventListener(
            "click",
            evento => {


                /* CATÁLOGO */

                const catalogo =

                    evento.target.closest(
                        "[data-catalogo]"
                    );


                if (catalogo) {

                    evento.preventDefault();


                    mostrarCatalogo(

                        catalogo.dataset.catalogo

                    );


                    $("#menuMovil")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#overlay")
                        .classList
                        .remove(
                            "visible"
                        );


                    document.body
                        .classList
                        .remove(
                            "sin-scroll"
                        );

                }


                /* VER PRODUCTO */

                const verProducto =

                    evento.target.closest(
                        "[data-ver-producto]"
                    );


                if (verProducto) {

                    const id =

                        Number(
                            verProducto
                            .dataset
                            .verProducto
                        );


                    cerrarModal(
                        "modalBuscador"
                    );


                    cerrarModal(
                        "modalFavoritos"
                    );


                    abrirProducto(
                        id
                    );

                }


                /* FAVORITO */

                const favorito =

                    evento.target.closest(
                        "[data-favorito]"
                    );


                if (favorito) {

                    evento.stopPropagation();


                    cambiarFavorito(

                        Number(
                            favorito
                            .dataset
                            .favorito
                        )

                    );

                }


                /* AGREGAR PRODUCTO */

                if (
                    evento.target.id ===
                    "agregarProductoCarrito"
                ) {

                    agregarProductoSeleccionado();

                }


                /* SUMAR */

                const sumar =

                    evento.target.closest(
                        "[data-sumar]"
                    );


                if (sumar) {

                    sumarCantidad(

                        Number(
                            sumar.dataset.sumar
                        )

                    );

                }


                /* RESTAR */

                const restar =

                    evento.target.closest(
                        "[data-restar]"
                    );


                if (restar) {

                    restarCantidad(

                        Number(
                            restar.dataset.restar
                        )

                    );

                }


                /* ELIMINAR */

                const eliminar =

                    evento.target.closest(
                        "[data-eliminar]"
                    );


                if (eliminar) {

                    eliminarCarrito(

                        Number(
                            eliminar.dataset.eliminar
                        )

                    );

                }

            }
        );


        /* MENÚ */

        $("#abrirMenu")
            .addEventListener(
                "click",
                () => {


                    $("#menuMovil")
                        .classList
                        .add(
                            "abierto"
                        );


                    $("#overlay")
                        .classList
                        .add(
                            "visible"
                        );


                    document.body
                        .classList
                        .add(
                            "sin-scroll"
                        );

                }
            );


        $("#cerrarMenu")
            .addEventListener(
                "click",
                () => {


                    $("#menuMovil")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#overlay")
                        .classList
                        .remove(
                            "visible"
                        );


                    document.body
                        .classList
                        .remove(
                            "sin-scroll"
                        );

                }
            );


        /* OVERLAY */

        $("#overlay")
            .addEventListener(
                "click",
                () => {


                    $("#menuMovil")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#carritoLateral")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#overlay")
                        .classList
                        .remove(
                            "visible"
                        );


                    document.body
                        .classList
                        .remove(
                            "sin-scroll"
                        );

                }
            );


        /* BUSCADOR */

        $("#abrirBuscador")
            .addEventListener(
                "click",
                () => {


                    abrirModal(
                        "modalBuscador"
                    );


                    setTimeout(
                        () => {

                            $("#buscador")
                                .focus();

                        },

                        100
                    );

                }
            );


        $("#buscador")
            .addEventListener(
                "input",
                evento => {


                    buscarProductos(

                        evento.target.value

                    );

                }
            );


        /* FAVORITOS */

        $("#abrirFavoritos")
            .addEventListener(
                "click",
                () => {


                    mostrarFavoritos();


                    abrirModal(
                        "modalFavoritos"
                    );

                }
            );


        /* CERRAR MODALES */

        $$("[data-cerrar]")
            .forEach(
                boton => {


                    boton.addEventListener(
                        "click",
                        () => {


                            cerrarModal(

                                boton.dataset.cerrar

                            );

                        }
                    );

                }
            );


        $$(".modal")
            .forEach(
                modal => {


                    modal.addEventListener(
                        "click",
                        evento => {


                            if (
                                evento.target ===
                                modal
                            ) {

                                cerrarModal(
                                    modal.id
                                );

                            }

                        }
                    );

                }
            );


        /* CARRITO */

        $("#abrirCarrito")
            .addEventListener(
                "click",
                abrirCarrito
            );


        $("#cerrarCarrito")
            .addEventListener(
                "click",
                cerrarCarrito
            );


        $("#vaciarCarrito")
            .addEventListener(
                "click",
                () => {


                    carrito = [];


                    guardar();


                    actualizarCarrito();


                    mostrarMensaje(
                        "Carrito vaciado"
                    );

                }
            );


        /* FINALIZAR PEDIDO */

        $("#finalizarPedido")
            .addEventListener(
                "click",
                finalizarPedido
            );


        /* WHATSAPP */

        $$(".boton-whatsapp")
            .forEach(
                boton => {


                    boton.addEventListener(
                        "click",
                        abrirWhatsapp
                    );

                }
            );


        /* SHEIN */

        $("#pedidoShein")
            .addEventListener(
                "click",
                abrirPedidoShein
            );


        /* HERO */

        $("#heroSiguiente")
            .addEventListener(
                "click",
                () => {


                    mostrarSlide(
                        slideActual + 1
                    );

                }
            );


        $("#heroAnterior")
            .addEventListener(
                "click",
                () => {


                    mostrarSlide(
                        slideActual - 1
                    );

                }
            );


        $$(".hero-puntos button")
            .forEach(
                boton => {


                    boton.addEventListener(
                        "click",
                        () => {


                            mostrarSlide(

                                Number(
                                    boton.dataset.slide
                                )

                            );

                        }
                    );

                }
            );


        /* SLIDER AUTOMÁTICO */

        setInterval(
            () => {


                mostrarSlide(
                    slideActual + 1
                );

            },

            6000
        );


        /* ESCAPE */

        document.addEventListener(
            "keydown",
            evento => {


                if (
                    evento.key ===
                    "Escape"
                ) {


                    $$(".modal")
                        .forEach(
                            modal => {

                                modal.classList
                                    .remove(
                                        "visible"
                                    );

                            }
                        );


                    $("#menuMovil")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#carritoLateral")
                        .classList
                        .remove(
                            "abierto"
                        );


                    $("#overlay")
                        .classList
                        .remove(
                            "visible"
                        );


                    document.body
                        .classList
                        .remove(
                            "sin-scroll"
                        );

                }

            }
        );

    }

);