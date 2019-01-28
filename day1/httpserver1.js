var http=require("http");

var server =http.createServer(function(request,response){
  response.end("HEllo World!!!!");
});

server.listen(1111,function(){
    console.log("Servler listening on port 8081");
});
