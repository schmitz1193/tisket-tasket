//ctrls/login.js
"use strict";

//dependencies
const User = require("../models/users");

module.exports.check = (req,res) => {
  User.find(function(err, existing){
    if (err) throw err;
    console.log("this is in the user collecion: ", existing);
    console.log("body email ", req.body.email);
    for (var x = 0; x < existing.length; x++) {
      if (existing.user.email[x] === req.body.email) {
        res.redirect('/#/shop');
      }
    }
    console.log("You do not have an account");
    res.redirect('/#/login');
  });
};




