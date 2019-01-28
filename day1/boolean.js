var b1=new Boolean();  //false
var b2=new Boolean(true);  //true
var b3=new Boolean("sachin"); //true
var b4=new Boolean(10); //true
var b5=new Boolean(1.56); //true
var b6=new Boolean("");//false
var b7=new Boolean(0); //false
var b8=new Boolean(null);//false
var b9=new Boolean(-10);//true
var b10=new Boolean(new String(0));  //true
var s;
var b11=new Boolean(s);  //false
var b12=new Boolean(0.1);  //false

console.log("b1 :"+b1);
console.log("b2 :"+b2);
console.log("b3 :"+b3);
console.log("b4 :"+b4);
console.log("b5 :"+b5);
console.log("b6 :"+b6);
console.log("b7 :"+b7);
console.log("b8 :"+b8);
console.log("b9 :"+b9);
console.log("b10 :"+b10);
console.log("b11 :"+b11);
console.log("b12 :"+b12);


