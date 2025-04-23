// Description: This code creates a simple HTTP server using Node.js that listens on port 3000 and responds with "Hello World" to any incoming request.
const  http = require('http');

const server = http.createServer(function (req, res) {
    res.end('Hello World');
});

server.listen(3000);