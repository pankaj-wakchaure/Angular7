import {IShape} from "./IShape";
import {Circle} from "./Circle";
import {Triangle} from "./Triangle";


var shape:IShape=null;

var c:Circle=new Circle();
var t:Triangle=new Triangle();


shape=c;
shape.draw();

shape=t;
shape.draw();


