var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Instrument = /** @class */ (function () {
    function Instrument() {
    }
    return Instrument;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Piano.prototype.play = function () {
        console.log("Piano is palying  tan tan tan");
    };
    return Piano;
}(Instrument));
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guitar.prototype.play = function () {
        console.log("Guitar is palying  tin tin tin");
    };
    return Guitar;
}(Instrument));
var Flute = /** @class */ (function (_super) {
    __extends(Flute, _super);
    function Flute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flute.prototype.play = function () {
        console.log("Flute is palying  toot toot toot");
    };
    return Flute;
}(Instrument));
var instruments = new Array();
instruments.push(new Flute());
instruments.push(new Guitar());
instruments.push(new Piano());
instruments.push(new Guitar());
instruments.push(new Piano());
instruments.push(new Flute());
instruments.push(new Guitar());
for (var i in instruments) {
    if (instruments[i] instanceof Piano)
        console.log("Piano is stored @ index " + i);
    else if (instruments[i] instanceof Flute)
        console.log("Flute is stored @ index " + i);
    else if (instruments[i] instanceof Guitar)
        console.log("Guitar is stored @ index " + i);
    instruments[i].play();
}
