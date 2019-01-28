var express = require('express');
var router = express.Router();

var counter;

router.get('/', function(request, response) { 
    
if(request.cookies.counter){
counter=parseInt(request.cookies.counter);
counter++;
response.cookie("counter",""+counter,{expires:new Date("July 31,2019")});
}
else{
response.cookie("counter","1",{ expires:new Date("July 31,2019")});
}

if(counter>=3)
response.send("Hello user you r eligible for prize of Rs "+(counter*1000)+"/-");
else
response.send("Welcome To Cookie Demo  "+counter);
});

module.exports = router;

