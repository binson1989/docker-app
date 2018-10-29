const http = require('http');

http.createServer((req, res) => {
    res.write('Hello Docker!');
    res.end();
}).listen(8000);