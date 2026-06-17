const container = document.getElementById("sliderContainer");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
    container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth"
    });
});

rightArrow.addEventListener("click", () => {
    container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth"
    });
});