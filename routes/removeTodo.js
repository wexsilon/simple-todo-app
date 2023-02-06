const reshelper = require('../util/reshelper');
const todohelper = require('../util/todohelper');

module.exports.eventName = '/remove-todo';
module.exports.eventHandler = function (req, res) {
    if (req.method === 'POST') {
        if (req.postData.todoId) {
            todohelper.removeTodoById(req.postData.todoId);
        }
    }
    res.statusCode = 201;
    res.end();
}