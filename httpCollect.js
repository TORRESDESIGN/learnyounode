const http = require('http');
const url = process.argv[2];

http.get(url, (resp) => {
	resp.setEncoding('utf8');
	let allData = [];
	let n;
	resp.on("data", function(data) {
		if (data) {
			allData.push(data);
		}
	});
	resp.on("end", function() {
		n = allData.join("").length;
		allData = allData.join("");
		console.log(n);
		console.log(allData);
	});
}).on("error", function(err) {
	console.log(err);
});

/*
-----------Alternate Solution using 3rd party package(bl: Buffer List)------------
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})



*/