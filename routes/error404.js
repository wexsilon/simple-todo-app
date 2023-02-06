const reshelper = require('../util/reshelper');

module.exports.eventName = '404';
module.exports.eventHandler = function (req, res) {
    res.statusCode = 404;
    reshelper.readAndSend('./views/404.html', res);
};