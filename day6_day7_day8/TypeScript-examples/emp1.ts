class Emp1{

constructor(public id:number,public name:String){}
constructor(public id:number,public name:String,public salary:number){}

}

let e1=new Emp1(101,"A");
let e2=new Emp1(101,"A",12000);


console.log(e1.id+"  "+e1.name);
console.log(e2.id+"  "+e2.name+"  "+e2.salary);

