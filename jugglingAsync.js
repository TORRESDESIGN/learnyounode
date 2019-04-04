const http = require('http');
const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];

let allData = [];

function callback1(resp) {

	http.get(url_1, (resp) => {
	resp.setEncoding('utf8');
	resp.on("data", function(data) {
		if (data) {
			allData.push(data);
		}
	});
	resp.on("end", function() {
		console.log(`This is the data: ${allData}`);
		callback2();
	});
	}).on("error", function(err) {
	console.log(err);
	});
}

function callback2(resp) {

	http.get(url_2, (resp) => {
	resp.setEncoding('utf8');
	resp.on("data", function(data) {
		if (data) {
			allData.push(data);
		}
	});
	resp.on("end", function() {
		callback3();
	});
	}).on("error", function(err) {
	console.log(err);
	});
}

function callback3(resp) {

	http.get(url_3, (resp) => {
	resp.setEncoding('utf8');
	resp.on("data", function(data) {
		if (data) {
			allData.push(data);
		}
	});
	resp.on("end", function() {
		if (allData.length >= 3) {
			allData.forEach(item => console.log(item))
		}
	});
	}).on("error", function(err) {
	console.log(err);
	});
}

callback1();