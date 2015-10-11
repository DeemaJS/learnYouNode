var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
	var result = "";
	res.setEncoding('utf8');
	res.on('data', function(data) {
		result += data;
	});
	res.on('end', function() {
		console.log(result.length);
		console.log(result);
	})
	res.on('error', console.error);
});
