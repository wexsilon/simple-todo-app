const fs = require('node:fs');

module.exports.readJson = function () {
    return JSON.parse(fs.readFileSync('./data/todos.json'));
};

module.exports.writeJson = function (obj) {
    console.log(obj);
    fs.writeFileSync('./data/todos.json', JSON.stringify(obj));
};