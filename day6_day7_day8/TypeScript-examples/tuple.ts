var mytuple = [10,"Hello"]; //create a  tuple 
console.log(mytuple[0]) 
console.log(mytuple[1])



//Example: Empty Tuple

var tup = [] 
tup[0] = 12 
tup[1] = 23 

console.log(tup[0]) 
console.log(tup[1])

/*
Tuple Operations
Tuples in TypeScript supports various operations like pushing a new item, removing an item from the tuple, etc.

Example
*/
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
console.log("Items after pop "+mytuple.length)

/*
Updating Tuples
Tuples are mutable which means you can update or change the values of tuple elements.

Example
*/
var mytuple = [10,"Hello","World","typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 "+mytuple[0]) 

//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])

/*
Destructuring a Tuple
Destructuring refers to breaking up the structure of an entity. TypeScript supports destructuring when used in the context of a tuple.

Example
*/
var x="10";
var a =[10,"hello",344,333,444] 

var [b,c]=a.slice(2);

var z=a.slice(2);

console.log(b)    
console.log(c) 
console.log(z) 






