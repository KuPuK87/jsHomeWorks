import load from './Load.js';

class Skills {
    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_skills');
        elem.id = 'skills';

        elem.innerHTML = `
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
        `;

        return elem;
    };
}

export default new Skills().init();