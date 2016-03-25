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

module.exports.new = (req, res) => {
  if (req.body.password === req.body.verify) {
    User.findOne({email: req.body.email}, (err, user) => {
      if (err) throw err;

      if (user) {
        res.status(200).send({message: '1'});
      } else {
        User.create(req.body, (err) => {
          if (err) throw err;

          res.status(200).send({message: "2"});
        });
      }
    });
  } else {
    res.status(200).send('register', {
      email: req.body.email,
      message: '3'});
  }
};

