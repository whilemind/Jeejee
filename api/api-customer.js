const express     = require('express');
const apiCustomer = express.Router();


apiCustomer.get('/', function(request, response) {
  let result = {
    status: 'success',
    message: 'Successfully done.'
  };
  response.send(result);
});


module.exports = apiCustomer;