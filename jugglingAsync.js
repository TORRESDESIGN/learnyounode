const http = require('http');
const url = [process.argv[2], process.argv[3], process.argv[4]];
let results = [];
let count = 0;

url.forEach((item, index) => {
	
	http.get(item, (res) => {
		res.setEncoding('utf8');
		let body = '';

		res.on("data", (data) => {
			body += data;
		})
		res.on("end", () => {
			//console.log(body);
			if (res.statusCode == 200) {
				count += 1;
				results[index] = body;
				if (count == url.length) {
					results.forEach( item => console.log(item));
				}
			}
		});
	}).on("error", (err) => console.log(err));


});

/*---------------alternate solution using 3rd party----

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

*/

