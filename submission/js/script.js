/* ============================================================
   Cleanshelf Supermarket - CAT 2 JavaScript
   ============================================================ */

/* ------------------------------------------------------------
   FEATURE 1: Loop-rendered dynamic content (Services & Deals)
   ------------------------------------------------------------ */
const servicesData = [
    { name: "Fresh Produce", description: "Fresh fruits and vegetables every day." },
    { name: "Household Goods", description: "Wide range of household essentials." },
    { name: "Customer Support", description: "Friendly and helpful staff." },
    { name: "Home Delivery", description: "Order online and get your groceries delivered." }
];

function renderServices() {
    const container = document.getElementById("servicesContainer");

    servicesData.forEach(function (service) {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = service.name;

        const desc = document.createElement("p");
        desc.textContent = service.description;

        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card);
    });
}

const dealsData = [
    { name: "Sukuma Wiki (bundle)", price: "KSh 20" },
    { name: "White Bread (400g)", price: "KSh 65" },
    { name: "Fresh Milk (500ml)", price: "KSh 55" },
    { name: "Rice (2kg)", price: "KSh 280" },
    { name: "Cooking Oil (1L)", price: "KSh 310" },
    { name: "Bananas (dozen)", price: "KSh 120" }
];

function renderDeals() {
    const container = document.getElementById("dealsContainer");

    dealsData.forEach(function (deal) {
        const card = document.createElement("div");
        card.className = "deal-card";

        const title = document.createElement("h3");
        title.textContent = deal.name;

        const price = document.createElement("p");
        price.className = "deal-price";
        price.textContent = deal.price;

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.textContent = "Add to List";
        addBtn.addEventListener("click", function () {
            addToWishlist(deal.name);
        });

        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(addBtn);
        container.appendChild(card);
    });
}

/* ------------------------------------------------------------
   FEATURE 2: Dynamically add & remove elements (Shopping List)
   ------------------------------------------------------------ */
let wishlistItems = [];

function renderWishlist() {
    const list = document.getElementById("wishlistList");
    const emptyHint = document.getElementById("wishlistEmptyHint");

    list.innerHTML = "";

    if (wishlistItems.length === 0) {
        emptyHint.style.display = "block";
    } else {
        emptyHint.style.display = "none";
    }

    wishlistItems.forEach(function (itemName, index) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = itemName;

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
            li.remove();
            wishlistItems.splice(index, 1);
            renderWishlist();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}

function addToWishlist(name) {
    const trimmed = name.trim();
    if (trimmed === "") {
        return;
    }
    wishlistItems.push(trimmed);
    renderWishlist();
}

function setupWishlistForm() {
    const input = document.getElementById("wishlistInput");
    const addBtn = document.getElementById("wishlistAddBtn");

    addBtn.addEventListener("click", function () {
        addToWishlist(input.value);
        input.value = "";
        input.focus();
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addToWishlist(input.value);
            input.value = "";
        }
    });
}

/* ------------------------------------------------------------
   Initialize
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderDeals();
    renderWishlist();
    setupWishlistForm();
});
