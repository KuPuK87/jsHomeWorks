import Site from './site.js';
import Slider from './slider.js';


document.body.innerHTML = `
    ${Site.header()}
    ${Site.sectionNavigation()}
    ${Site.sectionAbout()}
    ${Site.sectionSkills()}
    ${Site.sectionPortfolio()}
    ${Site.sectionContacts()}
    ${Site.footer()}
`;

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
    //Отключение слайдшоу при наведении маши на слайдер
    sliderBlock.addEventListener("mouseenter", slider.controllerHover.bind(slider));
    sliderBlock.addEventListener("mouseleave", slider.controllerHover.bind(slider));
})();