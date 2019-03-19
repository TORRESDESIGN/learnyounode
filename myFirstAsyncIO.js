var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function callback(err, data) {
	if (err) throw err;
	let x = data.split(/\n/).length - 1;
	console.log(x);
})
