let lines = "----------------------------------------"
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.querySelector(".productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let productInfo = document.getElementById("productInfo");
    productInfo.innerHTML = "";

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <br><br><strong>${product.name}</strong> - $${product.price} <br>
            ${product.description} <br><br>
        `;
        productInfo.appendChild(productDiv);
    });
});
