var fs = require("fs");


fs.readFile('calc.js', function (error, data) {

             if (error) return console.error(error);

             console.log(data.toString());
});


console.log("Program Ended");