class Book{
private id:number;
private name:string;
private price:number;

constructor();
constructor(id:number,name:string,price:number);

public constructor(id?:number,name?:string,price?:number){


if(id==undefined && name==undefined && price==undefined)
{
this.id=101;
this.name="Angular2";
this.price=12000.00;
console.log("Default Constructor.....");
return;
}

this.id=id;
this.name=name;
this.price=price;
console.log("Parameterised constructor executed..")
}
public showDetails():void{
console.log("Id   :"+this.id);
console.log("Name :"+this.name);
console.log("Price :"+this.price);
}

}


let b1=new Book();
b1.showDetails();

let b2=new Book(23456,"Hibernate",12000.00);
b2.showDetails();

console.log("=========================");

let books:Array<Book>=[new Book(1,"A",1000),new Book(2,"B",2000),new Book(3,"C",3000),];


books.push(new Book(4,"C",4000));

books.pop();

console.log("BOOK Details");
console.log("===================")

for(var i in books)
books[i].showDetails();









