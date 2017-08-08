//Architect will resolve dependencies and will provide Order and User model through imports
const express = require('express');
module.exports = function (options, imports, register) {

  var router = express.Router();
  router.post('', require('./src/create-order')(options, imports));
  router.get('', require('./src/get-order')(options, imports));

  try {
    register(null, {
      orderRoutes: router
    });
  } catch (err) {
    register(err);
  }
};
