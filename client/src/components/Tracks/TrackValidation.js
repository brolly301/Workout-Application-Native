export default validation = (name, description) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length > 30) {
    errors.name = "Name must not exceed 30 characters.";
  }

  if (!description) {
    errors.description = "Description is required.";
  } else if (description.length > 100) {
    errors.description = "Description must not exceed 100 characters.";
  }

  return errors;
};
