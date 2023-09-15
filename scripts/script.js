/* menu openen de MENU button */
var menuButton = document.querySelector("header > button");

var hetMenu = document.querySelector("nav");

menuButton.onclick = toggleMenu;

function toggleMenu (){
  hetMenu.classList.add("open");
}

/* menu sluiten met de sluit button */
var sluitButton = document.querySelector("nav button");

sluitButton.onclick = closeMenu;

function closeMenu (){
  hetMenu.classList.remove("open");
}




var menuButton = document.querySelector("header > button");

 

menuButton.onclick = toggleMenu;

 

function toggleMenu() {

    menuButton.classList.toggle("open");

}