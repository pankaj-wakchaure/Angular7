var express = require('express');
var cookieParser = require('cookie-parser');

var bankingarray = require('./routes/bankingarray');
var bankingmysql = require('./routes/bankingmysql');
var bankingmongodb = require('./routes/bankingmongodb');
var login = require('./routes/login');
var calculate = require('./routes/calculate');

//create server here
var app = express();

//required for reading body request belove two lines
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//search static files in public folder
app.use(express.static('public'));


app.use('/bankingarray', bankingarray);
app.use('/bankingmysql', bankingmysql);
app.use('/bankingmongodb', bankingmongodb);
app.use('/login', login);
app.use('/calculate', calculate);

module.exports = app;
