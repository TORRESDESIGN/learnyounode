//console.log(process.argv);
var fs = require('fs');

var filename = process.argv[2];

var file = fs.readFileSync(filename);

var contents = file.toString();

var myArray = contents.split(/\n/);

console.log(myArray.length - 1);

/*
alternate solution:

var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);
*/
