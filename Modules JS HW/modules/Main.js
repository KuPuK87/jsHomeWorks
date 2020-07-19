import Slider from './Slider.js';



function sliderController() {
    const images = document.querySelectorAll(".slider_li");
    const buttons = document.querySelectorAll(".slider_button");
    const pages = document.querySelectorAll(".slider_pages-li");
    const sliderBlock = document.querySelector(".slider");

    const slider = new Slider(
        images,
        buttons,
        pages
    );

    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
}

class Main {
    constructor() {
        this.elem = document.createElement('section');
        this.elem.classList.add('main');
    }

    decodeHtmlspecialChars(text) {
        let map = {
            '&amp;': '&',
            '&#038;': "&",
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'",
            '&#8217;': "’",
            '&#8216;': "‘",
            '&#8211;': "–",
            '&#8212;': "—",
            '&#8230;': "…",
            '&#8221;': '”'
        };

        return text.replace(/\&[\w\d\#]{2,5}\;/g, function (m) {
            return map[m];
        });
    }

    async get(page) {
        const self = this;

        return await fetch('/data/Pages.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (!data) return;
                data = data[page];


                self.elem.innerHTML = `
                    <div class="${data.title}">
                    <div class="container">
                        <div class="${data.title}_block">
                            <h2>${data.title}</h2>
                            ${self.decodeHtmlspecialChars(data.content)}
                        </div>
                    </div>
                    </div>
                    `;
                sliderController();

            });
    }

    init() {
        const self = this;

        let hash = location.hash.replace('#', '') || 'portfolio';

        this.get(hash);

        window.addEventListener('hashchange', function () {
            hash = location.hash.replace('#', '');
            self.get(hash);
        });

        return this.elem;
    };
}

export default new Main().init();