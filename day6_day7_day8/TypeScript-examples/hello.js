var Hello = /** @class */ (function () {
    function Hello(_message) {
        this._message = _message;
        console.log("Hello Constructor created..");
    }
    Object.defineProperty(Hello.prototype, "message", {
        get: function () {
            console.log("In getMessage :", this._message);
            return this._message;
        },
        set: function (message) {
            this._message = message;
            console.log("In setMessage :" + message);
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var h = new Hello("hey hi");
h.message = "Hello Students"; //calls setMessage
console.log(h.message);
