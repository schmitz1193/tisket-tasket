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

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  function(email, password, done) {
    console.log("I made it to new local strategy");
    console.log("email ", email);
      console.log("password ", password);
    User.findOne({ email: email }, function(err, user) {
      if (err) throw err;

      if (user) {
        console.log("autheticating user to password");
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

