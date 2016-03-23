//ctrls/login.js
"use strict";

// const express = require('express');
const passport = require('passport');
// const router = express.Router();

//dependencies
const User = require("../models/users");

//passport file
require('./local');


module.exports.loginUser = function(req, res) {
  console.log('status? ');
  res.sendStatus(200);
}

module.exports.logout = function(req, res) {
  req.session.regenerate(function(err) {
    if (err) throw err;
    console.log('made it to session regenerate');
    res.sendStatus(200);
  });
}


