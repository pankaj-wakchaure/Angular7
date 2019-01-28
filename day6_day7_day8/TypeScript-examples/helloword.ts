
class Book{

    id:number;
    name:string;
    price:number;

    constructor(id?:number,name?:string,price?:number){
     this.id=id;
     this.name=name;
     this.price=price;  
    console.log("Book Constructor executed....")
    }

    show():void{
   console.log("Id :"+this.id);
   console.log("Name :"+this.name);
   console.log("Price :"+this.price);
      }


}


var b1=new Book();
var b2=new Book(101);
var b3=new Book(101,"Java");
var b4=new Book(101,"Java",12000);

b1.show();
b2.show();
b3.show();
b4.show();


