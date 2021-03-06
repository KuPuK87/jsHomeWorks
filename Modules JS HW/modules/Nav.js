import load from './Load.js';

class Nav {
    async get() {
        return await fetch('/data/Pages.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let html = '';

                for (const page in data) {
                    html += `<li><a href="/#${page}">${data[page].title}</a></li>`;
                }

                return !html ? '' : html;
            });
    }

    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_navigation');
        elem.id = 'navigation';
        this.get().then(function(html) {
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

                    <ul class="nav">${html}</ul>
                </div>
            </div>
        `;
    });

        return elem;
    };
}

export default new Nav().init();