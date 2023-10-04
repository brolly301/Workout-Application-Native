export default validation = (name, locations) => {
  const errors = {};

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length > 30) {
    errors.name = "Name must not exceed 30 characters.";
  }

  if (!locations || !locations.length) {
    errors.locations = "You must begin your run to proceed.";
  }

  return errors;
};
