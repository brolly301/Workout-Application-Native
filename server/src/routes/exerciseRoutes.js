const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const { exerciseValidator } = require("../middlewares/validation");

router.get("/allExercises", async (req, res) => {
  const exercises = await Exercise.find({}).limit(10);
  res.send(exercises);
});

router.post("/addExercise", exerciseValidator, (req, res) => {
  const exercise = new Exercise(req.body);
  res.send(exercise);
});

module.exports = router;
