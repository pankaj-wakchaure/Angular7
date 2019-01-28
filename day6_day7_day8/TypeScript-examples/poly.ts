function disp(s1:string):void; 
function disp():void; 
function disp(n1:number,s1:string):void; 


function disp(x?:any,y?:any):void { 
 
   
    
   if(x!=undefined)
   console.log(x); 
   if(y!=undefined)
   console.log(y); 
     


} 

disp("abc")
disp("111") 
disp(1,"xyz");
disp();