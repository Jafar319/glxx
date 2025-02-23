const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const db = require("./DB/dbConnect.js");
env.config();
app.use(express.json());
// Allow only specific origins
const allowedOrigins = [process.env.URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // If you need to include cookies or authentication
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use("/auth", authRoutes);

// app.post("/auth/signup", (req, res) => {
//   console.log(JSON.stringify(req.body, null, 2));
//   res.send("Signup successfully");
// });
// app.post("/auth/login", (req, res) => {
//   console.log(JSON.stringify(req.body, null, 2));
//   res.send("Signin successfully");
// });
app.listen(3000, () => {
  db();
  console.log("server started successfully");
});
