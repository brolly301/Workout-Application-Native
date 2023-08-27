const express = require("express");
const router = express.Router();
const ExerciseSets = require("../models/exerciseSets");
const { exerciseSetsValidator } = require("../middlewares/validation");

router.post("/addExerciseSets", exerciseSetsValidator, async (req, res) => {
  const exerciseSet = new ExerciseSets({ ...req.body });
  await exerciseSet.save();

  res.send(exerciseSet);
});

router.get("/allExerciseSets", async (req, res) => {
  const exerciseSets = await ExerciseSets.find({});

  res.send(exerciseSets);
});

module.exports = router;
