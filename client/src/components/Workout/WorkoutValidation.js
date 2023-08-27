export default validation = (workoutData) => {
  const errors = {};

  console.log(workoutData);

  if (workoutData.name === "") {
    errors.name = "Name is required.";
  }

  if (workoutData.exercises.length < 1) {
    errors.exercises = "At least one exercise is required.";
  }

  const invalidExercise = workoutData.exercises.find((exercise) =>
    exercise.sets.some((set) => !set.kg || !set.reps)
  );

  if (invalidExercise) {
    errors.sets = "Weight and reps must be added in to complete the workout.";
  }

  return errors;
};
