var http = require("http");
var url=require("url");


var server=http.createServer(function (request, response) {
   response.end('<h1>Hello World</h1>');
   console.log(request.url);
   var myURL=new url.URL("http://localhost:8081/"+request.url);
console.log("MEthod :"+request.method);
  console.log(myURL.searchParams.get("accno"));
  console.log(myURL.searchParams.get("name"));
  console.log(myURL.searchParams.get("balance"));
  console.log(myURL.searchParams.get("age"));
  console.log(myURL.searchParams.get("city"));
  console.log("=============");
myURL.searchParams.forEach(function(value,name){
console.log(name,"----",value);
});





});


server.listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');