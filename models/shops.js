//models/admin.js schema for a new shop
"use strict";
const mongoose = require("mongoose");

module.exports = mongoose.model("shops", mongoose.Schema({
  company: String,
  link: String,
  image: String,
  baskets: Number,
  basketVote: [{userId: String}],
  commentCount: Number,
  comments: [{userId: String, firstname: String, text: String}]
  }));


