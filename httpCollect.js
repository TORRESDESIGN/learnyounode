const http = require('http');
const url = process.argv[2];

http.get(url, (resp) => {
	resp.setEncoding('utf8');
	let allData;

	resp.on("data", function(data) {
		allData = allData + data;
	});

	resp.on("end", function() {
		console.log(allData);
	});
}).on("error", function(err) {
	console.log(err);
});

/*
-----------Plan------------




*/