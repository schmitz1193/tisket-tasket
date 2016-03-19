'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/users');

passport.serializeUser(function (user, done) {
  console.log("am I serialized?");
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  console.log("am I deserialized?");
  User.findById(id, done);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
//  passReqToCallback: true
  },
  (email, password, done)=>{
    console.log("I made it to new local strategy");
    console.log("email ", email);
    console.log("password ", password);
    User.findOne({ email: email }, (err, user) =>{
      if(err) throw err;
      // if (!user) {
      //   console.log("made it to no email?"); //WORKs
      //   return done(null, false, {message: "Email Invalid"});
      // }
      if (user) {
        console.log("autheticating user to password");
        console.log("password?? ", password);
        //this is where i loose it!--does not like user-but has password
        // user.authenticate(password, (err, valid) => {
    User.findOne({ password: password }, (err, user) =>{
          if (err) throw err;
          //if (valid) {
          if (user) {
            console.log("the password valid?");
            done(null, user);
            console.log("user ", user);
          } else {
            console.log("the password is invalid");
            console.log("user is null ", user);
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

