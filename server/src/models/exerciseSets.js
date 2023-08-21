const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSetsSchema = new Schema({
  exerciseName: {
    type: String,
  },
  sets: [
    {
      set: {
        type: String,
      },
      previous: {
        type: String,
      },
      kg: {
        type: String,
      },
      reps: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("ExerciseSet", ExerciseSetsSchema);
