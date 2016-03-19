//ctrls/shops.js
"use strict";

//dependencies
// const request = require("request");
// const express = require('express');
// const router = express.Router();
const Shops = require("../models/shops");


//get all shops
module.exports.shopping = (req,res) => {
    Shops.find((err,allShopsObj) => {
    if (err) throw err;
    console.log("allShopsObj ", allShopsObj);
    console.log("users?? ", req.user);
    res.json({shops: allShopsObj,
              user: req.user});
  });
}

// module.exports.new = (req,res) => {
//   console.log("So now I made it to admin.js ctrls!!!")
//   console.log(req.body);
//   res.redirect('/#/login')
// }

