export default validation = (routineData) => {
  const errors = {};

  if (routineData.name === "") {
    errors.name = "Name is required.";
  }

  if (routineData.exercises.length < 1) {
    errors.exercises = "At least one exercise is required.";
  }

  return errors;
};
