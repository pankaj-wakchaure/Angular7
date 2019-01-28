var fs = require("fs");

var data = fs.readFileSync('calc.js');

console.log(data);

console.log(data.toString());

console.log("Program Ended");
