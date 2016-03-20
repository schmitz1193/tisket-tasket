//ctrls/admin.js
"use strict";

//dependencies
// const request = require("request");
// const express = require('express');
// const router = express.Router();
const Admin = require("../models/shops");

module.exports.new = (req,res) => {
  const adminObj = new Admin({
    company: req.body.company,
    link: req.body.link,
    image: req.body.image,
    baskets: 0,
    basketVote: [],
    commentCount: 0,
    comments: []
  });

  adminObj.save((err, newObj) => {
    console.log("Did I get here?");
    if (err) throw err;
    console.log("newObj ", newObj);
    res.redirect('/#/login');
  });
}

// module.exports.new = (req,res) => {
//   console.log("So now I made it to admin.js ctrls!!!")
//   console.log(req.body);
//   res.redirect('/#/login')
// }

