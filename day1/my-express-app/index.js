var express=require("express");

//create server
var server=express();

server.get("/welcome",function(request,response){
response.send("Welcome GET");
});

server.post("/welcome",function(request,response){
    response.send("Welcome POST");
});

server.delete("/welcome",function(request,response){
    response.send("Welcome delete");
});

server.put("/welcome",function(request,response){
    response.send("Welcome PUT");
});
    
server.patch("/welcome",function(request,response){
    response.send("Welcome patch");
});
    

server.head("/welcome",function(request,response){
    response.send("Welcome HEAD");
});
    
server.all("/hello",function(request,response){
    response.send("Hello  : "+request.method);
});
    
server.get("/p*d",function(request,response){
    response.send("Welcome RegEX");
});
    

    


server.listen(1111,function(){
console.log("Server listening on port 111111");
})
