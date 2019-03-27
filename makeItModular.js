var dir = process.argv[2];
var extFilter = process.argv[3];
var myModule = require('./myModule.js');	

var callback = function(err, list) {
	if (err) {
		throw err;
	} else {
		list.map(file => console.log(file));
	}
	//for loop list.length and console.log one per line
	
}

myModule(dir, extFilter, callback);

/*
This requires 2 files to complete

----------Plan----------------
1. print a filtered list of files from a given dir, by given ext
2. The 1st arg is dir, and 2nd arg is the ext
3. Print the list of files, one per line in the console(async io)

4. Create a module file to do most of work.
5. File must export 1 function that takes 3 args(dir, ext, callback func

-------------alternate version to mine-----------

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
	if (err) {
	return console.error('There was an error:', err)
	}

	list.forEach(function (file) {
	console.log(file)
	})
})
*/

