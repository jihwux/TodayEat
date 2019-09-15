const express = require('express');
const path = require('path');
const fs = require('fs');

const { Foodsave, User } = require('../models');
const { isNotLoggedIn } = require('./middlewares');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/foodsave', isLoggedIn , async (req, res,  next) => {
  const { food } = req.body;
  try {
     await Foodsave.create({      
      food: req.body.food,
      // userId: req.user.id,
    });
    res.redirect('/');
    return res.render('index', {
      twit: food
    });

  } catch(error) {
    console.error(error);
    next(error);
  }
})




module.exports = router;
