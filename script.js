const products = [

    /* MUJER */

    {
        id: 1,
        name: "Vestido Beige Elegante",
        category: "Vestidos",
        gender: "Mujer",
        price: 349,
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        description: "Vestido elegante y femenino, perfecto para ocasiones especiales."
    },

    {
        id: 2,
        name: "Blusa Minimalista",
        category: "Mujer",
        gender: "Mujer",
        price: 189,
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1564257577054-ef7d6f17c6c0?auto=format&fit=crop&w=900&q=85",
        description: "Blusa de estilo minimalista que combina con cualquier outfit."
    },

    {
        id: 3,
        name: "Vestido Negro Clásico",
        category: "Vestidos",
        gender: "Mujer",
        price: 399,
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
        description: "Un clásico indispensable para un look elegante."
    },

    {
        id: 4,
        name: "Conjunto Casual",
        category: "Mujer",
        gender: "Mujer",
        price: 329,
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
        description: "Conjunto cómodo y moderno para el día a día."
    },

    {
        id: 5,
        name: "Blazer Negro",
        category: "Mujer",
        gender: "Mujer",
        price: 459,
        sizes: ["XS", "S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        description: "Blazer negro con un estilo sofisticado y versátil."
    },


    /* HOMBRE */

    {
        id: 6,
        name: "Camisa Blanca Oxford",
        category: "Hombre",
        gender: "Hombre",
        price: 229,
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?auto=format&fit=crop&w=900&q=85",
        description: "Camisa blanca clásica para un look limpio y elegante."
    },

    {
        id: 7,
        name: "Camisa Negra Casual",
        category: "Hombre",
        gender: "Hombre",
        price: 249,
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85",
        description: "Camisa negra moderna para combinar con diferentes estilos."
    },

    {
        id: 8,
        name: "Pantalón Negro",
        category: "Hombre",
        gender: "Hombre",
        price: 299,
        sizes: ["28", "30", "32", "34", "36", "38"],
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85",
        description: "Pantalón negro de corte moderno y versátil."
    },

    {
        id: 9,
        name: "Chaqueta Casual",
        category: "Hombre",
        gender: "Hombre",
        price: 449,
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        description: "Chaqueta casual ideal para complementar outfits modernos."
    },

    {
        id: 10,
        name: "Polo Beige",
        category: "Hombre",
        gender: "Hombre",
        price: 219,
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1625910513413-5fc45d0e09e9?auto=format&fit=crop&w=900&q=85",
        description: "Polo beige cómodo y elegante para el día a día."
    },


    /* ACCESORIOS */

    {
        id: 11,
        name: "Bolso Beige Premium",
        category: "Accesorios",
        gender: "Mujer",
        price: 299,
        sizes: ["Única"],
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
        description: "Bolso beige sofisticado para complementar cualquier conjunto."
    },

    {
        id: 12,
        name: "Collar Dorado",
        category: "Accesorios",
        gender: "Mujer",
        price: 149,
        sizes: ["Única"],
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
        description: "Accesorio delicado para agregar un toque elegante."
    },

    {
        id: 13,
        name: "Bolso Negro",
        category: "Accesorios",
        gender: "Mujer",
        price: 319,
        sizes: ["Única"],
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
        description: "Bolso negro elegante para cualquier ocasión."
    }

];


let cart =
    JSON.parse(localStorage.getItem("dayannCart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("dayannFavorites")) || [];

let currentCategory = "Todos";


const productsGrid =
    document.getElementById("productsGrid");

const cartCounter =
    document.getElementById("cartCounter");

const favoriteCounter =
    document.getElementById("favoriteCounter");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const favoriteItems =
    document.getElementById("favoriteItems");

const noResults =
    document.getElementById("noResults");

const searchContainer =
    document.getElementById("searchContainer");

const searchInput =
    document.getElementById("searchInput");

const mobileMenu =
    document.getElementById("mobileMenu");

const toast =
    document.getElementById("toast");


/* GUARDAR */

function saveData() {

    localStorage.setItem(
        "dayannCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "dayannFavorites",
        JSON.stringify(favorites)
    );

    updateCounters();
}


/* CONTADORES */

function updateCounters() {

    const totalProducts =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    cartCounter.textContent =
        totalProducts;

    favoriteCounter.textContent =
        favorites.length;
}


/* PRODUCTOS FILTRADOS */

function getFilteredProducts() {

    let filtered =
        [...products];


    if (currentCategory !== "Todos") {

        if (
            currentCategory === "Hombre"
        ) {

            filtered =
                filtered.filter(
                    product =>
                        product.gender === "Hombre"
                );

        } else if (
            currentCategory === "Mujer"
        ) {

            filtered =
                filtered.filter(
                    product =>
                        product.gender === "Mujer"
                );

        } else {

            filtered =
                filtered.filter(
                    product =>
                        product.category === currentCategory
                );

        }

    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    if (search) {

        filtered =
            filtered.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.gender
                        .toLowerCase()
                        .includes(search)
            );
    }


    return filtered;
}


/* MOSTRAR PRODUCTOS */

function renderProducts() {

    const filtered =
        getFilteredProducts();

    productsGrid.innerHTML = "";


    if (filtered.length === 0) {

        noResults.style.display =
            "block";

        return;
    }


    noResults.style.display =
        "none";


    filtered.forEach(product => {

        const isFavorite =
            favorites.includes(product.id);


        const card =
            document.createElement("article");


        card.className =
            "product-card";


        const sizeOptions =
            product.sizes
                .map(
                    size =>
                        `<option value="${size}">${size}</option>`
                )
                .join("");


        card.innerHTML = `

            <div class="product-image">

                <span class="product-badge">
                    ${product.gender.toUpperCase()}
                </span>

                <button
                    class="favorite-product ${
                        isFavorite ? "active" : ""
                    }"
                    data-favorite="${product.id}"
                >
                    ${
                        isFavorite
                            ? "♥"
                            : "♡"
                    }
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="open-product"
                    data-id="${product.id}"
                >

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-price">
                    Q${product.price.toFixed(2)}
                </div>


                <select
                    class="size-select"
                    id="size-${product.id}"
                >

                    <option value="">
                        Selecciona talla
                    </option>

                    ${sizeOptions}

                </select>


                <button
                    class="add-cart"
                    data-cart="${product.id}"
                >
                    AGREGAR AL CARRITO
                </button>

            </div>
        `;


        productsGrid.appendChild(card);

    });

}


/* FILTRO */

function setFilter(category) {

    currentCategory =
        category;


    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === category
            );

        });


    renderProducts();
}


/* FAVORITOS */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

        showToast(
            "Eliminado de favoritos."
        );

    } else {

        favorites.push(id);

        showToast(
            "Agregado a favoritos."
        );
    }


    saveData();

    renderProducts();

    renderFavorites();
}


/* AGREGAR AL CARRITO */

function addToCart(id, selectedSize = null) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    if (!selectedSize) {

        const select =
            document.getElementById(
                `size-${id}`
            );

        if (select) {
            selectedSize =
                select.value;
        }
    }


    if (!selectedSize) {

        showToast(
            "Selecciona una talla."
        );

        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === id &&
                item.size === selectedSize
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            category: product.category,
            gender: product.gender,
            price: product.price,
            image: product.image,
            size: selectedSize,
            quantity: 1

        });
    }


    saveData();

    renderCart();

    showToast(
        `${product.name} - talla ${selectedSize} agregado al carrito.`
    );
}


/* MOSTRAR CARRITO */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="cart-empty">
                Tu carrito está vacío.
            </div>

        `;


        cartTotal.textContent =
            "0.00";

        return;
    }


    let total = 0;


    cart.forEach((item, index) => {

        total +=
            item.price *
            item.quantity;


        const element =
            document.createElement("div");


        element.className =
            "cart-item";


        element.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-size">
                    Talla: <strong>${item.size}</strong>
                </div>

                <div class="cart-price">
                    Q${item.price.toFixed(2)}
                </div>


                <div class="quantity">

                    <button
                        data-minus="${index}"
                    >
                        -
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        data-plus="${index}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                data-remove="${index}"
            >
                Eliminar
            </button>
        `;


        cartItems.appendChild(
            element
        );

    });


    cartTotal.textContent =
        total.toFixed(2);
}


/* CAMBIAR CANTIDAD */

function changeQuantity(
    index,
    amount
) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );
    }


    saveData();

    renderCart();
}


/* ELIMINAR */

function removeFromCart(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(
        index,
        1
    );


    saveData();

    renderCart();

    showToast(
        "Producto eliminado."
    );
}


/* FAVORITOS */

function renderFavorites() {

    favoriteItems.innerHTML = "";


    const favoriteProducts =
        products.filter(
            product =>
                favorites.includes(
                    product.id
                )
        );


    if (
        favoriteProducts.length === 0
    ) {

        favoriteItems.innerHTML = `

            <div class="cart-empty">
                No tienes productos favoritos.
            </div>

        `;

        return;
    }


    favoriteProducts.forEach(product => {

        const element =
            document.createElement("div");


        element.className =
            "favorite-item";


        element.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="favorite-info">

                <h4>
                    ${product.name}
                </h4>

                <p>
                    Q${product.price.toFixed(2)}
                </p>

            </div>


            <div class="favorite-actions">

                <button
                    class="add-cart"
                    data-favorite-cart="${product.id}"
                >
                    AGREGAR
                </button>

                <button
                    class="remove-item"
                    data-fav-remove="${product.id}"
                >
                    ×
                </button>

            </div>
        `;


        favoriteItems.appendChild(
            element
        );

    });
}


/* DETALLE */

function showProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    const productDetail =
        document.getElementById(
            "productDetail"
        );


    const sizeOptions =
        product.sizes
            .map(
                size =>
                    `<option value="${size}">${size}</option>`
            )
            .join("");


    productDetail.innerHTML = `

        <img
            src="${product.image}"
            alt="${product.name}"
            class="product-detail-image"
        >


        <div class="product-detail-content">

            <span>
                ${product.gender} · ${product.category}
            </span>


            <h2>
                ${product.name}
            </h2>


            <div class="detail-price">
                Q${product.price.toFixed(2)}
            </div>


            <p>
                ${product.description}
            </p>


            <label class="detail-label">
                Selecciona tu talla
            </label>


            <select
                class="detail-size-select"
                id="detailSize-${product.id}"
            >

                <option value="">
                    Selecciona talla
                </option>

                ${sizeOptions}

            </select>


            <button
                class="btn btn-dark"
                data-detail-cart="${product.id}"
            >
                AGREGAR AL CARRITO
            </button>

        </div>

    `;


    openModal(
        "productModal"
    );
}


/* MODALES */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("active");
}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");
}


/* TOAST */

function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);
}


/* EVENTOS */

document.addEventListener(
    "click",
    event => {

        const favoriteButton =
            event.target.closest(
                "[data-favorite]"
            );


        if (favoriteButton) {

            toggleFavorite(
                Number(
                    favoriteButton.dataset.favorite
                )
            );

            return;
        }


        const cartButton =
            event.target.closest(
                "[data-cart]"
            );


        if (cartButton) {

            const id =
                Number(
                    cartButton.dataset.cart
                );

            const select =
                document.getElementById(
                    `size-${id}`
                );

            const size =
                select
                    ? select.value
                    : null;


            addToCart(
                id,
                size
            );

            return;
        }


        const favoriteCartButton =
            event.target.closest(
                "[data-favorite-cart]"
            );


        if (favoriteCartButton) {

            const id =
                Number(
                    favoriteCartButton.dataset.favoriteCart
                );


            const product =
                products.find(
                    item =>
                        item.id === id
                );


            if (product) {

                addToCart(
                    id,
                    product.sizes[0]
                );
            }

            return;
        }


        const detailCartButton =
            event.target.closest(
                "[data-detail-cart]"
            );


        if (detailCartButton) {

            const id =
                Number(
                    detailCartButton.dataset.detailCart
                );


            const select =
                document.getElementById(
                    `detailSize-${id}`
                );


            const size =
                select
                    ? select.value
                    : null;


            addToCart(
                id,
                size
            );


            if (size) {
                closeModal(
                    "productModal"
                );
            }

            return;
        }


        const openProduct =
            event.target.closest(
                ".open-product"
            );


        if (openProduct) {

            showProduct(
                Number(
                    openProduct.dataset.id
                )
            );

            return;
        }


        const minusButton =
            event.target.closest(
                "[data-minus]"
            );


        if (minusButton) {

            changeQuantity(
                Number(
                    minusButton.dataset.minus
                ),
                -1
            );

            return;
        }


        const plusButton =
            event.target.closest(
                "[data-plus]"
            );


        if (plusButton) {

            changeQuantity(
                Number(
                    plusButton.dataset.plus
                ),
                1
            );

            return;
        }


        const removeButton =
            event.target.closest(
                "[data-remove]"
            );


        if (removeButton) {

            removeFromCart(
                Number(
                    removeButton.dataset.remove
                )
            );

            return;
        }


        const favoriteRemove =
            event.target.closest(
                "[data-fav-remove]"
            );


        if (favoriteRemove) {

            toggleFavorite(
                Number(
                    favoriteRemove.dataset.favRemove
                )
            );

            return;
        }


        const closeButton =
            event.target.closest(
                "[data-close]"
            );


        if (closeButton) {

            closeModal(
                closeButton.dataset.close
            );

        }

    }
);


/* FILTROS */

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setFilter(
                    button.dataset.filter
                );

                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* CATEGORÍAS */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                setFilter(
                    button.dataset.category
                );


                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* BUSCADOR */

document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        () => {

            searchContainer.classList.toggle(
                "active"
            );


            if (
                searchContainer.classList.contains(
                    "active"
                )
            ) {

                searchInput.focus();

            }

        }
    );


searchInput.addEventListener(
    "input",
    () => {

        renderProducts();

    }
);


/* CARRITO */

document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        () => {

            renderCart();

            openModal(
                "cartModal"
            );

        }
    );


/* FAVORITOS */

document
    .getElementById("favoriteBtn")
    .addEventListener(
        "click",
        () => {

            renderFavorites();

            openModal(
                "favoriteModal"
            );

        }
    );


/* MENÚ MÓVIL */

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* CERRAR MODALES */

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


/* CHECKOUT */

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Tu carrito está vacío."
                );

                return;
            }


            closeModal(
                "cartModal"
            );


            openModal(
                "checkoutModal"
            );

        }
    );


document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (cart.length === 0) {

                showToast(
                    "Tu carrito está vacío."
                );

                return;
            }


            const nombre =
                document.getElementById(
                    "customerName"
                ).value;


            const telefono =
                document.getElementById(
                    "customerPhone"
                ).value;


            const direccion =
                document.getElementById(
                    "customerAddress"
                ).value;


            const ciudad =
                document.getElementById(
                    "customerCity"
                ).value;


            const metodoPago =
                document.getElementById(
                    "paymentMethod"
                ).value;


            let total = 0;


            let mensaje =
                "🛍️ *NUEVO PEDIDO - DAYANN BOUTIQUE*\n\n";


            mensaje +=
                "*Cliente:* " +
                nombre +
                "\n";


            mensaje +=
                "*Teléfono:* " +
                telefono +
                "\n";


            mensaje +=
                "*Dirección:* " +
                direccion +
                "\n";


            mensaje +=
                "*Departamento/Ciudad:* " +
                ciudad +
                "\n";


            mensaje +=
                "*Método de pago:* " +
                metodoPago +
                "\n\n";


            mensaje +=
                "*PRODUCTOS:*\n";


            cart.forEach(item => {

                const subtotal =
                    item.price *
                    item.quantity;


                total +=
                    subtotal;


                mensaje +=
                    "• " +
                    item.name +
                    " | Talla: " +
                    item.size +
                    " | Cantidad: " +
                    item.quantity +
                    " | Q" +
                    subtotal.toFixed(2) +
                    "\n";

            });


            mensaje +=
                "\n*TOTAL: Q" +
                total.toFixed(2) +
                "*";


            const whatsappURL =
                "https://wa.me/50259824462?text=" +
                encodeURIComponent(
                    mensaje
                );


            window.open(
                whatsappURL,
                "_blank"
            );


            cart = [];


            saveData();

            renderCart();


            event.target.reset();


            closeModal(
                "checkoutModal"
            );


            showToast(
                "Pedido preparado para WhatsApp."
            );

        }
    );


/* NEWSLETTER */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletterEmail"
                ).value;


            alert(
                "¡Gracias por suscribirte!\n\n" +
                "Correo registrado: " +
                email
            );


            event.target.reset();

        }
    );


/* INICIAR */

saveData();

renderProducts();

renderCart();

renderFavorites();