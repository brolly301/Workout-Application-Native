const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const UserExercise = require("../models/userExercise");
const { exerciseValidator } = require("../middlewares/validation");
const requireAuth = require("../middlewares/requireAuth");

router.get("/allExercises", async (req, res) => {
  const exercises = await Exercise.find({}).limit(10);
  const userExercises = await UserExercise.find({
    userID: "64ef991f3c7f0cac474bf84d",
  });

  const allExercises = [...exercises, ...userExercises];
  const sortBy = allExercises.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  res.send(sortBy);
});

router.post("/addExercise", exerciseValidator, async (req, res) => {
  const exercise = new UserExercise(req.body);
  await exercise.save();
  res.send(exercise);
});

module.exports = router;
