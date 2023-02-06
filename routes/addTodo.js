const todohelper = require('../util/todohelper');
const reshelper = require('../util/reshelper');

module.exports.eventName = '/add-todo';
module.exports.eventHandler = function (req, res) {
    if (req.method === 'POST') {
        if (req.postData.todo) {
            todohelper.addNewTodo(req.postData.todo);
        }
    }
    reshelper.redirectTo(res);
};
