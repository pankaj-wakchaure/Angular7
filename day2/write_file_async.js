var fs = require("fs");


var data="Welcome To FS Module";

fs.writeFile("b.txt",data,function(err){
console.log("writing........")
    if(err)
    return console.error(err);
}
);

console.log("Program Ended....");





