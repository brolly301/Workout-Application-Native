const express = require("express");
const router = express.Router();
const ExerciseSets = require("../models/exerciseSets");
const { exerciseSetsValidator } = require("../middlewares/validation");
const requireAuth = require("../middlewares/requireAuth");

router.post("/addExerciseSets", exerciseSetsValidator, async (req, res) => {
  const exerciseSet = new ExerciseSets({ ...req.body });
  await exerciseSet.save();

  res.send(exerciseSet);
});

router.get("/allExerciseSets", requireAuth, async (req, res) => {
  const exerciseSets = await ExerciseSets.find({ userID: req.user._id });

  res.send(exerciseSets);
});

module.exports = router;
