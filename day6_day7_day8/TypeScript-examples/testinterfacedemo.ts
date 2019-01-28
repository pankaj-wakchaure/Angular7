abstract class Vehicle{

abstract drive():void;

}

interface Flyable{
fly():void;
}

class Car extends Vehicle{

    drive():void{
console.log('Drive a car......');
    }
}

class Aeroplane extends Vehicle implements Flyable{

    drive():void{
console.log('Drive a Aeroplane......');
    }
   fly():void{
       console.log("Fly Aeroplane.....");
   }

}



var v=null;

var c=new Car();

var a=new Aeroplane();

v=c;

v.drive();


if (v instanceof Aeroplane)
    v.fly();

v=a;

v.drive();

if (v instanceof Aeroplane)
    v.fly();















