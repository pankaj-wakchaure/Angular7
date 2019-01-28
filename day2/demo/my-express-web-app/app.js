var express = require('express');
var bodyParser=require("body-parser");

var indexRouter = require('./routes/index');
var companyarray = require('./routes/companyarray');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', indexRouter);
app.use('/companyarray', companyarray);

module.exports = app;
