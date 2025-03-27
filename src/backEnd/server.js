require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes"); // We'll define these routes later

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // To allow cross-origin requests

// Routes
app.use("/api/auth", authRoutes); // Routes for user authentication

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error(err));