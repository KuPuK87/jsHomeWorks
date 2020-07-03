(_ => {
    window.addEventListener('load', _ => {

        const autInfo = {
            login: 'admin',
            password: 'admin'
        };

        const getCookie = function (name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        const alert = function () {
            const div = document.createElement('div');
            div.className = 'alert';
            div.appendChild(document.createTextNode('Incorrect data entered! Try Again'));
            const container = document.querySelector('.form');
            const form = document.querySelector('.form_title');
            container.insertBefore(div, form);

            setTimeout(function () {
                document.querySelector('.alert').remove();
            }, 5000);
        };

        const auth = function () {

            let form = this.closest('.form'),
                inputLogin = form.querySelector('input[name="login"]').value,
                inputPassword = form.querySelector('input[name="password"]').value;

            if (inputLogin === autInfo.login &&
                inputPassword === autInfo.password) {
                document.cookie = 'auth=true';
                document.cookie = 'authLogin=' + inputLogin;
                window.location = './app.html';
            } else {
                alert();
            }
        };

        const logout = function () {
            if (!getCookie('auth') || !getCookie('authLogin')) return;

            document.cookie = 'auth=; max-age=-1';
            document.cookie = 'authLogin=; max-age=-1';

            if (!getCookie('auth')) window.location.reload();
        };

        let contactsData = [];

        let contactsUpdate = function () {

            let localContactsData = localStorage.getItem('contactsData');
            if(localContactsData) {
                 if (localContactsData.length > 0) contactsData = JSON.parse(localContactsData);
            }
            let contactsList = document.querySelector('.contacts_list ul');
            contactsList.innerHTML = '';

            contactsData.forEach(function (contact, id) {
                let elemContact = document.createElement('li');
                elemContact.classList.add('item');

                elemContact.innerHTML = `
                    <div class="id">${id + 1}</div>
                    <div class="name">${contact.name}</div>
                    <div class="phone">${contact.phone}</div>
            `;
                let del = document.createElement('i');
                del.classList.add('fa-trash');
                del.classList.add('fa');
                elemContact.appendChild(del);

                contactsList.appendChild(elemContact);

                del.addEventListener('click', contactDel);
            });
        };

        const contactAdd = function () {
            let form = this.closest('.form_add'),
                inputName = form.querySelector('input[name="name').value,
                inputPhone = form.querySelector('input[name="phone').value;

            if (inputName.lenght == 0 ||
                inputName == ' ' ||
                inputName == '' ||
                inputPhone.lenght == 0 ||
                inputPhone == '' ||
                inputPhone == ' ') return;

            let contact = {
                name: inputName,
                phone: inputPhone
            };

            contactsData.push(contact);

            localStorage.setItem('contactsData', JSON.stringify(contactsData));

            form.querySelector('input[name="name').value = '';
            form.querySelector('input[name="phone').value = '';

            contactsUpdate();

            if (sessionStorage.getItem('contactInputName') && sessionStorage.getItem('contactInputPhone')) {
                sessionStorage.removeItem('contactInputName')
                sessionStorage.removeItem('contactInputPhone')
            }
        };

        const contactSave = function () {

            let form = this.closest('.form_add'),
                inputName = form.querySelector('input[name="name').value,
                inputPhone = form.querySelector('input[name="phone').value;

            if (inputName.lenght == 0 ||
                inputName == ' ' ||
                inputName == '' ||
                inputPhone.lenght == 0 ||
                inputPhone == '' ||
                inputPhone == ' ') return;

            sessionStorage.setItem('contactInputName', inputName);
            sessionStorage.setItem('contactInputPhone', inputPhone);
        };

        const clearAll = function () {
            window.localStorage.clear();
            window.sessionStorage.clear();
            location.reload()
        };

        const contactDel = function (index) {
            let data = JSON.parse(localStorage.getItem("contactsData"));
            data.splice(index, 1);
            localStorage.setItem("contactsData", JSON.stringify(data));
            location.reload()
        };

        if (window.location.pathname == './app.html' && !getCookie('auth')) window.location = '/index.html';

        if (window.location.pathname == './index.html' && getCookie('auth') === 'true') window.location = '/app.html';

        let buttonSignin = document.querySelector('.form .signin'),
            buttonLogout = document.querySelector('.contacts .logout');

        if (buttonSignin) buttonSignin.addEventListener('click', auth);
        if (buttonLogout) buttonLogout.addEventListener('click', logout);

        let buttonAdd = document.querySelector('.form_add .add'),
            buttonSave = document.querySelector('.form_add .save'),
            buttonClear = document.querySelector('.contacts .clear')

        if (buttonAdd) buttonAdd.addEventListener('click', contactAdd);
        if (buttonSave) buttonSave.addEventListener('click', contactSave);
        if (buttonClear) buttonClear.addEventListener('click', clearAll);

        if (window.location.pathname == '/app.html') {
            contactsUpdate();
            let contactInputName = sessionStorage.getItem('contactInputName');
            let contactInputPhone = sessionStorage.getItem('contactInputPhone');

            if (contactInputName && contactInputName.length > 0 && contactInputPhone && contactInputPhone.length > 0) {
                let form = document.querySelector('.form_add'),
                    inputName = form.querySelector('input[name="name'),
                    inputPhone = form.querySelector('input[name="phone');

                inputName.value = contactInputName;
                inputPhone.value = contactInputPhone;
            }
        }

    });

})();