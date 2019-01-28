
var http = require("http");
const URL = require("url").URL;

http.createServer(function(request,response){
 
    var newURL=new URL("http://localhost:8081/"+request.url);
    console.log("newURL :"+newURL);
      
    newURL.searchParams.forEach(function(v,n){
    console.log(n,"--",v);
    });


    response.end("<h1>Hello World!!!</h1>"+newURL.searchParams);
 
}
).listen(8081,function(){
    console.log("Server listeneing on port 8081");
 });
 

