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
      foodKcal: req.body.foodKcal,
      userId: req.user.id,
      moment: moment().format("YYYY-MM-DD"), //11-18-2018
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/:id", isLoggedIn, async (req, res, next) => {
  try {
    await Foodsave.destroy({
      where: { id: req.params.id },
      force: true,
    });

    res.status(200).redirect("/myPage");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
