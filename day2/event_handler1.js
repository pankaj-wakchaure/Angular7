var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);
eventEmitter.addListener('connection', listner2);

// Bind the connection event with the listner2 function
eventEmitter.on('connection',listner1);
eventEmitter.on('connection',listner2);

eventEmitter.emit("connection");
eventEmitter.removeListener("connection",listner1);

var eventListeners =
events.EventEmitter.listenerCount(eventEmitter,'connection');


console.log(eventListeners + 
    " Listner(s) listening to connection event");

console.log("Program Ended.");