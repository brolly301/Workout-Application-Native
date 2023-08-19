const mongoose = require("mongoose");
const Exercise = require("../models/exercise");
const exercises = require("./exercises");

const mongoUri =
  "mongodb+srv://brolly301:TrackerApplication@cluster0.8gtx9pb.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database not connected" + err);
  });

const seedDatabase = async () => {
  // await Exercise.deleteMany({});
  await Exercise.insertMany(exercises);
};

seedDatabase().then(() => mongoose.connection.close());
