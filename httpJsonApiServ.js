const http = require('http');
//const fs = require('fs');// node -pe "require('url').parse('/test?q=1', true)"
const url = require('url');
const port = process.argv[2];

//const path = '/api/parsetime';


var server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'application/json' });
	var myUrl = url.parse(req.url, true);
	console.log(myUrl);// shows url data now
});
server.listen(port);


/*
Offline Docs: file:///C:/Users/Floater/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/

*/
