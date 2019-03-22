var fs = require('fs');
var path = require('path');

module.exports = function(dir, extFilter, callback) {

	fs.readdir(dir, function(err, list){
		if (err) {
			return callback(err);
		} else {
			path.ext(list);
			return callback(null, list);
		}
	});
}