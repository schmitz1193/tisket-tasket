//models/user.js schema for a new user

"use strict";
const mongoose = require("mongoose");

module.exports = mongoose.model("users", mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
  }));


