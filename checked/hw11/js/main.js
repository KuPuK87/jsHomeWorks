const ContactsApp = function () {

    class DOM {
        static create(type) {
            return document.createElement(type);
        }

        static search(selector) {
            return document.querySelector(selector);
        }

        static insert(to, element, beforeElement) {
            if (!to || !element) return false;

            if (!beforeElement) to.appendChild(element);
            else to.insertBefore(element, beforeElement);
        }
    }

    class Contact {
        name = '';
        surname = '';
        phone = '';
        email = '';

        get phones() {
            return [this.name, this.surname, this.phone, this.email]
        }

        set phones(data) {
            this.name = data.name;
            this.surname = data.surname;
            this.phone = data.phone;
            this.email = data.email;
        }

        add() {
            if (DOM.search('input[name="name"]').value && DOM.search('input[name="phone"]').value) {
                contact.phones = {
                    name: DOM.search('input[name="name"]').value,
                    surname: DOM.search('input[name="surname"]').value,
                    phone: DOM.search('input[name="phone"]').value,
                    email: DOM.search('input[name="email"]').value
                };
                ui.addContactToList();
            } else {
                alert('Заполните как минимум поля "Имя" и "Номер телефона"');
            }
        }
    }

    class UI {
        addContactToList() {
            let contactsList = DOM.search('.contacts');

            let elements = {
                li: DOM.create('li'),
                name: DOM.create('div'),
                pName: DOM.create('p'),
                surname: DOM.create('div'),
                pSurname: DOM.create('p'),
                faEditSurname: DOM.create('i'),
                phone: DOM.create('div'),
                pPhone: DOM.create('p'),
                email: DOM.create('div'),
                pEmail: DOM.create('p'),

                delContact: document.createElement('a'),
                faDel: document.createElement('i'),
            };

            elements.name.classList.add('name');
            elements.surname.classList.add('surname');
            elements.phone.classList.add('phone');
            elements.email.classList.add('email');

            elements.delContact.classList.add('del_contact');
            elements.faDel.classList.add('fa', 'fa-trash');

            elements.delContact.appendChild(elements.faDel);
            elements.li.appendChild(elements.delContact);

            elements.name.appendChild(elements.pName);
            elements.surname.appendChild(elements.pSurname);
            elements.phone.appendChild(elements.pPhone);
            elements.email.appendChild(elements.pEmail);

            elements.li.appendChild(elements.name);
            elements.li.appendChild(elements.surname);
            elements.li.appendChild(elements.phone);
            elements.li.appendChild(elements.email);
            elements.li.appendChild(elements.delContact);

            elements.pName.innerHTML = elements.pName.innerHTML + 'Имя:  ' + contact.phones[0];
            elements.pSurname.innerHTML = elements.pSurname.innerHTML + 'Фамилия:  ' + contact.phones[1];
            elements.pPhone.innerHTML = elements.pPhone.innerHTML + 'Телефон:  ' + contact.phones[2];
            elements.pEmail.innerHTML = elements.pEmail.innerHTML + 'Эл.почта:  ' + contact.phones[3];

            contactsList.insertBefore(elements.li, contactsList.firstChild);

            DOM.search('a.del_contact').addEventListener('click', ui.deleteContact);
        }

        clearFields() {
            DOM.search('.field_name').value = '';
            DOM.search('.field_surname').value = '';
            DOM.search('.field_phone').value = '';
            DOM.search('.field_email').value = '';
        }

        clearContactList() {
            DOM.search('ul.contacts').innerHTML = '';
        }
        deleteContact() {
            this.closest('li').remove();
        }

        addHeader() {
            let container = DOM.create('div');
            container.classList.add('container');
            container.innerHTML = `
            <h1>Список контактов</h1>
            <header class="header">
                <input type="text" name="name" placeholder="Имя" required class="field_name">
                <input type="text" name="surname" placeholder="Фамилия" class="field_surname">
                <input type="phone" name="phone" placeholder="Номер телефона" required class="field_phone">
                <input type="email" name="email" placeholder="Адрес эл. почты" class="field_email">
                <div class="buttons">
                    <a href="#" class="add_contacts"><i class="fas fa-user-plus"></i></a>
                    <a href="#" class="clean_contacts"><i class="fa fa-trash"></i></a>
                </div>
            </header>
            <ul id = "contact-list" class="contacts">
            </ul>
            `;
            DOM.insert(document.body, container);
        }
    }

    const contact = new Contact();
    const ui = new UI();

    ui.addHeader();

    DOM.search('a.add_contacts').addEventListener('click', function () {
        contact.add();
        ui.clearFields();
    });

    DOM.search('a.clean_contacts').addEventListener('click', ui.clearContactList);
};

window.addEventListener('load', function () {

    new ContactsApp();
});