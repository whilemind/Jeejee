const express     = require('express');
var session       = require('express-session');
const ip          = require('ip');
const customer    = express.Router();


customer.get('/profile', function(req, res) {
  console.log("Url " + req.url);
  res.render('customer/profile', {
    title: 'Jeejee',
  });
});

module.exports = customer;
