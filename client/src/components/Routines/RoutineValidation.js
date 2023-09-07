export default validation = (routineData) => {
  const errors = {};

  if (routineData.name === "") {
    errors.name = "Please enter a name for this routine.";
  }

  if (routineData.exercises.length < 1) {
    errors.exercises =
      "At least one exercise is required. Please add one below.";
  }

  return errors;
};
