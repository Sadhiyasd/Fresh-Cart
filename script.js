// ======================================================
// FRESHCART - ONLINE GROCERY STORE
// COMPLETE WORKING JAVASCRIPT
// ======================================================


// ======================================================
// 1. DEFAULT PRODUCTS - 60 PRODUCTS
// ======================================================

const defaultProducts = [

    // =========================
    // VEGETABLES
    // =========================

    {
        id: 1,
        name: "Tomatoes",
        category: "Vegetables",
        price: 45,
        unit: "1 kg",
        emoji: "🍅",
        stock: 20
    },
    {
        id: 2,
        name: "Potatoes",
        category: "Vegetables",
        price: 35,
        unit: "1 kg",
        emoji: "🥔",
        stock: 25
    },
    {
        id: 3,
        name: "Onions",
        category: "Vegetables",
        price: 40,
        unit: "1 kg",
        emoji: "🧅",
        stock: 30
    },
    {
        id: 4,
        name: "Carrots",
        category: "Vegetables",
        price: 55,
        unit: "1 kg",
        emoji: "🥕",
        stock: 18
    },
    {
        id: 5,
        name: "Cabbage",
        category: "Vegetables",
        price: 35,
        unit: "1 kg",
        emoji: "🥬",
        stock: 15
    },
    {
        id: 6,
        name: "Cauliflower",
        category: "Vegetables",
        price: 50,
        unit: "1 pc",
        emoji: "🥦",
        stock: 12
    },
    {
        id: 7,
        name: "Brinjal",
        category: "Vegetables",
        price: 45,
        unit: "1 kg",
        emoji: "🍆",
        stock: 16
    },
    {
        id: 8,
        name: "Green Chilli",
        category: "Vegetables",
        price: 30,
        unit: "250 g",
        emoji: "🌶️",
        stock: 20
    },
    {
        id: 9,
        name: "Capsicum",
        category: "Vegetables",
        price: 70,
        unit: "500 g",
        emoji: "🫑",
        stock: 14
    },
    {
        id: 10,
        name: "Peas",
        category: "Vegetables",
        price: 60,
        unit: "1 kg",
        emoji: "🫛",
        stock: 12
    },

    // =========================
    // FRUITS
    // =========================

    {
        id: 11,
        name: "Apples",
        category: "Fruits",
        price: 160,
        unit: "1 kg",
        emoji: "🍎",
        stock: 15
    },
    {
        id: 12,
        name: "Bananas",
        category: "Fruits",
        price: 60,
        unit: "12 pcs",
        emoji: "🍌",
        stock: 18
    },
    {
        id: 13,
        name: "Oranges",
        category: "Fruits",
        price: 90,
        unit: "1 kg",
        emoji: "🍊",
        stock: 15
    },
    {
        id: 14,
        name: "Grapes",
        category: "Fruits",
        price: 120,
        unit: "1 kg",
        emoji: "🍇",
        stock: 14
    },
    {
        id: 15,
        name: "Mangoes",
        category: "Fruits",
        price: 140,
        unit: "1 kg",
        emoji: "🥭",
        stock: 20
    },
    {
        id: 16,
        name: "Watermelon",
        category: "Fruits",
        price: 50,
        unit: "1 pc",
        emoji: "🍉",
        stock: 10
    },
    {
        id: 17,
        name: "Pineapple",
        category: "Fruits",
        price: 80,
        unit: "1 pc",
        emoji: "🍍",
        stock: 12
    },
    {
        id: 18,
        name: "Papaya",
        category: "Fruits",
        price: 70,
        unit: "1 kg",
        emoji: "🥭",
        stock: 13
    },
    {
        id: 19,
        name: "Pomegranate",
        category: "Fruits",
        price: 180,
        unit: "1 kg",
        emoji: "🔴",
        stock: 10
    },
    {
        id: 20,
        name: "Guava",
        category: "Fruits",
        price: 80,
        unit: "1 kg",
        emoji: "🍐",
        stock: 14
    },

    // =========================
    // DAIRY
    // =========================

    {
        id: 21,
        name: "Milk",
        category: "Dairy",
        price: 30,
        unit: "500 ml",
        emoji: "🥛",
        stock: 20
    },
    {
        id: 22,
        name: "Curd",
        category: "Dairy",
        price: 40,
        unit: "500 g",
        emoji: "🥣",
        stock: 15
    },
    {
        id: 23,
        name: "Paneer",
        category: "Dairy",
        price: 110,
        unit: "200 g",
        emoji: "🧀",
        stock: 10
    },
    {
        id: 24,
        name: "Cheese",
        category: "Dairy",
        price: 140,
        unit: "200 g",
        emoji: "🧀",
        stock: 12
    },
    {
        id: 25,
        name: "Butter",
        category: "Dairy",
        price: 120,
        unit: "100 g",
        emoji: "🧈",
        stock: 14
    },
    {
        id: 26,
        name: "Fresh Cream",
        category: "Dairy",
        price: 90,
        unit: "200 ml",
        emoji: "🥛",
        stock: 10
    },
    {
        id: 27,
        name: "Lassi",
        category: "Dairy",
        price: 45,
        unit: "250 ml",
        emoji: "🥤",
        stock: 15
    },
    {
        id: 28,
        name: "Flavoured Yogurt",
        category: "Dairy",
        price: 55,
        unit: "100 g",
        emoji: "🍓",
        stock: 12
    },

    // =========================
    // BAKERY
    // =========================

    {
        id: 29,
        name: "Bread",
        category: "Bakery",
        price: 45,
        unit: "1 pack",
        emoji: "🍞",
        stock: 15
    },
    {
        id: 30,
        name: "Brown Bread",
        category: "Bakery",
        price: 55,
        unit: "1 pack",
        emoji: "🍞",
        stock: 12
    },
    {
        id: 31,
        name: "Burger Buns",
        category: "Bakery",
        price: 50,
        unit: "4 pcs",
        emoji: "🍔",
        stock: 10
    },
    {
        id: 32,
        name: "Croissant",
        category: "Bakery",
        price: 80,
        unit: "2 pcs",
        emoji: "🥐",
        stock: 10
    },
    {
        id: 33,
        name: "Chocolate Cake",
        category: "Bakery",
        price: 350,
        unit: "1 pc",
        emoji: "🍫",
        stock: 8
    },
    {
        id: 34,
        name: "Black Forest Cake",
        category: "Bakery",
        price: 450,
        unit: "1 pc",
        emoji: "🍰",
        stock: 6
    },
    {
        id: 35,
        name: "Cookies",
        category: "Bakery",
        price: 70,
        unit: "1 pack",
        emoji: "🍪",
        stock: 18
    },
    {
        id: 36,
        name: "Donuts",
        category: "Bakery",
        price: 100,
        unit: "4 pcs",
        emoji: "🍩",
        stock: 10
    },

    // =========================
    // STAPLES
    // =========================

    {
        id: 37,
        name: "Rice",
        category: "Staples",
        price: 420,
        unit: "5 kg",
        emoji: "🍚",
        stock: 10
    },
    {
        id: 38,
        name: "Wheat Flour",
        category: "Staples",
        price: 55,
        unit: "1 kg",
        emoji: "🌾",
        stock: 20
    },
    {
        id: 39,
        name: "Basmati Rice",
        category: "Staples",
        price: 650,
        unit: "5 kg",
        emoji: "🍚",
        stock: 8
    },
    {
        id: 40,
        name: "Toor Dal",
        category: "Staples",
        price: 150,
        unit: "1 kg",
        emoji: "🫘",
        stock: 15
    },
    {
        id: 41,
        name: "Moong Dal",
        category: "Staples",
        price: 130,
        unit: "1 kg",
        emoji: "🫘",
        stock: 14
    },
    {
        id: 42,
        name: "Chana Dal",
        category: "Staples",
        price: 100,
        unit: "1 kg",
        emoji: "🫘",
        stock: 18
    },
    {
        id: 43,
        name: "Sugar",
        category: "Staples",
        price: 50,
        unit: "1 kg",
        emoji: "🍚",
        stock: 25
    },
    {
        id: 44,
        name: "Salt",
        category: "Staples",
        price: 25,
        unit: "1 kg",
        emoji: "🧂",
        stock: 30
    },

    // =========================
    // BEVERAGES
    // =========================

    {
        id: 45,
        name: "Orange Juice",
        category: "Beverages",
        price: 110,
        unit: "1 L",
        emoji: "🧃",
        stock: 12
    },
    {
        id: 46,
        name: "Apple Juice",
        category: "Beverages",
        price: 120,
        unit: "1 L",
        emoji: "🧃",
        stock: 10
    },
    {
        id: 47,
        name: "Mango Juice",
        category: "Beverages",
        price: 100,
        unit: "1 L",
        emoji: "🥭",
        stock: 12
    },
    {
        id: 48,
        name: "Soft Drink",
        category: "Beverages",
        price: 60,
        unit: "750 ml",
        emoji: "🥤",
        stock: 20
    },
    {
        id: 49,
        name: "Lemon Drink",
        category: "Beverages",
        price: 50,
        unit: "500 ml",
        emoji: "🍋",
        stock: 15
    },
    {
        id: 50,
        name: "Green Tea",
        category: "Beverages",
        price: 180,
        unit: "25 bags",
        emoji: "🍵",
        stock: 10
    },
    {
        id: 51,
        name: "Coffee",
        category: "Beverages",
        price: 220,
        unit: "200 g",
        emoji: "☕",
        stock: 12
    },
    {
        id: 52,
        name: "Tea Powder",
        category: "Beverages",
        price: 180,
        unit: "250 g",
        emoji: "🍵",
        stock: 15
    },

    // =========================
    // SNACKS
    // =========================

    {
        id: 53,
        name: "Potato Chips",
        category: "Snacks",
        price: 40,
        unit: "1 pack",
        emoji: "🥔",
        stock: 20
    },
    {
        id: 54,
        name: "Chocolate",
        category: "Snacks",
        price: 100,
        unit: "1 pack",
        emoji: "🍫",
        stock: 15
    },
    {
        id: 55,
        name: "Biscuits",
        category: "Snacks",
        price: 30,
        unit: "1 pack",
        emoji: "🍪",
        stock: 25
    },
    {
        id: 56,
        name: "Popcorn",
        category: "Snacks",
        price: 60,
        unit: "1 pack",
        emoji: "🍿",
        stock: 18
    },
    {
        id: 57,
        name: "Namkeen",
        category: "Snacks",
        price: 80,
        unit: "1 pack",
        emoji: "🥨",
        stock: 15
    },
    {
        id: 58,
        name: "Peanuts",
        category: "Snacks",
        price: 70,
        unit: "500 g",
        emoji: "🥜",
        stock: 20
    },
    {
        id: 59,
        name: "Energy Bar",
        category: "Snacks",
        price: 90,
        unit: "1 pack",
        emoji: "🍫",
        stock: 12
    },
    {
        id: 60,
        name: "Trail Mix",
        category: "Snacks",
        price: 160,
        unit: "250 g",
        emoji: "🥜",
        stock: 10
    }
];


// ======================================================
// 2. PRODUCT VERSION
// ======================================================

const PRODUCT_VERSION = "3.0";

const savedProductVersion =
    localStorage.getItem("productVersion");

if (savedProductVersion !== PRODUCT_VERSION) {

    localStorage.setItem(
        "products",
        JSON.stringify(defaultProducts)
    );

    localStorage.setItem(
        "productVersion",
        PRODUCT_VERSION
    );
}


// ======================================================
// 3. OFFERS
// ======================================================

const offerValues = [5, 10, 15, 20, 25];

function getRandomOffer() {

    return offerValues[
        Math.floor(
            Math.random() * offerValues.length
        )
    ];
}


// ======================================================
// 4. LOCAL STORAGE
// ======================================================

let products =
    JSON.parse(
        localStorage.getItem("products") || "[]"
    );

let cart =
    JSON.parse(
        localStorage.getItem("cart") || "[]"
    );

let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist") || "[]"
    );

let orders =
    JSON.parse(
        localStorage.getItem("orders") || "[]"
    );

let users =
    JSON.parse(
        localStorage.getItem("users") || "[]"
    );


// ======================================================
// 5. SAFETY FALLBACK
// ======================================================

if (!Array.isArray(products) || products.length === 0) {

    products = [...defaultProducts];

}

if (!Array.isArray(cart)) cart = [];

if (!Array.isArray(wishlist)) wishlist = [];

if (!Array.isArray(orders)) orders = [];

if (!Array.isArray(users)) users = [];


// Give every product an offer

products.forEach(product => {

    if (!product.offer || Number(product.offer) <= 0) {

        product.offer = getRandomOffer();

    }

});

localStorage.setItem(
    "products",
    JSON.stringify(products)
);


// ======================================================
// 6. GLOBAL VARIABLES
// ======================================================

let currentCategory = "All";

let couponPercent = 0;

let activeOrderId = null;


// ======================================================
// 7. SAVE FUNCTIONS
// ======================================================

function saveProducts() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

function saveWishlist() {

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}

function saveOrders() {

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

}

function saveUsers() {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}


// ======================================================
// 8. MONEY
// ======================================================

function money(amount) {

    return "₹" +
        Number(amount || 0).toFixed(0);

}


// ======================================================
// 9. DISCOUNT PRICE
// ======================================================

function getDiscountPrice(product) {

    const price =
        Number(product.price || 0);

    const offer =
        Number(product.offer || 0);

    return price -
        (price * offer / 100);

}


// ======================================================
// 10. CURRENT USER
// ======================================================

function getCurrentUser() {

    const savedUser =
        localStorage.getItem("user");

    if (!savedUser) {

        return null;

    }

    try {

        return JSON.parse(savedUser);

    } catch (error) {

        localStorage.removeItem("user");

        return null;

    }

}


// ======================================================
// 11. NAVIGATION
// ======================================================

function scrollToHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function scrollToCategories() {

    document
        .getElementById("categoriesSection")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToProducts() {

    document
        .getElementById("productsSection")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


function showAllProducts() {

    currentCategory = "All";

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.value = "";

    }

    renderCategories();

    renderProducts();

    scrollToProducts();

}


function switchToLogin() {

    closeModal("registerModal");

    openModal("loginModal");

}


// ======================================================
// 12. CATEGORY ICON
// ======================================================

function getCategoryIcon(category) {

    const icons = {

        All: "🛒",

        Vegetables: "🥦",

        Fruits: "🍎",

        Dairy: "🥛",

        Bakery: "🍞",

        Staples: "🌾",

        Beverages: "🥤",

        Snacks: "🍫"

    };

    return icons[category] || "🛍️";

}


// ======================================================
// 13. ESCAPE HTML
// ======================================================

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ======================================================
// 14. RENDER CATEGORIES
// ======================================================

function renderCategories() {

    const container =
        document.getElementById(
            "categoryButtons"
        );

    if (!container) return;

    const categories = [
        "All",
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    container.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-btn" +
            (
                currentCategory === category
                    ? " active"
                    : ""
            );

        button.innerHTML =
            `${getCategoryIcon(category)} ${escapeHTML(category)}`;

        button.addEventListener(
            "click",
            () => {

                currentCategory =
                    category;

                renderCategories();

                renderProducts();

                scrollToProducts();

            }
        );

        container.appendChild(button);

    });

}


// ======================================================
// 15. PRODUCT CARD
// ======================================================

function createProductCard(product) {

    const discountedPrice =
        getDiscountPrice(product);

    const isWishlisted =
        wishlist.includes(product.id);

    const outOfStock =
        Number(product.stock) <= 0;

    return `

        <div class="product-card">

            <button
                class="wishlist-btn"
                onclick="toggleWishlist(${product.id})"
                title="Add to wishlist"
            >
                ${isWishlisted ? "❤️" : "♡"}
            </button>

            <div class="offer-badge">
                ${product.offer}% OFF
            </div>

            <div class="product-emoji">
                ${product.emoji || "🛍️"}
            </div>

            <h3>
                ${escapeHTML(product.name)}
            </h3>

            <p class="meta">
                ${escapeHTML(product.category)}
                •
                ${escapeHTML(product.unit)}
            </p>

            <p class="meta">
                Stock: ${product.stock}
            </p>

            <div class="product-bottom">

                <div class="price-area">

                    <span class="price">
                        ${money(discountedPrice)}
                    </span>

                    <span class="old-price">
                        ${money(product.price)}
                    </span>

                </div>

                <button
                    class="add-btn ${outOfStock ? "out" : ""}"
                    onclick="addToCart(${product.id})"
                    ${outOfStock ? "disabled" : ""}
                >
                    ${outOfStock
                        ? "Out of Stock"
                        : "Add"
                    }
                </button>

            </div>

        </div>

    `;

}


// ======================================================
// 16. RENDER PRODUCTS
// ======================================================

function renderProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );

    if (!grid) return;

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const search =
        searchInput?.value
            ?.trim()
            ?.toLowerCase() || "";

    const filteredProducts =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "All" ||
                product.category ===
                currentCategory;

            const name =
                String(
                    product.name || ""
                ).toLowerCase();

            const category =
                String(
                    product.category || ""
                ).toLowerCase();

            const matchesSearch =
                name.includes(search) ||
                category.includes(search);

            return (
                matchesCategory &&
                matchesSearch
            );

        });

    const resultText =
        document.getElementById(
            "productResultText"
        );

    if (resultText) {

        resultText.textContent =
            `${filteredProducts.length} products found`;

    }

    if (filteredProducts.length === 0) {

        grid.innerHTML = `
            <div class="admin-empty">
                No products found.
            </div>
        `;

        return;

    }

    grid.innerHTML =
        filteredProducts
            .map(createProductCard)
            .join("");

}


// ======================================================
// 17. RECOMMENDATIONS
// ======================================================

function renderRecommendations() {

    const container =
        document.getElementById(
            "recommendedProducts"
        );

    if (!container) return;

    const recommended =
        products
            .filter(
                product =>
                    Number(product.stock) > 0
            )
            .slice(0, 4);

    container.innerHTML =
        recommended
            .map(createProductCard)
            .join("");

}


// ======================================================
// 18. ADD TO CART
// ======================================================

function addToCart(productId) {

    const product =
        products.find(
            product =>
                Number(product.id) ===
                Number(productId)
        );

    if (!product) {

        alert("Product not found.");

        return;

    }

    if (Number(product.stock) <= 0) {

        alert("This product is out of stock.");

        return;

    }

    const existingItem =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );

    if (existingItem) {

        if (
            Number(existingItem.quantity) >=
            Number(product.stock)
        ) {

            alert(
                "Maximum available stock reached."
            );

            return;

        }

        existingItem.quantity++;

    } else {

        cart.push({
            id: Number(productId),
            quantity: 1
        });

    }

    saveCart();

    renderCart();

    updateCartCount();

}


// ======================================================
// 19. CHANGE QUANTITY
// ======================================================

function changeQty(productId, change) {

    const item =
        cart.find(
            item =>
                Number(item.id) ===
                Number(productId)
        );

    const product =
        products.find(
            product =>
                Number(product.id) ===
                Number(productId)
        );

    if (!item || !product) return;

    item.quantity +=
        Number(change);

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    Number(item.id) !==
                    Number(productId)
            );

    } else if (
        item.quantity > product.stock
    ) {

        item.quantity =
            Number(product.stock);

        alert(
            "Maximum available stock reached."
        );

    }

    saveCart();

    renderCart();

    updateCartCount();

}


// ======================================================
// 20. REMOVE CART ITEM
// ======================================================

function removeItem(productId) {

    cart =
        cart.filter(
            item =>
                Number(item.id) !==
                Number(productId)
        );

    saveCart();

    renderCart();

    updateCartCount();

}


// ======================================================
// 21. CART COUNT
// ======================================================

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    if (cartCount) {

        cartCount.textContent =
            count;

    }

}


// ======================================================
// 22. SUBTOTAL
// ======================================================

function calculateSubtotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                products.find(
                    p =>
                        Number(p.id) ===
                        Number(item.id)
                );

            if (!product) {

                return total;

            }

            return total +
                getDiscountPrice(product) *
                Number(item.quantity || 0);

        },
        0
    );

}


// ======================================================
// 23. CART SUMMARY
// ======================================================

function updateCartSummary() {

    const subtotal =
        calculateSubtotal();

    const discount =
        subtotal *
        couponPercent /
        100;

    const total =
        subtotal -
        discount;

    const subtotalElement =
        document.getElementById(
            "subtotal"
        );

    const discountElement =
        document.getElementById(
            "discount"
        );

    const totalElement =
        document.getElementById(
            "total"
        );

    if (subtotalElement) {

        subtotalElement.textContent =
            money(subtotal);

    }

    if (discountElement) {

        discountElement.textContent =
            "-" + money(discount);

    }

    if (totalElement) {

        totalElement.textContent =
            money(total);

    }

}


// ======================================================
// 24. RENDER CART
// ======================================================

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <p class="admin-empty">
                Your cart is empty.
            </p>
        `;

        updateCartSummary();

        return;

    }

    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p =>
                        Number(p.id) ===
                        Number(item.id)
                );

            if (!product) return "";

            const price =
                getDiscountPrice(product);

            return `

                <div class="cart-item">

                    <div class="cart-item-image">
                        ${product.emoji || "🛍️"}
                    </div>

                    <div class="cart-item-info">

                        <h4>
                            ${escapeHTML(product.name)}
                        </h4>

                        <p>
                            ${money(price)}
                        </p>

                        <div class="qty">

                            <button
                                onclick="changeQty(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQty(${product.id}, 1)"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeItem(${product.id})"
                    >
                        🗑️
                    </button>

                </div>

            `;

        }).join("");

    updateCartSummary();

}


// ======================================================
// 25. APPLY COUPON
// ======================================================

function applyCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );

    const message =
        document.getElementById(
            "couponMessage"
        );

    if (!input || !message) return;

    const coupon =
        input.value
            .trim()
            .toUpperCase();

    if (coupon === "SAVE10") {

        couponPercent = 10;

        message.textContent =
            "Coupon applied! 10% extra discount.";

        message.style.color =
            "green";

    } else {

        couponPercent = 0;

        message.textContent =
            "Invalid coupon code.";

        message.style.color =
            "red";

    }

    updateCartSummary();

}


// ======================================================
// 26. CHECKOUT
// ======================================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    // Check stock

    for (const item of cart) {

        const product =
            products.find(
                p =>
                    Number(p.id) ===
                    Number(item.id)
            );

        if (
            !product ||
            Number(item.quantity) >
            Number(product.stock)
        ) {

            alert(
                `${product?.name || "Product"} has insufficient stock.`
            );

            return;

        }

    }

    const currentUser =
        getCurrentUser();

    const subtotal =
        calculateSubtotal();

    const discount =
        subtotal *
        couponPercent /
        100;

    const total =
        subtotal -
        discount;

    const orderId =
        "FC" +
        Date.now()
            .toString()
            .slice(-6);

    const order = {

        id: orderId,

        customerName:
            currentUser?.name ||
            "Guest",

        customerEmail:
            currentUser?.email ||
            "guest",

        items:
            cart.map(item => {

                const product =
                    products.find(
                        p =>
                            Number(p.id) ===
                            Number(item.id)
                    );

                return {

                    id: product.id,

                    name: product.name,

                    quantity:
                        item.quantity,

                    price:
                        getDiscountPrice(
                            product
                        )

                };

            }),

        subtotal: subtotal,

        discount: discount,

        total: total,

        status: "Order Placed",

        trackingStep: 0,

        date:
            new Date()
                .toLocaleString()

    };

    orders.push(order);

    // Reduce stock

    cart.forEach(item => {

        const product =
            products.find(
                p =>
                    Number(p.id) ===
                    Number(item.id)
            );

        if (product) {

            product.stock -=
                Number(item.quantity);

        }

    });

    saveProducts();

    saveOrders();

    cart = [];

    couponPercent = 0;

    saveCart();

    renderProducts();

    renderRecommendations();

    renderCart();

    updateCartCount();

    alert(
        `Order placed successfully!\nOrder ID: ${orderId}`
    );

    openTracking(orderId);

}


// ======================================================
// 27. TRACKING
// ======================================================

function openTracking(orderId) {

    activeOrderId =
        orderId;

    const order =
        orders.find(
            order =>
                order.id ===
                orderId
        );

    if (!order) return;

    const orderIdElement =
        document.getElementById(
            "trackingOrderId"
        );

    if (orderIdElement) {

        orderIdElement.textContent =
            order.id;

    }

    updateTrackingUI(order);

    openModal("trackingModal");

}


function updateTrackingUI(order) {

    const steps =
        document.querySelectorAll(
            ".track-step"
        );

    steps.forEach(
        (step, index) => {

            step.classList.toggle(
                "active",
                index <=
                Number(
                    order.trackingStep || 0
                )
            );

        }
    );

    const button =
        document.getElementById(
            "advanceTrackingBtn"
        );

    if (!button) return;

    if (
        Number(order.trackingStep) >= 3
    ) {

        button.textContent =
            "Delivered";

        button.disabled = true;

    } else {

        button.textContent =
            "Next Status";

        button.disabled = false;

    }

}


function advanceTracking() {

    const order =
        orders.find(
            order =>
                order.id ===
                activeOrderId
        );

    if (!order) return;

    if (
        Number(order.trackingStep) < 3
    ) {

        order.trackingStep++;

    }

    const statuses = [

        "Order Placed",

        "Preparing",

        "Out for Delivery",

        "Delivered"

    ];

    order.status =
        statuses[
            order.trackingStep
        ];

    saveOrders();

    updateTrackingUI(order);

    renderOrders();

    renderAdminDashboard();

}


function closeTracking() {

    closeModal("trackingModal");

}


// ======================================================
// 28. WISHLIST
// ======================================================

function toggleWishlist(productId) {

    productId =
        Number(productId);

    if (
        wishlist.includes(productId)
    ) {

        wishlist =
            wishlist.filter(
                id =>
                    Number(id) !==
                    productId
            );

    } else {

        wishlist.push(productId);

    }

    saveWishlist();

    renderProducts();

    renderRecommendations();

}


// ======================================================
// 29. LOGIN
// ======================================================

function loginUser() {

    const emailInput =
        document.getElementById(
            "loginEmail"
        );

    const passwordInput =
        document.getElementById(
            "loginPassword"
        );

    const email =
        emailInput?.value
            ?.trim()
            ?.toLowerCase();

    const password =
        passwordInput?.value || "";

    if (!email || !password) {

        showMessage(
            "loginMessage",
            "Please enter email and password.",
            "red"
        );

        return;

    }

    users =
        JSON.parse(
            localStorage.getItem(
                "users"
            ) || "[]"
        );

    const user =
        users.find(
            savedUser =>
                savedUser &&
                savedUser.email &&
                String(
                    savedUser.email
                ).toLowerCase() === email &&
                savedUser.password ===
                password
        );

    if (!user) {

        showMessage(
            "loginMessage",
            "Invalid email or password.",
            "red"
        );

        return;

    }

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    showMessage(
        "loginMessage",
        "Login successful!",
        "green"
    );

    updateAuthUI();

    setTimeout(() => {

        closeModal("loginModal");

        if (emailInput) {

            emailInput.value = "";

        }

        if (passwordInput) {

            passwordInput.value = "";

        }

    }, 500);

}


// ======================================================
// 30. REGISTER
// ======================================================

function registerUser() {

    const name =
        document.getElementById(
            "registerName"
        )?.value
        ?.trim();

    const email =
        document.getElementById(
            "registerEmail"
        )?.value
        ?.trim()
        ?.toLowerCase();

    const password =
        document.getElementById(
            "registerPassword"
        )?.value || "";

    if (!name || !email || !password) {

        showMessage(
            "registerMessage",
            "Please fill all fields.",
            "red"
        );

        return;

    }

    if (password.length < 4) {

        showMessage(
            "registerMessage",
            "Password must contain at least 4 characters.",
            "red"
        );

        return;

    }

    users =
        JSON.parse(
            localStorage.getItem(
                "users"
            ) || "[]"
        );

    const exists =
        users.some(
            user =>
                user &&
                user.email &&
                String(
                    user.email
                ).toLowerCase() ===
                email
        );

    if (exists) {

        showMessage(
            "registerMessage",
            "Email already registered.",
            "red"
        );

        return;

    }

    const newUser = {

        name: name,

        email: email,

        password: password

    };

    users.push(newUser);

    saveUsers();

    // Automatically login

    localStorage.setItem(
        "user",
        JSON.stringify(newUser)
    );

    updateAuthUI();

    showMessage(
        "registerMessage",
        "Registration successful!",
        "green"
    );

    setTimeout(() => {

        closeModal(
            "registerModal"
        );

        document.getElementById(
            "registerName"
        ).value = "";

        document.getElementById(
            "registerEmail"
        ).value = "";

        document.getElementById(
            "registerPassword"
        ).value = "";

    }, 500);

}


// ======================================================
// 31. PROFILE
// ======================================================

function openProfile() {

    const user =
        getCurrentUser();

    if (!user) {

        openModal("loginModal");

        return;

    }

    const nameElement =
        document.getElementById(
            "profileName"
        );

    const emailElement =
        document.getElementById(
            "profileEmail"
        );

    if (nameElement) {

        nameElement.textContent =
            user.name || "";

    }

    if (emailElement) {

        emailElement.textContent =
            user.email || "";

    }

    renderOrders();

    openModal("profileModal");

}


// ======================================================
// 32. USER ORDERS
// ======================================================

function renderOrders() {

    const container =
        document.getElementById(
            "myOrders"
        );

    const user =
        getCurrentUser();

    if (!container || !user) return;

    const myOrders =
        orders.filter(
            order =>
                String(
                    order.customerEmail || ""
                ).toLowerCase() ===
                String(
                    user.email || ""
                ).toLowerCase()
        );

    if (myOrders.length === 0) {

        container.innerHTML = `
            <p class="admin-empty">
                No orders yet.
            </p>
        `;

        return;

    }

    container.innerHTML =
        myOrders
            .slice()
            .reverse()
            .map(
                order => `

                    <div class="order-card">

                        <h4>
                            Order ${escapeHTML(order.id)}
                        </h4>

                        <p>
                            Date:
                            ${escapeHTML(order.date)}
                        </p>

                        <p>
                            Total:
                            ${money(order.total)}
                        </p>

                        <p>
                            Status:
                            ${escapeHTML(order.status)}
                        </p>

                        <button
                            class="track-order-btn"
                            onclick="openTracking('${order.id}')"
                        >
                            Track Order
                        </button>

                    </div>

                `
            )
            .join("");

}


// ======================================================
// 33. USER LOGOUT
// ======================================================

function logoutUser() {

    localStorage.removeItem(
        "user"
    );

    updateAuthUI();

    closeModal(
        "profileModal"
    );

    alert(
        "You have been logged out."
    );

}


// ======================================================
// 34. AUTH UI
// ======================================================

function updateAuthUI() {

    const loginBtn =
        document.getElementById(
            "loginBtn"
        );

    const profileBtn =
        document.getElementById(
            "profileBtn"
        );

    const user =
        getCurrentUser();

    if (user) {

        if (loginBtn) {

            loginBtn.style.display =
                "none";

        }

        if (profileBtn) {

            profileBtn.style.display =
                "inline-block";

        }

    } else {

        if (loginBtn) {

            loginBtn.style.display =
                "inline-block";

        }

        if (profileBtn) {

            profileBtn.style.display =
                "none";

        }

    }

}


// ======================================================
// 35. ADMIN LOGIN
// ======================================================

const ADMIN_EMAIL =
    "admin@freshcart.com";

const ADMIN_PASSWORD =
    "admin123";


function loginAdmin() {

    const email =
        document.getElementById(
            "adminEmail"
        )?.value
        ?.trim()
        ?.toLowerCase();

    const password =
        document.getElementById(
            "adminPassword"
        )?.value || "";

    if (
        email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
    ) {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        showMessage(
            "adminLoginMessage",
            "Admin login successful.",
            "green"
        );

        setTimeout(() => {

            closeModal(
                "adminLoginModal"
            );

            showAdminDashboard();

        }, 500);

    } else {

        showMessage(
            "adminLoginMessage",
            "Invalid admin credentials.",
            "red"
        );

    }

}


// ======================================================
// 36. SHOW ADMIN DASHBOARD
// ======================================================

function showAdminDashboard() {

    const dashboard =
        document.getElementById(
            "adminDashboard"
        );

    if (!dashboard) return;

    dashboard.classList.add(
        "show"
    );

    renderAdminDashboard();

    dashboard.scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================================
// 37. ADMIN DASHBOARD
// ======================================================

function renderAdminDashboard() {

    const userCount =
        document.getElementById(
            "adminUserCount"
        );

    const productCount =
        document.getElementById(
            "adminProductCount"
        );

    const orderCount =
        document.getElementById(
            "adminOrderCount"
        );

    const salesElement =
        document.getElementById(
            "adminSales"
        );

    if (userCount) {

        userCount.textContent =
            users.length;

    }

    if (productCount) {

        productCount.textContent =
            products.length;

    }

    if (orderCount) {

        orderCount.textContent =
            orders.length;

    }

    const sales =
        orders.reduce(
            (total, order) =>
                total +
                Number(
                    order.total || 0
                ),
            0
        );

    if (salesElement) {

        salesElement.textContent =
            money(sales);

    }

    renderAdminUsers();

    renderAdminProducts();

    renderAdminOrders();

}


// ======================================================
// 38. ADMIN USERS
// ======================================================

function renderAdminUsers() {

    const table =
        document.getElementById(
            "adminUsersTable"
        );

    if (!table) return;

    if (users.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="3">
                    No users found.
                </td>
            </tr>
        `;

        return;

    }

    table.innerHTML =
        users
            .map(
                user => `

                    <tr>

                        <td>
                            ${escapeHTML(
                                user.name
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                user.email
                            )}
                        </td>

                        <td>
                            <span class="status-active">
                                Registered
                            </span>
                        </td>

                    </tr>

                `
            )
            .join("");

}


// ======================================================
// 39. ADMIN PRODUCTS
// ======================================================

function renderAdminProducts() {

    const table =
        document.getElementById(
            "adminProductsTable"
        );

    if (!table) return;

    if (products.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">
                    No products found.
                </td>
            </tr>
        `;

        return;

    }

    table.innerHTML =
        products
            .map(
                product => `

                    <tr>

                        <td>
                            ${product.emoji || "🛍️"}
                            ${escapeHTML(
                                product.name
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                product.category
                            )}
                        </td>

                        <td>
                            ${money(
                                product.price
                            )}
                        </td>

                        <td>
                            ${product.offer}% OFF
                        </td>

                        <td>
                            ${product.stock}
                        </td>

                        <td>

                            <button
                                class="admin-delete-btn"
                                onclick="deleteAdminProduct(${product.id})"
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                `
            )
            .join("");

}


// ======================================================
// 40. ADD ADMIN PRODUCT
// ======================================================

function addAdminProduct() {

    const name =
        document.getElementById(
            "adminProductName"
        )?.value
        ?.trim();

    const category =
        document.getElementById(
            "adminProductCategory"
        )?.value
        ?.trim();

    const price =
        Number(
            document.getElementById(
                "adminProductPrice"
            )?.value
        );

    const stock =
        Number(
            document.getElementById(
                "adminProductStock"
            )?.value
        );

    const unit =
        document.getElementById(
            "adminProductUnit"
        )?.value
        ?.trim();

    const emoji =
        document.getElementById(
            "adminProductEmoji"
        )?.value
        ?.trim();

    if (
        !name ||
        !category ||
        price <= 0 ||
        stock <= 0
    ) {

        alert(
            "Please fill valid product details."
        );

        return;

    }

    const newProduct = {

        id: Date.now(),

        name: name,

        category: category,

        price: price,

        unit:
            unit || "1 unit",

        emoji:
            emoji || "🛍️",

        stock: stock,

        offer:
            getRandomOffer()

    };

    products.push(
        newProduct
    );

    saveProducts();

    renderCategories();

    renderProducts();

    renderRecommendations();

    renderAdminDashboard();

    alert(
        `${name} added successfully with ${newProduct.offer}% OFF!`
    );

    [
        "adminProductName",
        "adminProductCategory",
        "adminProductPrice",
        "adminProductStock",
        "adminProductUnit",
        "adminProductEmoji"
    ].forEach(id => {

        const input =
            document.getElementById(id);

        if (input) {

            input.value = "";

        }

    });

}


// ======================================================
// 41. DELETE ADMIN PRODUCT
// ======================================================

function deleteAdminProduct(productId) {

    const product =
        products.find(
            product =>
                Number(product.id) ===
                Number(productId)
        );

    if (!product) return;

    const confirmed =
        confirm(
            `Delete ${product.name}?`
        );

    if (!confirmed) return;

    products =
        products.filter(
            product =>
                Number(product.id) !==
                Number(productId)
        );

    cart =
        cart.filter(
            item =>
                Number(item.id) !==
                Number(productId)
        );

    wishlist =
        wishlist.filter(
            id =>
                Number(id) !==
                Number(productId)
        );

    saveProducts();

    saveCart();

    saveWishlist();

    renderCategories();

    renderProducts();

    renderRecommendations();

    renderCart();

    updateCartCount();

    renderAdminDashboard();

}


// ======================================================
// 42. ADMIN ORDERS
// ======================================================

function renderAdminOrders() {

    const table =
        document.getElementById(
            "adminOrdersTable"
        );

    if (!table) return;

    if (orders.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">
                    No orders found.
                </td>
            </tr>
        `;

        return;

    }

    table.innerHTML =
        orders
            .slice()
            .reverse()
            .map(
                order => `

                    <tr>

                        <td>
                            ${escapeHTML(
                                order.id
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                order.customerName
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                order.customerEmail
                            )}
                        </td>

                        <td>
                            ${money(
                                order.total
                            )}
                        </td>

                        <td>
                            ${escapeHTML(
                                order.status
                            )}
                        </td>

                        <td>

                            <button
                                class="admin-status-btn"
                                onclick="updateAdminOrder('${order.id}')"
                                ${Number(order.trackingStep) >= 3 ? "disabled" : ""}
                            >
                                ${
                                    Number(
                                        order.trackingStep
                                    ) >= 3
                                        ? "Delivered"
                                        : "Next Status"
                                }
                            </button>

                        </td>

                    </tr>

                `
            )
            .join("");

}


// ======================================================
// 43. UPDATE ADMIN ORDER
// ======================================================

function updateAdminOrder(orderId) {

    const order =
        orders.find(
            order =>
                order.id ===
                orderId
        );

    if (!order) return;

    if (
        Number(order.trackingStep) < 3
    ) {

        order.trackingStep++;

    }

    const statuses = [

        "Order Placed",

        "Preparing",

        "Out for Delivery",

        "Delivered"

    ];

    order.status =
        statuses[
            Number(order.trackingStep)
        ];

    saveOrders();

    renderAdminOrders();

    renderOrders();

    renderAdminDashboard();

}


// ======================================================
// 44. ADMIN LOGOUT
// ======================================================

function logoutAdmin() {

    localStorage.removeItem(
        "adminLoggedIn"
    );

    const dashboard =
        document.getElementById(
            "adminDashboard"
        );

    if (dashboard) {

        dashboard.classList.remove(
            "show"
        );

    }

}


// ======================================================
// 45. MODALS
// ======================================================

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.add(
            "show"
        );

    }

    const overlay =
        document.getElementById(
            "overlay"
        );

    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

    const overlay =
        document.getElementById(
            "overlay"
        );

    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


// ======================================================
// 46. CART DRAWER
// ======================================================

function openCart() {

    const drawer =
        document.getElementById(
            "cartDrawer"
        );

    if (drawer) {

        drawer.classList.add(
            "show"
        );

    }

    const overlay =
        document.getElementById(
            "overlay"
        );

    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

    renderCart();

}


function closeCart() {

    const drawer =
        document.getElementById(
            "cartDrawer"
        );

    if (drawer) {

        drawer.classList.remove(
            "show"
        );

    }

    const overlay =
        document.getElementById(
            "overlay"
        );

    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


// ======================================================
// 47. MESSAGE
// ======================================================

function showMessage(
    elementId,
    message,
    color = "green"
) {

    const element =
        document.getElementById(
            elementId
        );

    if (!element) return;

    element.textContent =
        message;

    element.style.color =
        color;

}


// ======================================================
// 48. PAGE LOAD
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // =========================
        // SEARCH
        // =========================

        document
            .getElementById(
                "searchInput"
            )
            ?.addEventListener(
                "input",
                renderProducts
            );


        // =========================
        // LOGIN BUTTON
        // =========================

        document
            .getElementById(
                "loginBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    openModal(
                        "loginModal"
                    )
            );


        // =========================
        // REGISTER BUTTON
        // =========================

        document
            .getElementById(
                "showRegisterBtn"
            )
            ?.addEventListener(
                "click",
                () => {

                    closeModal(
                        "loginModal"
                    );

                    openModal(
                        "registerModal"
                    );

                }
            );


        // =========================
        // CART
        // =========================

        document
            .getElementById(
                "cartBtn"
            )
            ?.addEventListener(
                "click",
                openCart
            );

        document
            .getElementById(
                "closeCartBtn"
            )
            ?.addEventListener(
                "click",
                closeCart
            );


        // =========================
        // COUPON
        // =========================

        document
            .getElementById(
                "applyCouponBtn"
            )
            ?.addEventListener(
                "click",
                applyCoupon
            );


        // =========================
        // CHECKOUT
        // =========================

        document
            .getElementById(
                "checkoutBtn"
            )
            ?.addEventListener(
                "click",
                checkout
            );


        // =========================
        // LOGIN SUBMIT
        // =========================

        document
            .getElementById(
                "loginSubmitBtn"
            )
            ?.addEventListener(
                "click",
                loginUser
            );


        // =========================
        // REGISTER SUBMIT
        // =========================

        document
            .getElementById(
                "registerSubmitBtn"
            )
            ?.addEventListener(
                "click",
                registerUser
            );


        // =========================
        // PROFILE
        // =========================

        document
            .getElementById(
                "profileBtn"
            )
            ?.addEventListener(
                "click",
                openProfile
            );


        // =========================
        // USER LOGOUT
        // =========================

        document
            .getElementById(
                "logoutBtn"
            )
            ?.addEventListener(
                "click",
                logoutUser
            );


        // =========================
        // TRACKING
        // =========================

        document
            .getElementById(
                "advanceTrackingBtn"
            )
            ?.addEventListener(
                "click",
                advanceTracking
            );


        // =========================
        // ADMIN BUTTON
        // =========================

        document
            .getElementById(
                "adminBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    openModal(
                        "adminLoginModal"
                    )
            );


        // =========================
        // ADMIN LOGIN
        // =========================

        document
            .getElementById(
                "adminLoginSubmitBtn"
            )
            ?.addEventListener(
                "click",
                loginAdmin
            );


        // =========================
        // ADMIN LOGOUT
        // =========================

        document
            .getElementById(
                "adminLogoutBtn"
            )
            ?.addEventListener(
                "click",
                logoutAdmin
            );


        // =========================
        // ADMIN ADD PRODUCT
        // =========================

        document
            .getElementById(
                "adminAddProductBtn"
            )
            ?.addEventListener(
                "click",
                addAdminProduct
            );


        // =========================
        // CLOSE LOGIN
        // =========================

        document
            .getElementById(
                "closeLoginBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "loginModal"
                    )
            );


        // =========================
        // CLOSE REGISTER
        // =========================

        document
            .getElementById(
                "closeRegisterBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "registerModal"
                    )
            );


        // =========================
        // CLOSE PROFILE
        // =========================

        document
            .getElementById(
                "closeProfileBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "profileModal"
                    )
            );


        // =========================
        // CLOSE TRACKING
        // =========================

        document
            .getElementById(
                "closeTrackingBtn"
            )
            ?.addEventListener(
                "click",
                closeTracking
            );


        // =========================
        // CLOSE ADMIN LOGIN
        // =========================

        document
            .getElementById(
                "closeAdminLoginBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "adminLoginModal"
                    )
            );


        // =========================
        // INITIAL RENDER
        // =========================

        renderCategories();

        renderProducts();

        renderRecommendations();

        renderCart();

        updateCartCount();

        updateAuthUI();


        // =========================
        // RESTORE ADMIN
        // =========================

        if (
            localStorage.getItem(
                "adminLoggedIn"
            ) === "true"
        ) {

            showAdminDashboard();

        }

    }
);


// ======================================================
// 49. OVERLAY CLICK
// ======================================================

document.addEventListener(
    "click",
    event => {

        const overlay =
            document.getElementById(
                "overlay"
            );

        if (
            event.target === overlay
        ) {

            [
                "loginModal",
                "registerModal",
                "profileModal",
                "trackingModal",
                "adminLoginModal"
            ].forEach(
                id =>
                    closeModal(id)
            );

            closeCart();

        }

    }
);