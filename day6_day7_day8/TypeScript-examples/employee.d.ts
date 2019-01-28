declare class Employee {
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number);
    showEmpDetails(): void;
}
declare class Manager extends Employee {
    constructor(id: number, name: string, salary: number);
    showEmpDetails(): void;
}
declare let e: Employee;
declare let m: Manager;
