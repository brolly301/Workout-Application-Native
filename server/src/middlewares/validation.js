const errors = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};

exports.registerValidator = (req, res, next) => {
  const nameRegex = /^[a-zA-Z]{1,30}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,20}$/;

  req.check("firstName", "First Name is required!").notEmpty();
  req.check("firstName", "First Name incorrect format").matches(nameRegex);

  req.check("lastName", "Last Name is required!").notEmpty();
  req.check("lastName", "Last Name incorrect format").matches(nameRegex);

  req.check("email", "Email is required").notEmpty();
  req.check("email", "Email incorrect format").matches(emailRegex);

  req.check("password", "Password is required").notEmpty();
  req.check("password", "Password incorrect format").matches(passwordRegex);

  errors(req, res, next);
};

exports.workoutValidator = (req, res, next) => {
  req.check("name", "Workout name is required").notEmpty();

  req.check("exercises", "At least one exercise is required").notEmpty();

  req.check("exercises.*.sets.*.kg", "weight must not be empty").notEmpty();

  req.check("exercises.*.sets.*.reps", "Reps must not be empty").notEmpty();

  errors(req, res, next);
};

exports.exerciseSetsValidator = (req, res, next) => {
  req.check("exerciseName", "Exercise name is required.").notEmpty();

  req.check("sets.*.kg", "Weight must not be empty").notEmpty();

  req.check("sets.*.reps", "Reps must not be empty").notEmpty();

  errors(req, res, next);
};

exports.exerciseValidator = (req, res, next) => {
  req.check("name", "Exercise name is required.").notEmpty();

  req.check("primaryMuscle", "Primary Muscle must not be empty").notEmpty();

  req
    .check("secondaryMuscle", "Secondary Muscle must not be empty.")
    .notEmpty();

  req.check("equipment", "Equipment must not be empty.").notEmpty();

  req.check("category", "Category must not be empty.").notEmpty();

  errors(req, res, next);
};

exports.routineValidator = (req, res, next) => {
  req.check("name", "Workout name is required").notEmpty();

  req.check("exercises", "At least one exercise is required").notEmpty();

  errors(req, res, next);
};
