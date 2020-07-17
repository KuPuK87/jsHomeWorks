import load from './Load.js';

class Header {
    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_portfolio');
        elem.id = 'portfolio';

        elem.innerHTML = `
        <div class="container">
            <div class="portfolio">
                <div class="portfolio_title">
                    <h2>Portfolio</h2>
                    <p>Our work is our pride. It is essential for us that each task is performed at the highest level. That is why only professionals in their field work in our team, who have at least seven years of experience in their field.</p>
                </div>
                <div class="slider">
                    <ul class="slider_ul">
                        <li class="slider_li slider_li_active">
                            <p>Website redesign for company.com</p>
                            <img class="slider_img" src="images/slider/image1.jpg" alt="image1">
                        </li>
                        <li class="slider_li">
                            <p>Website design for user</p>
                            <img class="slider_img" src="images/slider/image2.jpg" alt="image2">
                        </li>
                        <li class="slider_li">
                            <p>Website redesign for the customer</p>
                            <img class="slider_img" src="images/slider/image3.jpg" alt="image3">
                        </li>
                        <li class="slider_li">
                            <p>Website development for the customer</p>
                            <img class="slider_img" src="images/slider/image4.jpg" alt="image4">
                        </li>
                        <li class="slider_li">
                            <p>Develop widget & web app</p>
                            <img class="slider_img" src="images/slider/image5.jpg" alt="image5">
                        </li>
                        <li class="slider_li">
                            <p>Website design for user</p>
                            <img class="slider_img" src="images/slider/image6.jpg" alt="image6">
                        </li>
                    </ul>
                    <div class="slider_pages-block">
                        <ul class="slider_pages-ul">
                            <li class="slider_pages-li slider_pages-li_active" data-target="0"></li>
                            <li class="slider_pages-li" data-target="1"></li>
                            <li class="slider_pages-li" data-target="2"></li>
                            <li class="slider_pages-li" data-target="3"></li>
                            <li class="slider_pages-li" data-target="4"></li>
                            <li class="slider_pages-li" data-target="5"></li>
                        </ul>
                    </div>
                    <a href="#" class="slider_buttons prev" data-target="prev"></a>
                    <a href="#" class="slider_buttons next" data-target="next"></a>
                </div>
            </div>
        </div>
        `;

        return elem;
    };
}

export default new Header().init();