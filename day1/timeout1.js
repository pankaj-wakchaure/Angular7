
timer=setInterval(welcome,1000);
 


 //console.log(timer);
 
setTimeout(release,5000);

function release(){
    clearInterval(timer);
}

function first(){
    console.log("First");
}

function second(){
    console.log("Second");
}

function welcome(){
    console.log("Welcome To Timer Module");
}