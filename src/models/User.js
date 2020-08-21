const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

// Hash passowrd
UserSchema.pre("save", async function (next) {
  if (!(this.isNew || this.isModified("password"))) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Verify password
UserSchema.methods.correctPassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

// Generate jwt token
UserSchema.methods.genJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = mongoose.model("User", UserSchema);
