var fs = require('fs');
var dirname = process.argv[2];
var ext = "." + process.argv[3];
var path = require('path');

fs.readdir(dirname, function (err, dir) {
	dir.forEach(function (file) {
		if (path.extname(file) == ext) {
			console.log(file);
		}	
	})
})