'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.serializeUser(function (user, done) {
  // console.log("am I serialized?");
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  // console.log("am I deserialized?");
  User.findById(id, done);
});

passport.use(new LocalStrategy({
  usernameField: 'email'
  },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) =>{
      if(err) throw err;
      if (user) {
        user.authenticate(password, (err, valid) => {
          if (err) {
            console.log("error witin passport!");
            throw err;
          }
          if (valid) {
            console.log('----user-->', user)
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

