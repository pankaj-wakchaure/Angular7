var express = require('express');// imp pckg
var router = express.Router();
var mongoose = require('mongoose');// importing package

/*
use mongoose db 
*/ 

var dbName = "bank";
var connectionString ='mongodb://localhost:27017/'+ dbName;

mongoose.connect(connectionString);
 
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    accno: Number,
    name:String,
    balance: Number,
    doc: Date
});

var Account = mongoose.model('account', accountSchema);

/* GET all accounts listing. */
router.get('/accounts', function(request, response, next) {
   Account.find(function(err, accounts)
   {
       if(err)
            return response.send(err);
        response.json(accounts);
   })
});
 
/* GET accounts with accno with lembda expression*/
router.get('/accounts/:accno', function(request, response, next) {
    var accnoIp = parseInt(request.params.accno);
    
    Account.findOne({accno: accnoIp}, function(err, account)
    {
        if(err)
             return response.send(err);
        response.json(account);
    })
});

/* DELETE accounts with accno. */
router.delete('/accounts/:accno', function(request, response, next) {
    var accnoIp = parseInt(request.params.accno);
    
    Account.remove({accno: accnoIp}, function(err, account)
    {
        if(err)
             return response.send(err);  
        Account.find(function(err, accounts)
             {
                 if(err)
                      return response.send(err);
                  response.json(accounts);
             })     
    })
});


/* Update account with accno. */
router.put('/accounts/:accno', function(request, response, next) {
    var accnoIp = parseInt(request.params.accno);
    
    Account.findOne({accno: accnoIp}, function(err, account)
    {
        if(err)
             return response.send(err);

         for(prop in request.body)
         {
             account[prop]= request.body[prop];
         }

         account.save();

          // return all
        Account.find(function(err, accounts)
        {
            if(err)
                return response.send(err);
            response.json(accounts);
        });
    });
});

/* Add account. */
router.post('/accounts', function(request, response, next) {
         
        var account = new Account(request.body);

        account.save(function(err){
            if(err)
                return response.send(err);
            
            Account.find(function(err, accounts)
            {
               if(err)
                 return response.send(err);
             response.json(accounts);
            });
        });            
});

module.exports = router;
