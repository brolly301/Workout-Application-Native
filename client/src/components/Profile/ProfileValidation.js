export default validation = (profileData) => {
  const errors = {};

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (profileData.firstName === "") {
    errors.firstName = "Please enter your first name.";
  }

  if (profileData.lastName === "") {
    errors.lastName = "Please enter your last name.";
  }

  if (profileData.email === "") {
    errors.email = "Please enter an email address.";
  } else if (!emailRegex.test(profileData.email)) {
    errors.email = "Email format is not valid.";
  }

  return errors;
};
