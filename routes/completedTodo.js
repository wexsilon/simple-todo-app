const todohelper = require('../util/todohelper');

module.exports.eventName = '/completed-todo';
module.exports.eventHandler = function (req, res) {
    if (req.method === 'POST') {
        if (req.postData.todoId) {
            todohelper.completedTodoById(req.postData.todoId);
        }
    }
    res.statusCode = 201;
    res.end();
}