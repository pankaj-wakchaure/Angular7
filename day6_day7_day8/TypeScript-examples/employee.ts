class Employee{
	public id:number;
	public name:string;
	public salary:number;

	public constructor (id:number,name:string,salary:number){
    this.id=id;
    this.name=name;
    this.salary=salary;
	}

       public showEmpDetails(){
       console.log("id :"+this.id+" ,Name :"+this.name+",Salary :  "+this.salary);  
       } 
}


class Manager  extends Employee{

constructor(id:number,name:string,salary:number)	
{
super(id,name,salary);	
}

       showEmpDetails(){
       console.log("id :"+this.id+" ,Name :"+this.name+",Salary :  "+this.salary);  
       } 

}


let e=new Employee(101,"Amol",12000.00);
e.showEmpDetails();

let m=new Manager(102,"Sachin",12456.00);
m.showEmpDetails();


e=m;

e.showEmpDetails();

