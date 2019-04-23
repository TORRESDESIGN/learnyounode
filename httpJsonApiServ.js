const http = require('http');
//const fs = require('fs');
//const fs = require('fs');// node -pe "require('url').parse('/test?q=1', true)"
const url = require('url');
const port = process.argv[2];

//const path = '/api/parsetime';

var server = http.createServer((req, res) => {
	if (req.method == 'GET') {
		res.writeHead(200, { 'content-type': 'application/json' });
		var myUrl = url.parse(req.url, true);
		if (myUrl.pathname == '/api/parsetime') {
			console.log(myUrl.query.iso);
			console.log('this is unixtime');
			res.end('..completed');// shows url data now
		} else if (myUrl.pathname == '/api/unixtime') {
			console.log(myUrl.query.iso);
			console.log('this is not unixtime');
			res.end('..completed');// shows url data now
		} else {
			console.log('I got nothing');
		}
		//console.log(myUrl);
		
	}
});
server.listen(port);


/*
Offline Docs: file:///C:/Users/Daniel/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/

*/