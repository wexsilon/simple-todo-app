const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

const constant = require('./constant');

function setResponse(res, data, ext) {
    res.setHeader('Content-Type', constant.MIME_TYPE[ext]);
    res.write(data, 'binary');
    res.end();
}

function readAndSend(filePath, response, args=[]) {
    if (!fs.existsSync(filePath)) {
        response.statusCode = 404;
        filePath = './views/404.html';
    }
    
    fs.readFile(filePath, (err, data) => {
        if (err)
            throw err;
        
        setResponse(
            response,
            util.format(data.toString(), ...args),
            path.extname(filePath)
        );
    });
}

function redirectTo(res, u='/') {
    res.statusCode = 302;
    res.setHeader('Location', u);
    res.end();
}


module.exports.setResponse = setResponse;
module.exports.readAndSend = readAndSend;
module.exports.redirectTo = redirectTo;