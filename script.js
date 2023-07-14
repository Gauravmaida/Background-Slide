
const body = document.body;

const sildeContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");

const left = document.getElementById("left")
const right = document.getElementById("right");

let activeslide = 0;

right.addEventListener("click", () => {

    activeslide++

    if (activeslide > slides.length - 1) {
        activeslide = 0;
    }

    setslidetobg();
    setactive()

})


left.addEventListener("click", () => {
    activeslide--

    if (activeslide < 0) {
        activeslide = slides.length - 1
    }
    setslidetobg();
    setactive()

})

function setslidetobg() {
    body.style.backgroundImage = slides[activeslide].style.backgroundImage
}


function setactive() {

    slides.forEach((slide) => slide.classList.remove("active"))

    slides[activeslide].classList.add("active")
}