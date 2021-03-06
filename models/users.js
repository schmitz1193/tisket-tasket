//models/user.js schema for a new user

"use strict";
const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

const BCRYPT_DIFFICULTY = 11;

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  admin: Boolean
  });

UserSchema.methods.authenticate = function (password, cb) {
  console.log(password, this.password)
  bcrypt.compare(password, this.password, cb);
};

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, BCRYPT_DIFFICULTY, (err, hash) => {
    if (err) throw err;

    this.password = hash;
    next();
  });
});


module.exports = mongoose.model('Users', UserSchema);


