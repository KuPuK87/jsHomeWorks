import './modules/App.js';
import Slider from './modules/Slider.js';



// тут не хватило времени разобраться как управление слайдером подкдючить после загрузки верстки в html - поэтому костыли с таймаутом_) - нужна подсказка_)


setTimeout(function () {
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
}, 3000);

