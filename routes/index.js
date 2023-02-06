const reshelper = require('../util/reshelper');
const todohelper = require('../util/todohelper');

module.exports.eventName = '/';
module.exports.eventHandler = function (req, res) {
    const todos = todohelper.getListTodo();
    let todoRows = '';
    for (let i = 0; i < Math.max(todos.completed.length, todos.uncompleted.length); i++) {
        todoRows += '<tr><td>';
        if (todos.completed[i]) {
            todoRows += todos.completed[i].text;
            todoRows += ` <a href="javascript:removeTodo(${todos.completed[i].id});">&#10008;</a>`;
        }
        todoRows += '</td><td>';
        if (todos.uncompleted[i]) {
            todoRows += todos.uncompleted[i].text;
            todoRows += ` <a href="javascript:completedTodo(${todos.uncompleted[i].id})">&#10004;</a> <a href="javascript:removeTodo(${todos.uncompleted[i].id})">&#10008;</a>`;
        }
        todoRows += '</td></tr>';
    }

    reshelper.readAndSend(
        './views/index.html',
        res,
        [
            todos.completed.length,
            todos.uncompleted.length,
            todoRows
        ]);
};