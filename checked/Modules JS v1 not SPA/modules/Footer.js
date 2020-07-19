class Footer {
    init() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');
        
        elem.innerHTML = `
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
        `;

        return elem;
    };
}

export default new Footer().init();