class Account{

 constructor (public accno?:number,public name?:string, public balance?:number) {
	
	if(accno==undefined && name==undefined && balance==undefined) 
	{	
    this.accno=1234;
	this.name="ramesh";
	this.balance=10000;
	}
	else if(accno!=undefined && name!=undefined)
	{ this.accno=accno;
	  this.name=name;
	  this.balance=0;
	}
    else
	{
	  this.accno=accno;
	  this.name=name;
	  this.balance=balance; 	
	}
}
public toString():string{
	return "["+this.accno+"  "+this.name+"  "+this.balance+"]" +"  "+this.id;
}	
}

let account1=new Account();
let account2=new Account(101,"pradeep",120000);
let account3=new Account(222,"pradeep");
console.log(account1);
console.log(account1.toString());

console.log(account2);
console.log(account2.toString());

console.log(account3);
console.log(account3.toString());

