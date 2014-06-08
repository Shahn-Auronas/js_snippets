
//handling a file by serving it from disk
//buffers the whole file into memory for every request before writing 
//the result back to the clients.

var http = require('http'),
	fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/data.txt', function (err, data) {
	    res.end(data);
	});
});
server.listen(8000);



//re-written with fs.createReadStream() rather than fs.readFile()
var http = require('http'),
	fs = require('fs');
	//w/ compression: var oppressor = require('opressor');

var server = http.createServer(function (req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	//pipe will take care of listening for "data" and "end" events from the 
	//fs.createReadStream
	//backpressure handled for free
	stream.pipe(res);
	//with compression:
	//stream.pipe(oppressor(req)).pipe(res);
});
server.listen(8000);