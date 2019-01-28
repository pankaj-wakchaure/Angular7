var global_num = 12;          //global variable 

class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
      console.log("Local Num "+local_num); 
      this.num_val=345;
   
   } 
} 
console.log("Global num: "+global_num);  
console.log("Static :"+Numbers.sval);   //static variable  
var obj = new Numbers(); 
console.log("Local num: "+obj.num_val); 
obj.storeNum();
console.log("Local num: "+obj.num_val); 















/*
Array Destructuring
Refers to breaking up the structure of an entity. 
TypeScript supports destructuring when used in the context of an array.
*/

var arr:number[] = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)


/*
Array Traversal using for…in loop
One can use the for…in loop to traverse through an array.
*/

var j:any; 
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 