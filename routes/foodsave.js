const express = require('express');
const path = require('path');
const fs = require('fs');

const { Foodsave , User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.foodsave('/', isLoggedIn , async (req, res, next) => {
  try {
    const foodsave = await foodsave.create({
      food: req.body.food,
    });
  } catch(error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;
