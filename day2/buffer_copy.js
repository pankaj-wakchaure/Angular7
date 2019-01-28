/*
Following is the syntax of the method to copy a node buffer:
buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
*/
var buffer1 = new Buffer('Hello World');

//copy a buffer
var buffer2=new Buffer(3);

buffer1.copy(buffer2);
console.log("buffer2 contents "+buffer2.toString());

//copy a buffer
var buffer3=new Buffer(10);

buffer1.copy(buffer3,5,0,5);
console.log("buffer3 contents :"+buffer3.toString());
console.log(buffer3);
/*
Syntax
Following is the syntax of the method to get a sub-buffer of a node buffer:
buf.slice([start][, end])
*/
var x=buffer1.slice(1,4);
console.log(buffer1.toString());
console.log(x.toString());
console.log("Length :"+buffer1.length);


