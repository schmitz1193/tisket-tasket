//ctrls/register.js
"use strict";

const passport = require('passport');

//dependencies
const User = require("../models/users");


module.exports.new = (req, res) => {
  if (req.body.password === req.body.verify) {
    User.findOne({email: req.body.email}, (err, user) => {
      if (err) throw err;

      if (user) {
        // console.log("email exists ", user);
        res.sendStatus(409);
      } else {
        User.create(req.body, (err) => {
          if (err) throw err;
          console.log("created?");
          res.sendStatus(200);
        });
      }
    });
  } else {
    // console.log("req.body.email");   Password
    res.sendStatus(400);
  }
};

