var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding("utf8");
	//stream object(emit events)
	//[data, error, end]
	response.on("data", function (data) {
		console.log(data);
	});
})
/*
--------Alternative to mine----------
var http = require('http')

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
}).on('error', console.error)

*/