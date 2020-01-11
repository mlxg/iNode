const http = require('http');

require('colors')

const server = http.createServer((req, res) => {
    // throw new Error('error')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('111');
    console.log('111'.rainbow);
});

server.listen(3000);
