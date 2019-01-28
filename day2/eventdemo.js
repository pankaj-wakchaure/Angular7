var events=require("events");

var emitter=new events.EventEmitter();

emitter.on("connect",function(){

    console.log("Connection established...");
    emitter.emit("data");
});


emitter.addListener("data",function(){
console.log("Data Received From Client...");
});



emitter.emit("connect"); //fire the event

console.log("End of Programmm");


