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

  if (!secondaryMuscle) {
    errors.secondaryMuscle = "Secondary Muscle is required.";
  }

  if (!equipment) {
    errors.equipment = "Equipment is required.";
  }

  if (!category) {
    errors.category = "Category is required.";
  }

  return errors;
};
