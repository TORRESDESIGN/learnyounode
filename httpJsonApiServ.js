const http = require('http');
//const fs = require('fs');
const url = require('url');
const port = process.argv[2];

const path = '/api/parsetime';


http.createServer((req, res) => {
	url = url.parse(path, true);
	console.log(url);
}).listen(port);
