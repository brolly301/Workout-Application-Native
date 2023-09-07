export default validation = (workoutData) => {
  const errors = {};

  if (workoutData.name === "") {
    errors.name = "Please enter a name for this routine.";
  }

  if (workoutData.exercises.length < 1) {
    errors.exercises =
      "At least one exercise is required. Please add one below.";
  }

  const invalidExercise = workoutData.exercises.find((exercise) =>
    exercise.sets.some((set) => !set.kg || !set.reps)
  );

  if (invalidExercise) {
    errors.sets = "All weight and reps must be added to complete the workout.";
  }

  return errors;
};
