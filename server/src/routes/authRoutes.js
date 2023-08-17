const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { registerValidator } = require("../middlewares/validation");

router.post("/register", registerValidator, async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(403).json({
      error: "Email already taken.",
    });
  }

  const user = new User(req.body);
  await user.save();
  const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
  res.status(201).json({
    message: "Sign up successful.",
    token,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide Email and Password" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "Invalid Email or Password" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid Email or Password" });
  }
});

module.exports = router;
