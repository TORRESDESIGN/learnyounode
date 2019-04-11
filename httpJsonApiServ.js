const http = require('require');
const url = require('url');
const port = process.argv[2];

const path = '/api/parsetime';


var server = http.createServer((req, res) => {
	fs.createReadStream(path).pipe(res);
});
server.listen(port);