var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(request, response, next) {


    var a=parseInt(request.body.a);
    var b=parseInt(request.body.b);
    var action=request.body.action;
    var result="";

    if(action=="Add") result=""+(a+b);
    else if(action=="Sub") result=""+(a-b);
    else if(action=="Mul") result=""+(a*b);
    else if(action=="Div") result=""+(a/b);
    else if(action=="Mod") result=""+(a%b);
    

    response.send("Result :"+result);

});

module.exports = router;
