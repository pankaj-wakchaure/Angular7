var express=require("express");
var bodyParser=require("body-parser");
//create server
var server=express();

//static resource handling
server.use(express.static("public")); 
server.use(bodyParser.urlencoded({extended:false}));

server.get("/login",function(request,response){
    var f=request.query.fname;
    var l=request.query.lname;
  
response.send("Fname :"+f+"Lname :"+l);

});

server.post("/login",function(request,response){
    var f=request.body.fname;
    var l=request.body.lname;
  
response.send("Fname :"+f+"Lname :"+l);

});





server.listen(8081,function(){
    console.log("Servler listens on port 8081");
})




