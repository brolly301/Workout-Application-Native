const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  userID: {
    type: String,
  },
  workoutID: {
    type: String,
  },
  routineID: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: Number,
  },
  exercises: [
    {
      exerciseID: {
        type: String,
      },
      name: {
        type: String,
      },
      category: {
        type: String,
      },
      level: {
        type: String,
      },
      notes: {
        type: String,
      },
      sets: [
        {
          setID: {
            type: String,
          },
          set: {
            type: Number,
          },
          previous: {
            type: String,
          },
          kg: {
            type: Number,
          },
          reps: {
            type: Number,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Workout", WorkoutSchema);
