const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
  userID: {
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

module.exports = mongoose.model("Routine", RoutineSchema);
