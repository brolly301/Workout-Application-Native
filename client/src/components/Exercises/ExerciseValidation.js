export default validation = (name, primaryMuscle) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  }

  if (!primaryMuscle) {
    errors.primaryMuscle = "Primary Muscle is required.";
  }

  return errors;
};
