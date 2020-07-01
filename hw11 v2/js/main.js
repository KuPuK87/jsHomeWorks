class Contact {
    constructor(data) {
        this.name = data.name;
        this.surname = data.surname;
        this.phone = data.phone;
    }

    set contact (data) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }

    get contact() {
        return [this.name, this.surname, this.phone]
    }
}

class UI {
    addContactToList(contact) {

        const list = document.getElementById('contact-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${contact.contact[0]}</td>
        <td>${contact.contact[1]}</td>
        <td>${contact.contact[2]}</td>
        <td><a href="" class="delete"></a></td>`;
        list.appendChild(row);
    }

    showAlert(message, className) {

        const div = document.createElement('div');

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const form = document.querySelector('#contact-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteContact(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {

        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('phone').value = '';
    }
}

document.getElementById('contact-form').addEventListener('submit', function (e) {

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    
    const contact = new Contact({
        name,
        surname,
        phone
    });
   
    const ui = new UI();

    if (name === '' || surname === '' || phone === '') {
        ui.showAlert('Пожалуйста заполните все поля', 'error');
    } else {
        ui.addContactToList(contact);

        ui.showAlert('Контакт добавлен!', 'success');

        ui.clearFields();
    }

    e.preventDefault();

})

document.getElementById('contact-list').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteContact(e.target);

    ui.showAlert('Контакт удален!', 'success');

    e.preventDefault();
});