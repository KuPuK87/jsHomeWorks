import load from './Load.js';

class Header {
    init() {
        const elem = document.createElement('header');
        elem.classList.add('header');
        elem.id = 'header';

        elem.innerHTML = `
        <div class="container">
            <div class="header_title">
                <h1 class="upper">Website development and support</h1>
                <a href="#contacts" class="button upper pulse">contact us</a>
            </div>
        </div>
        `;

        return elem;
    };
}

export default new Header().init();