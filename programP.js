var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

	var parsed = url.parse(req.url, true);
	var d = new Date(parsed.query.iso);
	
	if (parsed.pathname == "/api/parsetime") {
		var timeISO = {
			"hour": d.getHours(),
			"minute": d.getMinutes(),
			"second": d.getSeconds()
		};
		res.writeHead(200, {"Content-Type": "application/json"});
		res.write(JSON.stringify(timeISO));
		res.end();
	} if (parsed.pathname == "/api/unixtime") {
		var timeUnix = {"unixtime": d.getTime()};
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(timeUnix));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(Number(process.argv[2]));