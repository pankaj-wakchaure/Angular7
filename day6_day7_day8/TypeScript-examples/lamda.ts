
var foo1 =x=> 10 + x 
var foo2 = (x)=>10 + x 
var foo3 = (x:number)=> 10 + x
var foo4 = (x:number)=> {return (10 + x)}


var disp1 =()=> console.log("Function invoked"); 

var display = x=> { console.log("The function got "+x) } 

var func = (x)=> { 
   if(typeof x=="number")  
      console.log(x+" is numeric") 
   else if(typeof x=="string")  
      console.log(x+" is a string") 
    } 
  
console.log(foo1(100))//outputs 110 
console.log(foo2(100))//outputs 110 
console.log(foo3(100))//outputs 110 
console.log(foo4(100))//outputs 110 
display(12)
disp1();
func(12) 
func("Tom")

