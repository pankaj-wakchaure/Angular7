var express=require("express");

//create server
var server=express();


server.get("/welcome",function(request,response){
    response.send("Welcome GET");
});
    
server.post("/welcome",function(request,response){
    response.send("Welcome POST");
});


server.put("/welcome",function(request,response){
    response.send("Welcome PUT");
});

server.delete("/welcome",function(request,response){
    response.send("Welcome DELETE");
});


server.head("/welcome",function(request,response){
    response.send("Welcome HEAD");
});

server.patch("/welcome",function(request,response){
    response.send("Welcome PATCH");
});

server.get("/ab*e",function(request,response){
    response.send("Welcome GET REGEX");
});

server.all("/hello",function(request,response){
    response.send("Hello "+request.method);
});





server.listen(8081,function(){
    console.log("Servler listens on port 8081");
})




