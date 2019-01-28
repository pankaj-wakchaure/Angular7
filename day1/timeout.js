//var ts=require("timers");

function welcome(){
    console.log("Welcome To Timer Module");
}

function first(){
    console.log("First");
}

function second(){
    console.log("Second");
}

var timer=setInterval(welcome,1000);
 
setTimeout(release,6000);

function release(){
    clearInterval(timer);
}












