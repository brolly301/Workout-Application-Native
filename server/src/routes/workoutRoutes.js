const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");
const ExerciseSets = require("../models/exerciseSets");
const { workoutValidator } = require("../middlewares/validation");
const requireAuth = require("../middlewares/requireAuth");

router.post("/addWorkout", workoutValidator, async (req, res) => {
  try {
    const workout = new Workout({ ...req.body });
    await workout.save();
    res.send(workout);
  } catch (e) {
    console.error(e);
    return res.status(422).send(e.message);
  }
});

router.get("/allWorkouts", requireAuth, async (req, res) => {
  const workouts = await Workout.find({ userID: req.user._id });
  res.send(workouts);
});

router.delete("/deleteWorkout/:id", async (req, res) => {
  const workout = await Workout.deleteOne({ workoutID: req.params.id });
  res.send(workout);
});

router.patch("/editWorkout", workoutValidator, async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(req.body.id, {
    ...req.body,
  });

  res.send(workout);
});

module.exports = router;
