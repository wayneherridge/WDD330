function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(toDoList));
};

function updateTodo(id) {
    const toDoList = getTodoList();

    let index = toDoList.indexOf(toDoList.find(todo => todo.id == id));
    let todo = toDoList[index];

    todo.completed = true;

    localStorage.setItem('todoList', JSON.stringify(toDoList));

    console.log(getTodoList());
};

function deleteTodo(id) {
    const todoList = getTodoList();
    const updateTodos = todoList.filter(todo => todo.id != id);
    localStorage.setItem('todoList', JSON.stringify(updateTodos));
};

function getTodoList() {
    const todoListString = localStorage.getItem('todoList');
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
};

export default {
    saveTodo,
    getTodoList,
    deleteTodo,
    updateTodo
};