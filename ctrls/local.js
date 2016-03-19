'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.serializeUser(function (user, done) {
  console.log("am I serialized?");
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  console.log("am I deserialized?");
  User.findById(id, done);
});

passport.use(new LocalStrategy(
  // usernameField: 'req.body.email',
  // passwordField: 'req.body.password'
  // },
  // (req, email, password, done) => {
  //   User.findOne({ email: email }, (err, user) => {
  function(email, password, done) {
    console.log("I made it to new local strategy");
    User.findOne({ username: email }, function(err, user) {
      if (err) throw err;

      if (user) {
        user.authenticate(password, (err, valid) => {
          if (err) throw err;

          if (valid) {
            done(null, user);
          } else {
            done();
          }
        });
      } else {
        done();
      }
    });
  })
);

