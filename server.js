'use strict';
const express = require('express');
const app = express();

//test the server set route to index page
// app.get('/', function (req,res) {
//   res.send('Tisket Tasket keep me from the casket!')
// });


//this tells the server where to get the static files--the ones that don't change
app.use(express.static(__dirname + "/public"));



app.listen(3000);
console.log("port 3000 at your service");
