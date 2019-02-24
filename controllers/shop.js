const express     = require('express');
var session       = require('express-session');
const ip          = require('ip');
const shop    = express.Router();

shop.get('/', function(req, res) {
  console.log("Url " + req.url);
  res.render('shop/index', {
    title: 'Jeejee',
  });
});

module.exports = shop;
