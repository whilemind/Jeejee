const express     = require('express');
var session       = require('express-session');
const ip          = require('ip');
const customer    = express.Router();


customer.get('/', function(req, res) {
  console.log("Url " + req.url);
  res.render('customer/index', {
    title: 'NIBFlix',
  });
});

module.exports = customer;
