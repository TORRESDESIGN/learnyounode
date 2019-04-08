const http = require('http');
const port = process.argv[2];
const location = process.argv[3];

var server = http.createServer((req, res) => {

});
server.listen(port);