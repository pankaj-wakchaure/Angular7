var fs = require("fs");
// Asynchronous - Opening File
console.log("Going to open file!");

fs.open('pradeep.txt', 'r', function(err, data) {
if (err) {
return console.error(err);
}
console.log("File opened successfully over");
});