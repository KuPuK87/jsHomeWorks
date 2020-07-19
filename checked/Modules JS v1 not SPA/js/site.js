export default class Site {
    static header() {
        return `
        <header class="header" id="header">
            <div class="container">
                <div class="header_title">
                    <h1 class="upper">Website development and support</h1>
                    <a href="#contacts" class="button upper pulse">contact us</a>
                </div>
            </div>
        </header>
        `;
    }

    static sectionNavigation() {
        return `
        <section class="section_navigation" id="navigation">
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
        </section>
        `;
    }

    static sectionAbout() {
        return `
        <section class="section_about" id="about">
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
    </section>
        `;
    }

    static sectionSkills() {
        return `
        <section class="section_skills" id="skills">
        <div class="container">
            <div class="skills">
                <div class="skills_block">
                    <h2>PROMOTING THE SITE WITH US, YOU WILL RECEIVE:</h2>
                    <p>The TOP contains only those sites that best meet user needs. </p>
                    <p>We advance only for those requests that clearly show the client's interest in purchasing your goods and services.</p>
                    <p>TUsers trust search engines and primarily browse those sites that are in the TOP. </p>
                    <p>We are working on attractive content and page design, helping to make the site as convenient and interesting as possible for visitors. Users will remember your site for sure.</p>
                    <a href="#contacts" class="button upper pulse">Contact us</a>
                </div>
                <div class="skills_block">
                    <div class="skills_block-item">
                        <h3>FLOW OF NEW CLIENTS</h3>
                        <div class="skills_level">
                            <div class="skills_level-percent p90"></div>
                        </div>
                    </div>
                    <div class="skills_block-item">
                        <h3>REDUCING THE COST OF CUSTOMER ATTRACTION</h3>
                        <div class="skills_level">
                            <div class="skills_level-percent p80"></div>
                        </div>
                    </div>
                    <div class="skills_block-item">
                        <h3>WEBSITE TRAFFIC GROWTH</h3>
                        <div class="skills_level">
                            <div class="skills_level-percent p90"></div>
                        </div>
                    </div>
                    <div class="skills_block-item">
                        <h3>REPEAT SALES FROM THE SITE</h3>
                        <div class="skills_level">
                            <div class="skills_level-percent p70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
    }

    static sectionPortfolio() {
        return `
        <section class="section_portfolio" id="portfolio">
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
                            <p>Weather widget</p>
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
    </section>
        `;
    }

    static sectionContacts() {
        return `
        <section class="section_contacts" id="contacts">
            <div class="container">
                <div class="contacts">
                    <div class="contacts_block">
                        <h2>Contact us</h2>
                        <p>If you have any questions that you did not find an answer to, write to us. This form hides not an ordinary consultant, but real human support, so ask any questions - we will definitely help.</p>
                        <div class="contacts_address">
                            123 4563rd Street <br>
                            City, Ct<br>
                            2200000
                        </div>
                        <div class="contact_mail-phone">
                            <span>Email:</span> mail@gmail.com
                            <br>
                            <span>Phone:</span> 1-234-567-8990
                        </div>
                    </div>
                    <div class="contacts_block">
                        <form class="contacts_form" method="POST" action="#">
                            <div class="form_name">Name <span>*</span></div>
                            <input type="text" name="name" required>
                            <div class="form_name">Email Address <span>*</span></div>
                            <input type="email" name="email" required>
                            <div class="form_name">Your message<span></span></div>
                            <textarea name="message" required></textarea>
                            <button class="form_button upper">Contact us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    static footer() {
        return `
        <footer class="footer">
            <div class="container">
                <div class="footer_text upper">Copyright 2020 - WebDev Studia</div>
                <div class="footer_social">
                    <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.fb.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.pinterest.com" target="_blank"><i class="fab fa-pinterest"></i></a>
                    <a href="https://www.google.com" target="_blank"><i class="fab fa-google-plus-g"></i></a>
                    <a href="https://www.dribble.com" target="_blank"><i class="fab fa-dribbble"></i></a>
                    <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
        `;
    }
}