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
//update basket counts and favorite users
module.exports.baskets = (req,res) => {
  console.log("made it to baskets!!! ");
  console.log("params? ", req.params.id);
  console.log("body? ", req.body);
  const query = {'_id': req.params.id};
  const basketVotes = {userid: req.body.userId};
  const doc = {
            $set: {baskets: req.body.baskets},
            $push: {basketVote: basketVotes}
               };
  const options = {upsert: true};
  Shops.findOneAndUpdate(query, doc, options,
    function(err,shop) {
      if (err) throw err
      console.log("have I updated? ", shop);
    res.json({shops: shop,
              user: req.user});
  });
}

