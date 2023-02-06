const http = require('node:http');
const querystring = require('node:querystring');
const events = require('node:events');
const fs = require('node:fs');

const constant = require('./util/constant');


const em = new events.EventEmitter();

fs.readdirSync('./routes', { withFileTypes: true }).filter((value) => {
    return value.name.endsWith('.js');
}).forEach((value) => {
    const route = require(`./routes/${value.name}`);
    em.addListener(route.eventName, route.eventHandler);
});


const server = http.createServer((req, res) => {
    res.addListener('finish', () => {
        console.log(`${req.method.toLowerCase()} ${res.statusCode} ${req.url}`);
    });
    for (let publicUrl of constant.PUBLIC_URL) {
        if (req.url.startsWith(publicUrl)) {
            em.emit('public', req, res);
            return;
        }
    }

    req.postData = '';
    req.on('data', (data) => {
        req.postData += data.toString();
    });
    req.on('end', () => {
        req.postData = querystring.parse(req.postData);

        req.getData = new URLSearchParams(req.url.split('?').slice(1).join('?'));
    
        if (em.eventNames().includes(req.url)) {
            em.emit(req.url, req, res);
        } else {
            em.emit('404', req, res);
        }

    });


});


server.listen(constant.SERVER_PORT, constant.SERVER_IP, () => {
    console.log(`server listening on http://${constant.SERVER_IP}:${constant.SERVER_PORT}/`);
});
