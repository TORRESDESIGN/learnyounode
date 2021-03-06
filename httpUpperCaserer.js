//requres: *----------- $ npm install through2-map     *-------------

const http = require('http');
const map = require('through2-map');
const port = process.argv[2];


var server = http.createServer((req, res) => {
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res)
});
server.listen(port);

/*--------Alternate Solution using Through2-Map API-------------

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))

*/