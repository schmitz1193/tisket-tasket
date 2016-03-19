//ctrls/login.js
"use strict";

// const express = require('express');
const passport = require('passport');
// const router = express.Router();

//dependencies
const User = require("../models/users");

//passport file
require('./local');


module.exports.loginUser =
   passport.authenticate('local',
    {
      // failureFlash: 'Incorrect email or password',
      failureRedirect: '/login',
      // successFlash: 'Success!',
      successRedirect: '/shop'
    }
  );


// module.exports.delete = (req,res) => {
//   req.session.regenerate(function(err) {
//     if (err) throw err;

//     res.redirect('/#/login');
//   });
// };



// module.exports.loginUser = (req,res) => {
//     console.log('request? ', req.body.email);
//     User.find((err,allUsersObj) => {
//     if (err) throw err;
//     console.log("allUsersObj ", allUsersObj);
//     res.json(allUsersObj);
//   });
// }
