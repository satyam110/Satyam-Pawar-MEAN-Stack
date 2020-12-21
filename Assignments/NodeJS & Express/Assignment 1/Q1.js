const http = require('http');
const  port = 3000;
const server = http.createServer((req,res) => {
    res.end("Success I'm listening from port: 3000");
});

server.listen(3000);