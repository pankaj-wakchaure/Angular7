

class Hello {



constructor(private _message:string){
console.log("Hello Constructor created..")
}

set message(message:string){
this._message=message;
console.log("In setMessage :"+message);
}

get message():string{
console.log("In getMessage :",this._message);
return this._message;
}


}

var h=new Hello("hey hi");

h.message="Hello Students";//calls setMessage

console.log(h.message);












