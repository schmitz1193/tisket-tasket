'use strict';

const express = require('express');
const router = express.Router();

const login = require('../ctrls/login');
const register = require('../ctrls/register');
const admin = require('../ctrls/admin');
// const quotes = require('./shop');
// const transaction = require('./comment');

router.post('/login', login.check);
router.post('/register', register.new);
router.post('/admin', admin.new);
// router.use(shop);
// router.use(comment);

module.exports = router;



// company = Company.findById(req.params.id, function(err, company) {
//     //////////
// });
