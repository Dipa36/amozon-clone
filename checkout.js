let cart = JSON.parse(localStorage.getItem("cart")) || [];


 function rendercheckout(){
    const ul = document.getElementById("checkout-items");
    const totalEl= document.getElementById("checkout-total");
    let total = 0;
    ul.innerHTML = ""
    cart.forEach ((item ,i) =>{
total += item.price;
const li = document.createElement("li");
li.textContent = `${item.name} -NRs. ${item.price}`;
ul.appendChild(li);

    });
    totalEl.textContent = total.toFixed(2);


 }
 function completeCheckout(){
    if (cart.length === 0){
        alert("Your cart is Empty");
        return;

    }
    alert("thank you your order has been placed.");
    cart = []
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.href ="index.html";
 }
 rendercheckout();
