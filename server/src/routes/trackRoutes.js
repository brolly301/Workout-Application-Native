const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const Track = require("../models/track");

router.get("/", requireAuth, async (req, res) => {
  const tracks = await Track.find({ userID: req.user._id });
  res.send(tracks);
});

router.post("/", requireAuth, async (req, res) => {
  const { name, locations } = req.body;

  console.log(req.body);

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide a name, description and locations" });
  }
  try {
    const track = new Track({ ...req.body, userID: req.user._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
    console.log(err.message);
  }
});

router.delete("/:id", requireAuth, async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.send({ message: "Track deleted" });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.patch("/", requireAuth, async (req, res) => {
  try {
    await Track.findByIdAndUpdate(req.body.id, { ...req.body });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
