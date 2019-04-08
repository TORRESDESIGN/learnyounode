const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const fileLocation = process.argv[3];

var server = http.createServer((req, res) => {
	fs.createReadStream(fileLocation).pipe(res);

});
server.listen(port);

/*-----------Alteranate Solution

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/