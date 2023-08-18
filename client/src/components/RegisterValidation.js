export default validation = (firstName, lastName, email, password) => {
  const errors = {};

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  if (!firstName) {
    errors.firstName = "First name is required.";
  } else if (!nameRegex.test(firstName)) {
    errors.firstName =
      "First name must not contain numbers or exceed 30 characters.";
  }

  if (!lastName) {
    errors.lastName = "Surname is required.";
  } else if (!nameRegex.test(lastName)) {
    errors.surname =
      "Surname must not contain numbers or exceed 30 characters.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Email format is not valid.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(password)) {
    errors.password =
      "Password must contain at least 8 characters that include a number, 1 special character, 1 uppercase character 1 lowercase character and must not exceed 30 characters.";
  }

  return errors;
};
