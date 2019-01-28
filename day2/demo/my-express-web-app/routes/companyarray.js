var express = require('express');
var router = express.Router();


var users=[
  {id:101,name:'Sachin',email:'Sachin@gmail.com',dob:new Date("31 July,1972")},
  {id:102,name:'Ram',email:'Ram@gmail.com',dob:new Date("15 July,1984")},
  {id:103,name:'Mahesh',email:'Mahesh@gmail.com',dob:new Date("01 July,1982")},
  {id:104,name:'Mohan',email:'Mohan@gmail.com',dob:new Date("11 July,1932")},
  {id:105,name:'Delip',email:'Delip@gmail.com',dob:new Date("21 July,1942")}
];



/* GET all users . */
router.get('/users', function(request, response) {
  response.json(users);
});



/* GET user with id . */
router.get('/users/:id', function(request, response) {
    var id=parseInt(request.params.id);
    var user=users.filter(u=>u.id==id)[0];
    response.json(user);
});

/* DELETE user with id . */
router.delete('/users/:id', function(request, response) {
  var id=parseInt(request.params.id);
  
   //without lamda
   users=users.filter(function(u){
     return u.id!=id;
   })


 // users=users.filter(u=>u.id!=id);


  response.json(users);
});

/* UPDATE user with id . */
router.put('/users/:id', function(request, response) {
  var id=parseInt(request.params.id);
  var user=request.body;
  
  users.forEach((u,i)=>{
    if(u.id==id)
    users[i]=user;
  });
  
  response.json(users);
});


/* UPDATE user with id . */
router.post('/users', function(request, response) {
 var user=request.body;
 users.push(user);
 response.json(users);
});





module.exports = router;
