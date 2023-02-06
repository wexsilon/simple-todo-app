const jsonfile = require('./jsonfile');

function addNewTodo(todo) {
    const listTodo = jsonfile.readJson();
    listTodo.push({
        id: Math.floor(Math.random() * 10000).toString(),
        text: todo,
        completed: false
    });
    jsonfile.writeJson(listTodo);
};

function getListTodo() {
    const listTodo = jsonfile.readJson();
    const res = {completed: [], uncompleted: []};
    for (let todo of listTodo) {
        if (todo.completed) {
            res.completed.push(todo);
        } else {
            res.uncompleted.push(todo);
        }
    }
    return res;
}

function removeTodoById(todoId) {
    const listTodo = jsonfile.readJson().filter(todo => todo.id != todoId);
    jsonfile.writeJson(listTodo);
}

function completedTodoById(todoId) {
    const listTodo = jsonfile.readJson();
    listTodo.forEach(todo => {
        if (todo.id === todoId) {
            todo.completed = true;
        }
    });
    jsonfile.writeJson(listTodo);
}


module.exports.addNewTodo = addNewTodo;
module.exports.getListTodo = getListTodo;
module.exports.removeTodoById = removeTodoById;
module.exports.completedTodoById = completedTodoById;