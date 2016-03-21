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
    image: '../images/BasketWeavingSupplies.png',
    baskets: 0,
    basketVote: [],
    commentCount: 0,
    comments: []
  });

  adminObj.save((err, newObj) => {
    if (err) throw err;
    console.log("newObj ", newObj);
    res.send(newObj);
  });
}


