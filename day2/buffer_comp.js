var buffer1 = new Buffer('ABCD');
var buffer2 = new Buffer('abcd');

var result = buffer2.compare(buffer1);

console.log(buffer1.toString());
console.log(buffer2.toString());



if(result < 0) {    
console.log(buffer1 +" comes before " + buffer2);
}
else if(result == 0){
console.log(buffer1 +" is same as " + buffer2);
}
else {
console.log(buffer2 +" comes after " + buffer1);
}