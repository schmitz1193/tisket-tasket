//ctrls/login.js
"use strict";

const passport = require('passport');

//dependencies
const User = require("../models/users");

// module.exports.new = (req,res) => {
//   const userObj = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     admin: false
//   });

//   userObj.save((err, newObj) => {
//     if (err) throw err;
//     res.send('newOjb');
//   });
// }

// router.get('/register', (req, res) => {
//   res.render('register');
// });

module.exports.new = (req, res) => {
  if (req.body.password === req.body.verify) {
    User.findOne({email: req.body.email}, (err, user) => {
      if (err) throw err;

      if (user) {
        res.send('register', {message: '1'});
      } else {
        User.create(req.body, (err) => {
          if (err) throw err;

          res.send('register', {message: "2"});
        });
      }
    });
  } else {
    res.send('register', {
      email: req.body.email,
      message: '3'});
  }
};

