'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const login = require('../ctrls/login');
const register = require('../ctrls/register');
const admin = require('../ctrls/admin');
const shop = require('../ctrls/shops');
const comment = require('../ctrls/comment');


router.post('/login', passport.authenticate('local'), login.loginUser);
// router.delete('/login', login.delete);

router.post('/register', register.new);
router.post('/admin', admin.new);
router.get('/shop', shop.shopping);
router.put('/shop/:id', shop.baskets);
router.put('/comment/:id', comment.save);

module.exports = router;



// company = Company.findById(req.params.id, function(err, company) {
//     //////////
// });
