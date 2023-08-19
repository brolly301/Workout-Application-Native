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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressValidator());

//Routes
const authRoutes = require("./routes/authRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
app.use("/", authRoutes);
app.use("/exercises", exerciseRoutes);

app.get("", requireAuth, (req, res) => {
  res.send(req.body.email);
});
