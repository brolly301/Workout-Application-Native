const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
const ExerciseSets = require("../models/exerciseSets");

router.post("/addWorkout", async (req, res) => {
  const workout = new Workout({ ...req.body });
  await workout.save();

  res.send(workout);
});

router.get("/allWorkouts", async (req, res) => {
  const workouts = await Workout.find({});
  res.send(workouts);
});

module.exports = router;
