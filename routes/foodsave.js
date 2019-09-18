const express = require('express');
const path = require('path');
const fs = require('fs');

const { Foodsave, User } = require('../models');
const { isNotLoggedIn } = require('./middlewares');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/foodsave', isLoggedIn , async (req, res,  next, id) => {
  const { food } = req.body;
  try {
    const foodsave = await Foodsave.create({      
      food: req.body.food,
      userId: req.user.id,
    });
    res.redirect('/');
    return res.render('index', {
      foodsave: food
    });

  } catch(error) {
    console.error(error);
    next(error);
  }
})




module.exports = router;
