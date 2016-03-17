//ctrls/admin.js
"use strict";

//dependencies
// const request = require("request");
// const express = require('express');
// const router = express.Router();
const Admin = require("../models/admin");

module.exports.new = (req,res) => {
  const adminObj = new Admin({
    company: req.body.company,
    link: req.body.link,
    image: req.body.image,
    baskets: 0,
    commentCount: 0
  });

  adminObj.save((err, newObj) => {
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

