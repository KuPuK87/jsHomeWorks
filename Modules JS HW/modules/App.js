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

                        load('About')
                            .then(function (module) {
                                app.appendChild(module.default);

                                load('Skills')
                                    .then(function (module) {
                                        app.appendChild(module.default);

                                        load('Portfolio')
                                            .then(function (module) {
                                                app.appendChild(module.default);

                                                load('Contacts')
                                                    .then(function (module) {
                                                        app.appendChild(module.default);

                                                        load('Footer')
                                                            .then(function (module) {
                                                                app.appendChild(module.default);
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    };
}

App.init();