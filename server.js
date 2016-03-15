'use strict';
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;  //set up environment port if none given default to 3000

//test the server set route to index page
// app.get('/', function (req,res) {
//   res.send('Tisket Tasket keep me from the casket!')
// });


//this tells the server where to get the static files--the ones that don't change
app.use(express.static(__dirname + "/public"));



app.listen(PORT, () => {
console.log(`${PORT} at your service. Node.js server started`);
});
