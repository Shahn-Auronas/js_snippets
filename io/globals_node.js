/*
 * Node global space
 *
 */

 //CONSOLE
 
 //writes to stdout
 console.log()

 //writes to stderr
 console.error() 
 //also aliased
 console.warn()

//utilizes sys module's inspect() method to pretty print
console.dir()

// must be truthy or throws exception
console.assert(connected, "connection failed")


//PROCESS
//node process
process.version
process.installPrefix
process.execPath
process.platform
process.pid

//current working directory
proces.cwd

//change dir to path passed
process.chdir('/path')

//return the numeric user id of the running process
process.getuid()
process.setuid()

//return the numerical groupd id of the running process
process.getgid()
process.setgid()

//an object containing the users environment variables
process.env

//provides access to argument vector: (node executable, filename, [args, ])
process.argv

//similar to C exit()
process.exit()

//EventEmitter
process.on

//this method sends the signal passed to the given pid, defaulting to SIGINT
process.kill('SIGTERM', function () {
	console.log('terminating');
	process.exit(1);
});

setTimeout(function () {
	console.log('sending SIGTERM to process %d', process.pid);
	process.kill(process.pid, 'SIGTERM');
}, 1000);


/* errno
 * the process object is host of the error numbers. 
 * used without bindings  to bring C++ & JS
 * and exception handling
 */
 //permission-based error
 process.EPERM

 //missing file or directory
 process.ENOENT

if (err.errno === process.ENOENT) {
	//display 404
} else {
	// 500
}





