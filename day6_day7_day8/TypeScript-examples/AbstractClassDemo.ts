 abstract class Employee {
    constructor(public id:number,public name: string) {
    }
    talk(): void {
        console.log("Hello I am  " + this.name+", My Emp Id "+this.id);
    }
}


class Accountant extends Employee {

    constructor(id:number,name: string) {
        super(id,name); // constructors in derived classes must call super()
    }

}


class Programmer extends Employee {

    constructor(id:number,name: string) {
        super(id,name); // constructors in derived classes must call super()
    }

}

class Manager extends Employee {

    constructor(id:number,name: string,public type:string) {
        super(id,name); // constructors in derived classes must call super()
    }

   talk():void{
   super.talk();   
   console.log("Manager type :"+this.type);
   }
     

}


var e=null;

var a=new Accountant(101,"Pradeep");
var m=new Manager(102,"Sachin","AccountManager");
var p=new Programmer(103,"Mahesh");


e=a;
e.talk();
e=m;
e.talk();
e=p;
e.talk()

