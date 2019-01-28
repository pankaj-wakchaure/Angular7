var message1:string="Bye"
var message="Hi";

class Greeting { 
    message="Hello";

   greet():void { 
      console.log("Hello World!!! "+this.message)
      console.log("Hello World!!! "+message1)
      console.log("Message :"+message)
      console.log("Message1:"+message1)
      
      
   } 
} 
var obj = new Greeting(); 
obj.greet();
