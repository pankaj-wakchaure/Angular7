var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('calc222.js');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
console.log("Data Event Reading  :");
data=chunk;
});

readerStream.on('end',function(){
    console.log("=============================================");
    console.log("End Event  :"+data);
});

readerStream.addListener('error', function(err){
console.error("Error occured  ::"+err);
});


console.log("Program Ended");