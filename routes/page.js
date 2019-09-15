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

router.get('/', (req, res, next) => {
  Post.findAll({
    include: {
      model: User,
      attributes: ['id', 'nick'],
    },
    order: [['createdAt', 'DESC']],
  })
    .then((food) => {
      res.render('index', {
        title: 'NodeBird',
        twit: food,
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

router.get('/ajax', function(req, res, next){
  res.render('ajax', {
    be : req.alldata
  })
}) 




//mypage로 바꿔야함 ajax를 mypage에서 렌더를 해야..
module.exports = router;
