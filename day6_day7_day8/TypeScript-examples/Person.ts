class Person {
    protected name: string;
    
    protected constructor(theName: string)
    {
    this.name = theName;
    }
}

// Employee can extend Person
class Employee extends Person {
   
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getDetails() {
        return "Hello, my name is "+this.name+" and I work in "+this.department+"";
    }
}

let employee = new Employee("Pradeep", "Training");

console.log(employee.getDetails());
