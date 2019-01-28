var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/*
drop database banking
create database banking

use banking

create table accounts(
    accno int primary key,
    name text,
    balance float,
    doc date
)

insert into accounts values (10, 'Pankaj', 15245.12, '2015-01-02');
insert into accounts values (20, 'Sanket', 22245.12, '2015-02-02');
insert into accounts values (30, 'Sham', 14535.12, '2015-02-02');
insert into accounts values (40, 'Ram', 14445.12, '2015-01-05');

*/

var connection  = mysql.createConnection({
    user:"root",
    password: "password",
    host :"localhost",
    database:"banking"
});


/* GET all accounts listing. */
router.get('/accounts', function(request, response, next) {

    connection.query("select * from accounts", function(err, accounts)
    {
        if(err)
            return response.send("" +err);
        response.json(accounts);
    });

});

 
/* GET accounts with accno with lembda expression*/
router.get('/accounts/:accno', function(request, response, next) {
    var accno = parseInt(request.params.accno);
    
    connection.query("select * from accounts where accno =?",[accno], function(err, accounts)
    {
        if(err)
            return response.send("" +err);
        response.json(accounts[0]);
    });

})[0];


/* DELETE accounts with accno. */
router.delete('/accounts/:accno', function(request, response, next) {
    var accno = parseInt(request.params.accno);
    
    connection.query("delete from accounts where accno =?",[accno], function(err, accounts)
    {
        if(err)
            return response.send("" +err);

        connection.query("select * from accounts", function(err, accounts)
            {
                if(err)
                    return response.send("" +err);
                response.json(accounts);
            });
        
        });
});


/* Update account with accno. */
router.put('/accounts/:accno', function(request, response, next) {
    
    var account = request.body; 

    connection.query("update accounts set name=?, balance=?, doc=? where accno =?",[account.name,account.balance, account.doc, account.accno], function(err, accounts)
    {
        if(err)
            return response.send("" +err);
         
        connection.query("select * from accounts", function(err, accounts)
            {
                if(err)
                    return response.send("" +err);
                response.json(accounts);
            });
    });

});

/* Add account. */
router.post('/accounts', function(request, response, next) {
        var account = request.body;
                
    connection.query("insert into accounts values(?,?,?,?)",[account.accno,account.name,account.balance, account.doc], function(err, accounts)
    {
        if(err)
            return response.send("" +err);
         
        connection.query("select * from accounts", function(err, accounts)
            {
                if(err)
                    return response.send("" +err);
                response.json(accounts);
            });
    });
});

module.exports = router;
