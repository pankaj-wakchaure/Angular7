//declare  Person 


function Person(){
this.name="Pradeep";
this.age=35;

this.talk=function(){
    console.log("Hello I am "+this.name);
    console.log("My Age is  "+this.age);
}

this.toString=function(){
    return "["+this.name+", "+this.age+"]";
}

var display1=function(){
    console.log("Hello I am "+this.name);
    console.log("My Age is  "+this.age);
}
 
} //Person


var p=new Person();

p.talk();

console.log(" p :"+p);
console.log(" p :"+p.toString());
console.log(p.toString());

console.log("==================");
console.log(p);
console.log("HHH :"+JSON.stringify(p));


var student=new Person();
student.gender="Male";
console.log(" s :"+student.gender);
student.talk();
console.log("HHH :"+JSON.stringify(student));
console.log(student);


