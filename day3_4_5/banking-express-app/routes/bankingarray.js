var express = require('express');
var router = express.Router();

accounts = [
    {accno:10, name: 'pankaj w', balance: 12345, doc: new Date()},
    {accno:20, name: 'sanket s', balance: 22335, doc: new Date()},
    {accno:30, name: 'nilesh m', balance: 23345, doc: new Date()},
    {accno:40, name: 'ram r', balance: 44332, doc: new Date()},
    {accno:50, name: 'piyush b', balance: 32345, doc: new Date()},
];

/* GET all accounts listing. */
router.get('/accounts', function(request, response, next) {
  response.json(accounts);
});


// /* GET accounts with accno. */
// router.get('/accounts/:accno', function(request, response, next) {
//     var accno = parseInt(request.params.accno);

//     var account = accounts.filter(function(account,index){
//         return account.accno ==accno;
//     })
//   response.json(account);
// })[0];


/* GET accounts with accno with lembda expression*/
router.get('/accounts/:accno', function(request, response, next) {
    var accno = parseInt(request.params.accno);

    var account = accounts.filter( x=> x.accno==accno)
  response.json(account);
})[0];


/* DELETE accounts with accno. */
router.delete('/accounts/:accno', function(request, response, next) {
    var accno = parseInt(request.params.accno);

     accounts = accounts.filter(function(account,index){
        return account.accno !=accno;
    })
  response.json(accounts);
});


/* Update account with accno. */
router.put('/accounts/:accno', function(request, response, next) {
    var accno = parseInt(request.params.accno);

    var account = request.body;

    accounts.map(function(acc,index){
        if(acc.accno==accno)
        {
            accounts[index] = account;
        }
    });
     
  response.json(accounts);
});

/* Add account. */
router.post('/accounts', function(request, response, next) {
        var account = request.body;
        accounts.push(account);
        response.json(accounts);
});

module.exports = router;
