var express = require('express');
var router = express.Router();
var {
  Foodsave
} = require('../models'); /* GET home page. */
router.get('/', function (req, res, next) {
  res.render('foodsave', {
    food: 'Express'
  });
});
module.exports = router;