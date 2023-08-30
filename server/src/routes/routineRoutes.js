const express = require("express");
const router = express.Router();
const Routine = require("../models/routine");
const { routineValidator } = require("../middlewares/validation");

router.post("/addRoutine", routineValidator, async (req, res) => {
  const routine = new Routine({ ...req.body });
  await routine.save();
  res.send(routine);
});

router.get("/allRoutines", async (req, res) => {
  const routines = await Routine.find({});
  res.send(routines);
});

router.delete("/deleteRoutine/:id", async (req, res) => {
  const routine = await Routine.deleteOne({ _id: req.params.id });
  res.send(routine);
});

module.exports = router;
