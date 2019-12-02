const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const {  User, Foodsave } = require('../models');

const router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => {
  // res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', {
    title: '회원가입 - NodeBird',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});


router.get('/', (req,res) => {
  res.render('index', {
    user: req.user,
    loginError: req.flash('loginError'),    
  });
});



router.get('/myPage', isLoggedIn, (req, res, next) => {
    Foodsave.findAll({
    include: [{
      model: User,
      where: { id: req.user && req.user.id  },      
    }],
  })
    .then((foods) => {
      res.render('myPage', {
        twit : foods,
        user: req.user,
        foodsave : req.food,
        loginError: req.flash('loginError'),
      });
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
});








module.exports = router;
