//ctrls/comment.js
"use strict";
const Shops = require("../models/shops");

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
      res.json({shops: shop,
                user: req.user});
  });
}

module.exports.update = (req,res) => {
  console.log("text to update.. ", req.body.text);
  Shops.update({'comments._id': req.params.id},
  { $set: { 'comments.$.text': req.body.text} },
     function(err,shop) {
      if (err) throw err
      res.sendStatus(200)
    }
  )
}

module.exports.delete = (req,res) => {
  console.log("params? ", req.params);
  Shops.update({_id: req.params.id},
  { $pull: { comments: { userId: req.params.userId } } },
  { safe: true},
     function(err,shop) {
      if (err) throw err
      res.sendStatus(200)
    }
  )
}

