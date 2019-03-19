var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];


console.log(`the filepath is: ${filePath} and the extension is: ${process.argv[3]}`);
/*
fs.readdir(filePath, function callback(err, list){
	if (err) {
		throw err;
	} else {
		path.extname(list);
	}
});

*/
/*
-----------Notes----------------
list = [list of filname strings]
I want to loop through that list 
*/

/*
resources: file:///C:/Users/Daniel/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/path.html
*/