'use strict';
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;  //set up environment port if none given default to 3000
//this tells the server where to get the static files--the ones that don't change
app.use(express.static(__dirname + "/public"));

//test the server set route to index page
//
// app.get('/', function (req,res) {
//   res.send('help - anybody there?')
// });

// tells the server which template to use as the index & to listen for the get request and log the message in the command prompt
app.post('/login', function(req,res){
  console.log("I received the login request")
  console.log("let's pretend the login is valid!");
  res.redirect('/#/shop');
});




app.listen(PORT, () => {
console.log(`${PORT} at your service. Node.js server started`);
});
