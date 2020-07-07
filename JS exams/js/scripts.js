(() => {
    const images = document.querySelectorAll(".slider_li");
    const buttons = document.querySelectorAll(".slider_button");
    const pages = document.querySelectorAll(".slider_pages-li");
    const sliderBlock = document.querySelector(".slider");

    const slider = new Slider(
        images,
        buttons,
        pages
    );
    slider.startSlideShow();

    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
    
    sliderBlock.addEventListener("mouseenter", slider.controllerHover.bind(slider));
    sliderBlock.addEventListener("mouseleave", slider.controllerHover.bind(slider));
})();