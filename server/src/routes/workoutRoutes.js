const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
const ExerciseSets = require("../models/exerciseSets");
const { workoutValidator } = require("../middlewares/validation");

router.post("/addWorkout", workoutValidator, async (req, res) => {
  try {
    const workout = new Workout({ ...req.body });
    await workout.save();
    res.send(workout);
  } catch (e) {
    return res.status(422).send(e.message);
  }
});

router.get("/allWorkouts", async (req, res) => {
  const workouts = await Workout.find({});
  res.send(workouts);
});

module.exports = router;
