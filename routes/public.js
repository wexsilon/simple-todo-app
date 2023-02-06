const reshelper = require('../util/reshelper');

module.exports.eventName = 'public';
module.exports.eventHandler = function (req, res) {
    reshelper.readAndSend(`./public${req.url}`, res);
};