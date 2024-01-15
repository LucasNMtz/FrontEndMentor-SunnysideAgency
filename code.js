const socialIcons = document.querySelectorAll(".social-icon-img");

const dropdownMenuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

const aux = document.querySelector(".egg-picture");
const container = document.querySelector(".main__top-gallery-container");

socialIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.src = icon.src.replace(".svg", "-white.svg");
    })
    icon.addEventListener("mouseleave", () => {
        icon.src = icon.src.replace("-white.svg", ".svg");
    })
})

dropdownMenuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("dropdown-menu-active");
})

updateMainGrid();

window.addEventListener("resize", updateMainGrid);

function updateMainGrid() {
    if (window.innerWidth >= 880) container.style.gridTemplateRows = `repeat(3, ${aux.offsetWidth}px)`;
}