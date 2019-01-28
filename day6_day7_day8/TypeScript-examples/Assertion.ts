var str = "1" 

console.log(typeof str);

var str2:number = <number> <any>str;   //str is now of type number 

console.log(str2);

console.log(typeof str2);

console.log(typeof str);

