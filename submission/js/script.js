/* ============================================================
   Cleanshelf Supermarket - CAT 2 JavaScript
   ============================================================ */

/* ------------------------------------------------------------
   FEATURE 1: Loop-rendered dynamic content (Services & Deals)
   ------------------------------------------------------------ */
const servicesData = [
    {
        name: "Fresh Produce",
        description: "Fresh fruits and vegetables every day."
    },
    {
        name: "Household Goods",
        description: "Wide range of household essentials."
    },
    {
        name: "Customer Support",
        description: "Friendly and helpful staff."
    },
    {
        name: "Home Delivery",
        description: "Order online and get your groceries delivered."
    }
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

        card.appendChild(title);
        card.appendChild(price);
        container.appendChild(card);
    });
}

/* ------------------------------------------------------------
   Initialize
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
    renderServices();
    renderDeals();
});
