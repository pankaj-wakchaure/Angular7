var fs = require("fs");

var data ={id:101,name:"Pradeep",salary:12000};

// Create a writable stream

var writerStream = fs.createWriteStream('dsss.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(JSON.stringify(data));

// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error

writerStream.on('finish', function() {
console.log("Write completed.");
});

writerStream.on('error', function(err){
console.log(err.stack);
});
console.log("Program Ended");




