const express = require('express');
const welcome = express.Router();


welcome.get('/',function(req,res){
  res.redirect('/customer/')
});


module.exports = welcome;

