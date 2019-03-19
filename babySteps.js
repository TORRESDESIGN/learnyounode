//console.log(+process.argv[2]);

var total = 0;

for (var i = 2; i < process.argv.length; i ++) {
	//myVal = process.argv[i];
	total += +process.argv[i];	
}
console.log(total);
