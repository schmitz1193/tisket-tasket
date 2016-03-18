//ctrls/login.js
"use strict";

const passport = require('passport');

//dependencies
const User = require("../models/users");

module.exports.new = (req,res) => {
  const userObj = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    admin: true
  });

  userObj.save((err, newObj) => {
    if (err) throw err;
    console.log("newObj ", newObj);
    res.redirect('/#/shop');
  });
}


// router.get('/register', (req, res) => {
//   res.render('register');
// });

// router.post('/register', (req, res) => {
//   if (req.body.password === req.body.verify) {
//     User.findOne({email: req.body.email}, (err, user) => {
//       if (err) throw err;

//       if (user) {
//         res.redirect('/login');
//       } else {
//         User.create(req.body, (err) => {
//           if (err) throw err;

//           res.redirect('/login');
//         });
//       }
//     });
//   } else {
//     res.render('register', {
//       email: req.body.email,
//       message: 'Passwords do not match'
//     });
//   }
// });


