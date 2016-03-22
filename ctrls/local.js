'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.serializeUser(function (user, done) {
  // console.log("am I serialized?");
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  // console.log("am I deserialized?");
  User.findById(id, done);
});

passport.use(new LocalStrategy({
  usernameField: 'email'
  // passwordField: 'password'
  },
  (email, password, done) => {
    console.log("I made it to new local strategy");
    console.log("email ", email);
    console.log("password ", password);
    User.findOne({ email: email }, (err, user) =>{
      if(err) throw err;
      if (user) {
        console.log("autheticating user to password");
        console.log("password?? ", password);
        user.authenticate(password, (err, valid) => {
          if (err) {
            console.log("error with password!");
            throw err;
          }
          if (valid) {
            console.log("VALID");
            return done(null, user);
          } else {
            done();
          }
        });
      } else {
        //makes it here check error msg.
        console.log("DONE?");
        done();
      }
    });
  })
);

