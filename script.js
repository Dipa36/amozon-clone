const products = [
    { id: 1, name: "wireless headphone", price: 3000, image: "images/wirelessHeadphone.jpg" },
    { id: 2, name: "laptop", price: 14900, image: "images/laptop.jpg" },
    { id: 3, name: "speaker", price: 7000, image: "images/speaker.jpg" },
    {id: 4, name:"Iphone", price:150000 ,image:"images/iphone.jpg"},
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to cart</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}


renderProducts();
updateCartCount();