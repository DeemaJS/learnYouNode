var net = require('net');

function correct(i) { return i < 10 ? '0' + i : i }

var server = net.createServer(function(socket) {
	var d = new Date();
	var date = d.getFullYear() + "-"
			 + correct(d.getMonth() + 1) + "-"
			 + correct(d.getDate()) + " "
			 + correct(d.getHours()) + ":"
			 + correct(d.getMinutes()) + "\n";

	socket.end(date);
})

server.listen(process.argv[2]);