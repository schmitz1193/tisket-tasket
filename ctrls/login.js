//ctrls/login.js
"use strict";

// const express = require('express');
// const passport = require('passport');
// const router = express.Router();

//dependencies
const User = require("../models/users");

//get all shops
module.exports.post = (req,res) => {
    User.find((err,allUsersObj) => {
    if (err) throw err;
    console.log("allUsersObj ", allUsersObj);
    res.json(allUsersObj);
  });
}


// module.exports.post = (req,res) => {
//    passport.authenticate('local',
//     {
//       failureFlash: 'Incorrect email or password',
//       failureRedirect: '/login',
//       successFlash: 'Success!',
//       successRedirect: '/#/shop'
//     }
//   )
// };

// module.exports.delete = (req,res) => {
//   req.session.regenerate(function(err) {
//     if (err) throw err;

//     res.redirect('/#/login');
//   });
// };

// module.exports = router;

