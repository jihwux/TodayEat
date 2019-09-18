const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Post, User, Foodsave } = require('../models');

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

// router.get('/', (req, res, next) => {
//   res.render('index', {
  
//   user: req.user,
//   loginError: req.flash('loginError'),
// })
// })
router.get('/', (req, res, next) => {
  User.findAndCountAll({
    include: [
    { model: Foodsave, where: { userId: true }}
  ]
  })
    .then((foodsaves) => {
      res.render('index', {
        // title: 'NodeBird',
        foodsave: req.food,
        twit : foodsaves,
        user: req.user,
        loginError: req.flash('loginError'),
      });
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
});


router.get('/mypage', isLoggedIn, (req, res ) => {
  res.render('mypage', {
    title: 'mypage', 
    user : req.user,
    loginError: req.flash('loginError')
  })
})



module.exports = router;
