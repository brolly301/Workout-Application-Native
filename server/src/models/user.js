const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: {
    type: "String",
    unique: true,
  },
  password: {
    type: "String",
  },
});

//pre is applied to the data before its inserted into the db
UserSchema.pre("save", function (next) {
  const user = this;
  //If the user is logging in for example don't re-hash or salt
  if (!user.isModified) {
    return next();
  }

  //10 references the complexity of the salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      //assigning the password field to the hashed key
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

module.exports = mongoose.model("User", UserSchema);
