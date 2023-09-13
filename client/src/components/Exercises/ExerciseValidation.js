export default validation = (
  name,
  primaryMuscle,
  secondaryMuscle,
  equipment,
  category
) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  }

  if (!primaryMuscle) {
    errors.primaryMuscle = "Primary Muscle is required.";
  }

  return errors;
};
