import load from './Load.js';

class App {
    static init() {

        const app = document.createElement('div');
        app.classList.add('site');

        document.body.appendChild(app);

        load('Header')
        .then(function (module) {
            app.appendChild(module.default);

                load('Nav')
                .then(function (module) {
                    app.appendChild(module.default);

                        load('Main')
                        .then(function (module) {
                            app.appendChild(module.default);

                                load('Footer')
                                .then(function (module) {
                                    app.appendChild(module.default);

                                    });
                            });
                    });
            });
    };
}

App.init();