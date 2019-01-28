

var person={ 
              name:"Pradeep",
              age:35,
              mobiles:["Samsung","Micromax"], 
              dob:new Date("July 31,1982"),
              isEmployed:true,

              talk:function(){
                 console.log("Hello I am "+this.name);
                 console.log("My Age is "+this.age);
                 console.log("My Dob  is "+this.dob);
                 console.log("Am I Employed  "+this.isEmployed);
                 
              },
              
           };

        person.gender="Male";

console.log(person);
console.log("==============");
console.log("person :"+JSON.stringify(person));
person.talk();


