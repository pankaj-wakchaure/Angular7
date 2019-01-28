var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('pradeep.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('pradeepnew.txt'));

console.log("File Decompressed.");