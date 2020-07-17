import load from './Load.js';

class Nav {
    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_navigation');
        elem.id = 'navigation';

        elem.innerHTML = `
        <div class="container">
                <div class="navigation">
                    <div class="header_logo">
                        <a class="upper" href="#"><span>W</span> <span>Web</span><span>dev</span></a>
                    </div>

                    <input id="menu_toggle" type="checkbox" />
                    <label class="menu_button" for="menu_toggle">
                        <span></span>
                    </label>

                    <ul class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#skills">PROMOTING THE SITE</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contacts">Contact us</a></li>
                    </ul>
                </div>
            </div>
        `;

        return elem;
    };
}

export default new Nav().init();