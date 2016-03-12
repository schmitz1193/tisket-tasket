'use strict';
const express = require('express');
const app = express();

//set route to index page
app.get('/', function (req,res) {
  res.send('Tisket Tasket keep me from the casket!')
});

app.listen(3000);
console.log("port 3000 at your service");
