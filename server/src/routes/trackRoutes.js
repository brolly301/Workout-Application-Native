const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const Track = require("../models/track");

router.use(requireAuth);

router.get("/", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send(tracks);
});

router.post("/", async (req, res) => {
  const { name, locations } = req.body;

  console.log(req.body);

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide a name and locations" });
  }
  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
    console.log(err.message);
  }
});

module.exports = router;
