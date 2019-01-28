var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log('Drive a car......');
    };
    return Car;
}(Vehicle));
var Aeroplane = (function (_super) {
    __extends(Aeroplane, _super);
    function Aeroplane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aeroplane.prototype.drive = function () {
        console.log('Drive a Aeroplane......');
    };
    Aeroplane.prototype.fly = function () {
        console.log("Fly Aeroplane.....");
    };
    return Aeroplane;
}(Vehicle));
var v = null;
var c = new Car();
var a = new Aeroplane();
v = c;
v.drive();
if (v instanceof Aeroplane)
    v.fly();
v = a;
v.drive();
if (v instanceof Aeroplane)
    v.fly();
