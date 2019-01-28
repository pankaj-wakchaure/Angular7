//Method 1
//Following is the syntax to create an uninitiated Buffer of 10 octets:
var buf1 = new Buffer(10);

//Method 2
//Following is the syntax to create a Buffer from a given array:
var buf2 = new Buffer([10, 20, 30, 40, 50]);

//Method 3
//Following is the syntax to create a Buffer from a given string and optionally encoding type:
var buf3 = new Buffer("Simply Easy Learning", "utf-8");


buf4 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
buf4[i] = i + 97;
}

//Following is the syntax of the method to write into a Node Buffer:
//buf.write(string[, offset][, length][, encoding])
len=buf1.write("Hello World Good Bye");


console.log("Octets Written in buf1 :"+len);

len=buf2.write("Hello WorldAAAA");
console.log("Octets Written in buf2 :"+len);

len=buf3.write("Hello World Good Bye");
console.log("Octets Written in buf3 :"+len);


//Read the contents

console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf3.toString());
console.log(buf4.toString());


// outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf2.toString('ascii',1,4));

// outputs: abcde
console.log(buf2.toString('utf8',1,4));
// outputs: abcde


console.log(buf4.toString("utf-8",8,4));
// encoding defaults to 'utf8', outputs abcde



console.log(buf2.toJSON());


var buffer3 = Buffer.concat([buf1,buf2]);
console.log(buffer3.toString());


var b1=new Buffer("ABCDEF");


console.log("============///==========")
console.log(b1);
console.log(b1.toJSON());
console.log(b1.toString());
console.log("==============");

var a=new Buffer("Softedge");

console.log("=="+a.toString());
console.log("=="+a.toString("utf-8",1));






