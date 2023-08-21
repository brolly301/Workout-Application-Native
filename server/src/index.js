//Packages
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const requireAuth = require("./middlewares/requireAuth");
const expressValidator = require("express-validator");

//DB Connection
const mongoUri =
  "mongodb+srv://brolly301:TrackerApplication@cluster0.8gtx9pb.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Database Connected"))
  .catch((err) =>
    console.log("Database not connected. Check Mongo URI." + err)
  );

app.listen(3000, () => {
  console.log("Listening on Port 3000.");
});

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(expressValidator());

app.use(express.json({ limit: "50mb" }));

//Routes
const authRoutes = require("./routes/authRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const exerciseSets = require("./routes/exerciseSetRoutes");
app.use("/", authRoutes);
app.use("/exercises", exerciseRoutes);
app.use("/workouts", workoutRoutes);
app.use("/exerciseSets", exerciseSets);

app.get("", requireAuth, (req, res) => {
  res.send(req.body.email);
});
