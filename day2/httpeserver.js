
var http = require("http");


//create server 
var server=http.createServer(function(request,response){
response.end("<h1>Hello World!!!</h1>");
 });



   server.listen(8081,function(){
    console.log("Server listeneing on port 8081");
   });
 

