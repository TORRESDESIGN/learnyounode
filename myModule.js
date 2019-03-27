var fs = require('fs');
var path = require('path');

module.exports = function(dir, extFilter, callback) {

	fs.readdir(dir, function(err, list){
		if (err) {
			return callback(err);
		} else {
			list = list.filter(function ext(file) {
			//path.extname(file).includes(fileExt);
				//extFilter = path.extname(file);
				if (file.endsWith('.' + extFilter)) {
					return true;
				}
			})
			return callback(null, list);
		};
	});


};

/*
-------------alternate version to mine--------

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
	fs.readdir(dir, function (err, list) {
	if (err) {
	  return callback(err)
	}

	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filterStr
	})

	callback(null, list)
	})
}
*/