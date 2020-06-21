function toDoList() {
    let name = 'Список дел',
        placeholder = 'Введите новую задачу...';

    todoList = document.querySelector('body');

    let elements = {
        container: document.createElement('div'),
        h1: document.createElement('h1'),
        header: document.createElement('header'),
        input: document.createElement('input'),
        buttons: document.createElement('div'),
        clean: document.createElement('a'),
        faTrash: document.createElement('i'),
        ul: document.createElement('ul'),
    };

    elements.h1.innerHTML = name;
    elements.input.setAttribute('type', "text");
    elements.input.setAttribute('placeholder', placeholder);

    elements.container.classList.add('container');
    elements.container.classList.add('active');
    elements.header.classList.add('header');
    elements.input.classList.add('field_todo');
    elements.buttons.classList.add('buttons');
    elements.clean.classList.add('clean');
    elements.faTrash.classList.add('fa', 'fa-trash');
    elements.ul.classList.add('todo');

    elements.container.appendChild(elements.h1);
    elements.container.appendChild(elements.header);
    elements.header.appendChild(elements.input);
    elements.header.appendChild(elements.buttons);
    elements.buttons.appendChild(elements.clean);
    elements.clean.appendChild(elements.faTrash);
    elements.container.appendChild(elements.ul);

    todoList.insertBefore(elements.container, todoList.firstChild);
}

toDoList();



document.querySelector('.field_todo').addEventListener('keydown', function (e) {
    if (e.keyCode === 13 && this.value && this.value !== ' ') {
        addTodo(this);
        this.value = '';
    }
});

document.querySelector('.clean').addEventListener('click', function () {

    let field = document.querySelector('.todo');
    field.innerHTML = "";
    localStorage.removeItem('todo', field.innerHTML);
});

function addTodo(field) {

    let fieldValue = field.value,
        todoList = document.querySelector('.todo');

    let elements = {
        li: document.createElement('li'),
        p: document.createElement('p'),
        buttons: document.createElement('div'),
        addCheck: document.createElement('a'),
        delTodo: document.createElement('a'),
        editTodo: document.createElement('a'),
        faCheck: document.createElement('i'),
        faEdit: document.createElement('i'),
        faDel: document.createElement('i'),
    };

    elements.p.classList.add('text');
    elements.buttons.classList.add('buttons');
    elements.addCheck.classList.add('add_check');
    elements.editTodo.classList.add('edit_todo');
    elements.delTodo.classList.add('del_todo');
    elements.faCheck.classList.add('fa', 'fa-check');
    elements.faEdit.classList.add('far', 'fa-edit');
    elements.faDel.classList.add('far', 'fa-times-circle');

    elements.addCheck.appendChild(elements.faCheck);
    elements.editTodo.appendChild(elements.faEdit);
    elements.delTodo.appendChild(elements.faDel);
    elements.buttons.appendChild(elements.addCheck);
    elements.buttons.appendChild(elements.editTodo);
    elements.buttons.appendChild(elements.delTodo);
    elements.li.appendChild(elements.p);
    elements.li.appendChild(elements.buttons);
    elements.p.innerHTML = elements.p.innerHTML + fieldValue;

    todoList.insertBefore(elements.li, todoList.firstChild);

    document.querySelector('.edit_todo').addEventListener('click', editTodo);
    document.querySelector('.add_check').addEventListener('click', completeTodo);
    document.querySelector('.del_todo').addEventListener('click', deleteTodo);
}

function completeTodo() {
    this.closest('li').classList.toggle('fill');
}

function editTodo() {
    let li = this.closest('li');
    let p = li.querySelector('.text');
    let newText = prompt('Редактирование задачи', p.textContent);

    if (newText == null || newText == '' || newText == ' ') newText = p.textContent;
    p.innerHTML = newText;
}

function deleteTodo() {
    this.closest('li').remove();
}