import utils from './utils.js';
import ls from './ls.js';

loadTodos();

document.querySelector('#addBtn').onclick = newTodo;

function loadTodos() {
    const todoList = ls.getTodoList();

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

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

};

function addToList(todoDiv) {
    // add to the document
    document.querySelector('#todos').appendChild(todoDiv);
};


// declare variables
let filteredTodos = [];
const allTodos = ls.getTodoList();

// draw the list
filteredTodos.forEach(todo => {
    const el = createTodoElement(todo);
    addToList(el);
})