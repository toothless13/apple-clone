const storeMenu = document.querySelector("body > header > nav > ul > li:nth-child(2) > a");
const storeDropdown = document.querySelector("body > header > nav > ul > li:nth-child(2) > div");
storeMenu.addEventListener("mouseenter", function() {
    storeDropdown.style.display = "block";
});

storeMenu.addEventListener("mouseexit", function() {
    storeDropdown.style.display = "none";
});