const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSchema = new Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const TrackSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  trackID: {
    type: String,
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  date: {
    type: String,
  },
  time: {
    type: Number,
  },
  locations: [PointSchema],
});

module.exports = mongoose.model("Track", TrackSchema);
