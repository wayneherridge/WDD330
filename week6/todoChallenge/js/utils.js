function viewCompleted(todos) {
    return todos.filter(todo => {
        return todo.completed
    })
}

function viewActive(todos) {
    return todos.filter(todo => {
        return !todo.completed
    })
}

export default {
    viewActive,
    viewCompleted
}