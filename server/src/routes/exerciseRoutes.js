const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const UserExercise = require("../models/userExercise");
const { exerciseValidator } = require("../middlewares/validation");
const requireAuth = require("../middlewares/requireAuth");

router.get("/allExercises", requireAuth, async (req, res) => {
  const exercises = await Exercise.find({});
  const userExercises = await UserExercise.find({
    userID: req.user._id,
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

router.patch("/editExercise", exerciseValidator, async (req, res) => {
  try {
    const exercise = await UserExercise.findByIdAndUpdate(req.body.id, {
      ...req.body,
    });

    res.send(exercise);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteExercise/:id", async (req, res) => {
  const exercise = await UserExercise.deleteOne({ exerciseID: req.params.id });
  res.send(exercise);
});

module.exports = router;
