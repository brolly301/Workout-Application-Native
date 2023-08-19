const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");

router.get("/allExercises", async (req, res) => {
  const exercises = await Exercise.find({});
  res.send(exercises);
});

module.exports = router;
