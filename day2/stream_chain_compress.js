var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('pradeep.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('pradeep.txt.gz'));

console.log("File Compressed.");