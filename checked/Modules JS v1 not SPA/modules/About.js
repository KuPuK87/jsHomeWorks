import load from './Load.js';

class About {
    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_about');
        elem.id = 'about';

        elem.innerHTML = `
        <div class="container">
            <div class="about">
                <div class="about_title">
                    <h2>About us</h2>
                    <p>Our work is our pride. It is essential for us that each task is performed at the highest level. That is why our team employs exclusively professionals in their field, who have at least nine years of experience in their field.
                    </p>
                    <p>Professionalism, experience and excellent service are the priorities of our team. Thanks to them, our clients see us as a reliable and intelligent business partner, who can be trusted with the most precious thing: the development of their company and the advertising budget.</p>
                </div>
                <div class="about_block">
                    <div class="about_block-item">
                        <h3>Website development</h3>
                        <div class="block_item-text">We create a selling website, which is designed taking into account the solution of your business problems, using our internal developments.
                        </div>
                    </div>
                    <div class="about_block-item">
                        <h3>Copywriting</h3>
                        <div class="block_item-text">Your potential customers will definitely become real ones. We will analyze your business and fill your site only with attractive and selling texts.
                        </div>
                    </div>
                    <div class="about_block-item">
                        <h3>Social Media Advertising</h3>
                        <div class="block_item-text">Your clients will become permanent. We will establish regular communications with the target audience, stimulate repeat sales and increase customer loyalty to the brand.
                        </div>
                    </div>
                    <div class="about_block-item">
                        <h3>Website promotion</h3>
                        <div class="block_item-text">Основной целью SEO является увеличение посещаемости вашего сайта за счет переходов из поисковых систем.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        return elem;
    };
}

export default new About().init();