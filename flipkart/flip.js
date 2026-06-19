// Search Bar
const search = document.querySelector("input");

search.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        if (search.value.trim() === "") {
            alert("Please enter something to search.");
        } else {
            alert("Searching for: " + search.value);
        }
    }
});

// Login
const login = document.querySelectorAll(".main")[2];

login.addEventListener("click", function () {
    alert("Login Page Coming Soon!");
});

// Cart
const cart = document.querySelectorAll(".main")[3];

cart.addEventListener("click", function () {
    alert("Your Cart is Empty!");
});

// Become Seller
const seller = document.querySelectorAll(".main")[4];

seller.addEventListener("click", function () {
    alert("Seller Registration Coming Soon!");
});

// Top Deal Images
const deals = document.querySelectorAll(".del img");

deals.forEach(function(item){
    item.addEventListener("click",function(){
        alert(item.alt || "Product Selected");
    });
});

// Category Images
const category = document.querySelectorAll(".con img");

category.forEach(function(item){
    item.addEventListener("mouseover",function(){
        item.style.transform="scale(1.1)";
        item.style.transition="0.3s";
    });

    item.addEventListener("mouseout",function(){
        item.style.transform="scale(1)";
    });
});

// Auto Banner Slider
const banners = [
    "60 fusion.webp",
    "banner2.webp",
    "banner3.webp"
];

let index = 0;

const banner = document.querySelector("#motorola img");

setInterval(function(){
    index++;
    if(index>=banners.length){
        index=0;
    }
    banner.src=banners[index];
},3000);