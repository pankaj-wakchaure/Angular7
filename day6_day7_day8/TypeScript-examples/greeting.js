var message1 = "Bye";
var message = "Hi";
var Greeting = (function () {
    function Greeting() {
        this.message = "Hello";
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!! " + this.message);
        console.log("Hello World!!! " + message1);
        console.log("Message :" + message);
        console.log("Message1:" + message1);
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
