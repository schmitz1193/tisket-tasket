//ctrls/comment.js
"use strict";

//dependencies
// const request = require("request");
// const express = require('express');
// const router = express.Router();
const Shops = require("../models/shops");

//update basket counts and favorite users
module.exports.save = (req,res) => {
  const query = {'_id': req.params.id};
  const comment = {userId: req.body.userId, firstName: req.body.author, text: req.body.text};
  const doc = {
            $push: {comments: comment}
               };
  const options = {new: true};
  Shops.findOneAndUpdate(query, doc, options,
    function(err,shop) {
      if (err) throw err
      console.log("have I updated? ", shop);
    res.json({shops: shop,
              user: req.user});
  });
}

module.exports.update = (req,res) => {
  console.log("text to update.. ", req.body.text);
  // Shops.update({'comments._id': req.params.id},
  // { $set: { 'comments.$.text': req.body.text} },
  //    function(err,shop) {
  //     if (err) throw err
  //       console.log("updated?", shop);
  //     res.json({shops: shop,
  //               user: req.user });
  //   }
  // )
}

module.exports.delete = (req,res) => {
  console.log("params? ", req.params);

  // Shops.update({_id: req.params.id},
  // { $pull: { comments: { userId: req.params.userId } } },
  // { safe: true},
  //    function(err,shop) {
  //     if (err) throw err
  //       console.log("I have deleted????");
  //     res.json({shops: shop,
  //               user: req.user });
  //   }
  // )
}

