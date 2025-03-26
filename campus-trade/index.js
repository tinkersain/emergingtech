require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./utils/db");
const userRouter = require("./routes/user.Router");
const listingRouter = require("./routes/listings.Router");

const app = express();

// Middleware
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", userRouter);
app.use("/api", listingRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Campus Trade");
});

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
