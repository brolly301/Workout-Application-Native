const express = require("express");
const router = express.Router();
const Routine = require("../models/routine");

router.post("/addRoutine", async (req, res) => {
  const routine = new Routine({ ...req.body });
  await routine.save();
  res.send(routine);
});

router.get("/allRoutines", async (req, res) => {
  const routines = await Routine.find({});
  res.send(routines);
});

module.exports = router;
