const express     = require('express');
var session       = require('express-session');
const ip          = require('ip');
const web    = express.Router();


web.get('/', function(req, res) {
  console.log("Url " + req.url);
  res.render('web/index', {
    title: 'Jeejee',
  });
});

module.exports = web;
