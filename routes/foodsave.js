const express = require('express');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const {
  Foodsave,
  User
} = require('../models');
const {
  isLoggedIn
} = require('./middlewares');

const router = express.Router();
router.post('/foodsave', isLoggedIn, async (req, res, next) => {


  try {
    await Foodsave.create({
      food: req.body.food,
      userId: req.user.id,
      moment: moment().format("YYYY-MM-DD") //11-18-2018          
      // CreateDate : req.foodsave.CreateDate
      // createdatea: today.getDate()
      // range: [new Date(Date.UTC(2016, 0, 1)), new Date(Date.UTC(2016, 1, 1))]

    });
    // var responseData = {'result' : 'ok', '음식값입니당' : req.body.foods}
    // res.json(responseData);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post('/:id', function (req, res, next) {
  
  Foodsave.destroy({     
         where: { id: req.params.id }
    })
    res.status(200).send( "<script>   location.href = '/myPage' </script>") // 에러 난다..
    .then((result) => {
      res.json(result);
      // res.redirect('/myPage')

        })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// router.post('/abc',  (req, res,  next) => {
//   console.log(req.body.email);
//   console.log("찍히넹");
//   var responseData = {'result' : 'ok', '음식값입니당' : req.body.email}
//   res.json(responseData);
//   // res.render('PaperGame',{  
//   //   abb : 'aa',
//   // })

//   });




module.exports = router;