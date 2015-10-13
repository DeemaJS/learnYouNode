var http = require('http');
var fs = require('fs');

var file = process.argv[3];

var server = http.createServer(function(req, res) {
	fs.createReadStream(file).pipe(res);
});

server.listen(Number(process.argv[2]));