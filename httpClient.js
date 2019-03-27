var http = require('http');
var url = require(process.argv[2]);

http.get(url, utf8, function (response) {
	//stream object(emit events)
	//[data, error, end]
	response.on("data", function (data) {
		console.log(data);
	});
})
/*
--------Plan----------


*/