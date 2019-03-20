var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var fileExt = '.' + process.argv[3];

fs.readdir(filePath, function callback(err, list){
	if (err) {
		throw err;
	} else {
		newList = list.filter(function ext(file) {
			//path.extname(file).includes(fileExt);
			if (file.endsWith(fileExt)) {
				console.log(file);
			}
		});
	}
});

/*
resources: file:///C:/Users/Daniel/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/path.html
*/
/*
-----------other solution-----------

	var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
*/