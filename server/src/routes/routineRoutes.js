const express = require("express");
const router = express.Router();
const Routine = require("../models/routine");
const { routineValidator } = require("../middlewares/validation");
const requireAuth = require("../middlewares/requireAuth");

router.post("/addRoutine", routineValidator, async (req, res) => {
  const routine = new Routine({ ...req.body });
  await routine.save();
  res.send(routine);
});

router.get("/allRoutines", requireAuth, async (req, res) => {
  const routines = await Routine.find({ userID: req.user._id });
  res.send(routines);
});

router.delete("/deleteRoutine/:id", async (req, res) => {
  const routine = await Routine.deleteOne({ _id: req.params.id });
  res.send(routine);
});

router.patch("/editRoutine", async (req, res) => {
  const routine = await Routine.findByIdAndUpdate(req.body.id, { ...req.body });
  res.send(routine);
});

module.exports = router;
