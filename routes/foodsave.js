const express = require("express");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

const { Foodsave, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();
router.post("/foodsave", isLoggedIn, async (req, res, next) => {
  try {
    await Foodsave.create({
      food: req.body.food,
      userId: req.user.id,
      moment: moment().format("YYYY-MM-DD") //11-18-2018
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/:id", function(req, res, next) {
  Foodsave.destroy({
    where: { id: req.params.id }
  });
  res
    .status(200)
    .send("<script>   location.href = '/myPage' </script>") // 에러 난다..
    .then(result => {
      res.json(result);
      // res.redirect('/myPage')
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
