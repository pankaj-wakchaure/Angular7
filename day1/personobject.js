
var person=new Object();

              person.name="Pradeep";
              person.age=35;

              person.talk=function(){
                 console.log("Hello I am "+this.name);
                 console.log("My Age is "+this.age);
           
              } 
              
              person.toString=function(){
                  return this.name+" "+this.age;
              }
      

console.log(person);
console.log(person.toString());
console.log(" "+person);
console.log(JSON.stringify(person));


