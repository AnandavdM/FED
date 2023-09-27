// MENU//
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

// PAUZE KNOP//
var video = document.getElementById("background-video");

    var pauseButton = document.getElementById("pause-button"); 
    pauseButton.addEventListener("click", function () {
        if (video.paused) {
            video.play(); 
        } else {
            video.pause();
        }
    });

// LETTERGROOTTE//

// Functie om de lettergrootte te vergroten
    function increaseFontSize() {
        var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        var newSize = currentSize + 2; // Pas de toename aan
        document.body.style.fontSize = newSize + "px";
    }

    // Functie om de lettergrootte te verkleinen
    function decreaseFontSize() {
        var currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        var newSize = currentSize - 2; // Pas de vermindering aan
        document.body.style.fontSize = newSize + "px";
    }

    // Voeg eventlisteners toe aan de knoppen
    var increaseButton = document.getElementById("increase-font-size");
    increaseButton.addEventListener("click", increaseFontSize);

    var decreaseButton = document.getElementById("decrease-font-size");
    decreaseButton.addEventListener("click", decreaseFontSize);
