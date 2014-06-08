
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


//creating a readable stream
var Readable = require('stream').Readable;

var rs = new Readable;
//chunks are buffered
rs.push("do");
rs.push("wop");
//tells consumer that rs is done outputting data
rs.push(null);

rs.pipe(process.stdout);

//pushing chunks on demand by creating a ._read function
var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
	rs.push(String.fromCharCode(c++));
	//done when we hit z
	if (c > 'z'.charCodeAt(0)) {
		rs.push(null);
	};
	setTimeout(function () {
		rs.push(String.fromCharCode(++c));
	}, 100);
};
rs.pipe(process.stdout);
//waiting for SIGPIPE, EPIPE error on process.stdout
process.on('exit', function () {
	console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', proces.exit);

//if you want arbitrary values and not just strings and buffers
Readable({ objectMode: true })


//consuming a readable stream directly
process.stdin.on('readable', function () {
	//read(n) to return n bytes of data
	var buf = process.stdin.read();
	console.dir(buf);
});