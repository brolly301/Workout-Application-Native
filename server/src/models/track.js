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
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
    default: Date.now(),
  },
  locations: [PointSchema],
});

module.exports = mongoose.model("Track", TrackSchema);
