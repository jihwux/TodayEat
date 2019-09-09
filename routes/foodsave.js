const express = require('express');
const path = require('path');
const fs = require('fs');

const { Foodsave , User } = require('../models');
const { isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/randfod', isNotLoggedIn , async (req,  next) => {
  const { food  } = req.body;
  try {
     await foodsave.create({
      food 
    });
  } catch(error) {
    console.error(error);
    next(error);
  }
})


module.exports = router;
