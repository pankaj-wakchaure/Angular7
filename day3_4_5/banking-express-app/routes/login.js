var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var u=req.query.username;
    var p=req.query.password;
    res.send(" GET :Hello "+u+"!!! Your password is:"+p);
});


/* GET home page. */
router.post('/', function(req, res, next) {
    var u=req.body.username;
    var p=req.body.password;
    res.send(" POST :Hello "+u+"!!! Your password is:"+p);
});


module.exports = router;
