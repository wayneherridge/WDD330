import utils from './utils.js';
import ls from './ls.js';

loadTodos();

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#viewActive').onclick = filterTodos;
document.querySelector('#viewAll').onclick = filterTodos;
document.querySelector('#viewCompleted').onclick = filterTodos;

function loadTodos() {
    const todoList = ls.getTodoList();

    updateCount(todoList);

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    });
};

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);

    updateCount(ls.getTodoList());
};

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false };
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    // todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.onclick = completeTodo;
    if (todo.completed) {
        completeBtn.innerHTML = "X";
        completeBtn.disabled = true;
    } else {
        completeBtn.innerHTML = "--";
    }

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    if (todo.completed) todoContent.classList.add('crossed-out');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "delete";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;

};

function addToList(todoDiv) {
    // add to the document
    document.querySelector('#todos').appendChild(todoDiv);
};

// event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'))
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
};

function completeTodo(e) {
    const btn = e.currentTarget;
    ls.updateTodo(btn.getAttribute('data-id'))
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function filterTodos(e) {
    // clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // check which filter to apply
    if (e.currentTarget.id == 'viewActive') {
        filteredTodos = utils.viewActive(allTodos)
    } else if (e.currentTarget.id == 'viewCompleted') {
        filteredTodos = utils.viewCompleted(allTodos)
    } else if (e.currentTarget.id == 'viewAll') {
        filteredTodos = allTodos
    }

    // draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    })
}

function updateCount(todos) {
    const active = utils.viewActive(todos);

    const count = active.length;

    const countEl = document.getElementById('count');

    countEl.innerText = count + ' Tasks Left';
}