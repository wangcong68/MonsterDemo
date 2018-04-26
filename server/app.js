var express = require('express');
var app = express();
var port = 5757;

app.get('/profile/:id',function(req,res){
  // var responseObject = {
  //   name : "Gavin",
  //   age : '17'
  // }
  // res.send(responseObject);
  res.send("you required a profile pages with the if of"+req.params.id);
});


app.listen(port, function(error){
  if(error){
    console.log('error');
  } else{
    console.log('Server start! Listening on ${port}');
  }
});

console.log("hello gavin");