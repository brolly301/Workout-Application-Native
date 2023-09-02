const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  id: {
    type: String,
  },
  exerciseID: {
    type: String,
  },
  name: {
    type: String,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "expert"],
  },
  mechanic: {
    type: String || null,
    enum: ["isolation", "compound", null],
  },
  equipment: {
    type: String || null,
    enum: [
      null,
      "medicine ball",
      "dumbbell",
      "body only",
      "bands",
      "kettlebells",
      "foam roll",
      "cable",
      "machine",
      "barbell",
      "exercise ball",
      "e-z curl bar",
      "other",
    ],
  },
  force: {
    type: String || null,
    enum: [null, "static", "pull", "push"],
  },
  category: {
    type: String,
    enum: [
      "powerlifting",
      "strength",
      "stretching",
      "cardio",
      "olympic weightlifting",
      "strongman",
      "plyometrics",
    ],
  },
  primaryMuscles: {
    type: [String],
    enum: [
      "abdominals",
      "abductors",
      "adductors",
      "biceps",
      "calves",
      "chest",
      "forearms",
      "glutes",
      "hamstrings",
      "lats",
      "lower back",
      "middle back",
      "neck",
      "quadriceps",
      "shoulders",
      "traps",
      "triceps",
    ],
  },
  secondaryMuscles: {
    type: [String],
    enum: [
      "abdominals",
      "abductors",
      "adductors",
      "biceps",
      "calves",
      "chest",
      "forearms",
      "glutes",
      "hamstrings",
      "lats",
      "lower back",
      "middle back",
      "neck",
      "quadriceps",
      "shoulders",
      "traps",
      "triceps",
    ],
  },
  instructions: {
    type: [String],
  },
  images: {
    type: [String],
  },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
