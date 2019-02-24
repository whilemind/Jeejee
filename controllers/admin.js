const express     = require('express');
var session       = require('express-session');
const ip          = require('ip');
const admin    = express.Router();


admin.get('/', function(req, res) {
  console.log("Url " + req.url);
  res.render('admin/index', {
    title: 'Jeejee',
  });
});

module.exports = admin;
