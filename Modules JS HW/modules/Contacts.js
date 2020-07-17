import load from './Load.js';

class Header {
    init() {
        const elem = document.createElement('section');
        elem.classList.add('section_contacts');
        elem.id = 'contacts';

        elem.innerHTML = `
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
        `;

        return elem;
    };
}

export default new Header().init();