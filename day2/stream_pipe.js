var fs = require("fs");
// Create a readable stream
var readerStream = fs.createReadStream('a.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('dd.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt

readerStream.pipe(writerStream,true);
console.log("Program Ended");




