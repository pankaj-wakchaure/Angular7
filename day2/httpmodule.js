var http = require("http");
var URL=require("url").URL;

http.createServer(function (request, response) {

   var url=request.url;
   var myURL=new URL("http://localhost:8081"+url);
   console.log("URL :"+url);
   console.log("MEthod :"+request.method);
   console.log("myURL :"+myURL);

  myURL.searchParams.forEach(function (v,n){
      console.log(n+"=="+v);
  });
  console.log("=============");
  myURL.searchParams.forEach((v,n)=>{
      console.log(n+"=="+v);
  });

  // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   //response.writeHead(200, {'Content-Type':'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<h1>Hello World</h1>');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');