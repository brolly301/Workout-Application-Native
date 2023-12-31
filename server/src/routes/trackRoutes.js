const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const Track = require("../models/track");
const { trackValidator } = require("../middlewares/validation");

router.get("/", requireAuth, async (req, res) => {
  const tracks = await Track.find({ userID: req.user._id });
  res.send(tracks);
});

router.post("/", requireAuth, trackValidator, async (req, res) => {
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

router.patch("/editTrack", requireAuth, trackValidator, async (req, res) => {
  const track = await Track.findByIdAndUpdate(req.body.id, {
    ...req.body,
  });

  res.send(track);
});

module.exports = router;
