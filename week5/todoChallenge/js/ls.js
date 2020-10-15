function saveTodo(todo) {
    const todoList = getTodoList();
    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
};

function deleteTodo(id) {
    const todoList = getTodoList();
    const updateTodos = toDoList.filter(todo => todo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updateTodos));
};

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];
    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    return todoList;
};
export default {
    saveTodo,
    getTodoList,
    deleteTodo
};