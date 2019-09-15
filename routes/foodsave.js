const express = require('express');
const path = require('path');
const fs = require('fs');

const { Foodsave, User } = require('../models');
const { isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/foodsave', isNotLoggedIn , async (req, res,  next) => {
  // const { food } = req.body;
  try {
     await Foodsave.create({      
      food: req.body.food,
      userId: req.user.id,

    });
    res.redirect('/');
  } catch(error) {
    console.error(error);
    next(error);
  }
})




module.exports = router;
