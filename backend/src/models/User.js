const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For password hashing

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
});

// Hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password
  this.password = await bcrypt.hash(this.password, 10);

  // Hash confirmPassword too if available
  if (this.confirmPassword) {
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }

  next();
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
