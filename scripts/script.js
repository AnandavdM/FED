var headerMenuButton = document.querySelector(".header-menu");
var navMenuButton = document.querySelector(".nav-menu");
var navMenu = document.querySelector("nav");

headerMenuButton.onclick = toggleMenu;
navMenuButton.onclick = toggleMenu;

function toggleMenu() {
    headerMenuButton.classList.toggle("open");
    navMenuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
}
