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
            $set: {commentCount: req.body.commentCount},
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

module.exports.delete = (req,res) => {
  console.log("params? ", req.params);

  const query = {_id: req.params.id};
  // doc = {$set: {commentCount: req.body.commentCount},
  //        $pull: { comments: { userId: req.params.userId } } } ;
  // Shops.findOneAndUpdate(query, doc, options,

//   Shops.update({_id: req.params.id},
//   { $pull: { comments: { userId: req.params.userId } } },
//   { safe: true},
//      function(err,shop) {
//       if (err) throw err
//         console.log("I have deleted????");
//       res.json({shops: shop,
//                 user: req.user });
//     }
//   )
}

