const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/GenerateToken.js");
// Signup Controller
const signup = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    console.log("signuppppppppppppppppppppppppppppppppppppppppp");

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create new user
    const user = new User({ email, password, confirmPassword });
    await user.save();

    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

// Signin Controller
const signin = async (req, res) => {
  console.log("Signininnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");

  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user);
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { signup, signin };
