const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserExerciseSchema = new Schema({
  userID: {
    type: String,
  },
  name: {
    type: String,
  },
  level: {
    type: String,
  },
  mechanic: {
    type: String,
  },
  equipment: {
    type: String,
  },
  force: {
    type: String,
  },
  category: {
    type: String,
  },
  primaryMuscle: {
    type: String,
  },
  secondaryMuscle: {
    type: String,
  },
  instructions: {
    type: [String],
  },
  images: {
    type: [String],
  },
});

module.exports = mongoose.model("UserExercise", UserExerciseSchema);
