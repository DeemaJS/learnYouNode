var pG = require('./programG');
var dirname = process.argv[2];
var ext = process.argv[3];

pG(dirname, ext, function(err, list) {
	if (err) return console.error('Error', err);
	list.forEach(function(file){
		console.log(file);
	})
})	
 