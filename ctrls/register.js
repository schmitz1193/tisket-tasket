//ctrls/login.js
"use strict";

//dependencies
const User = require("../models/users");

module.exports.new = (req,res) => {
  const userObj = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    admin: true
  });

  userObj.save((err, newObj) => {
    if (err) throw err;
    console.log("newObj ", newObj);
    res.redirect('/#/shop');
  });
}





