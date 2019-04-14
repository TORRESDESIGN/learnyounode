const http = require('http');
const url = require('url');
const port = process.argv[2];

const path = '/api/parsetime';


var server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'application/json' });
	fs.createReadStream(path).pipe(res);
});
server.listen(port);


/*
Offline Docs: file:///C:/Users/Floater/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/

*/