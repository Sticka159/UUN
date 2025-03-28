const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const newUser = new User({ name, email, password });

        await newUser.save();
        res.status(201).json({ message: "You son of a bitch, I'm in" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login User
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the password matches
        if (password !== user.password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "You son of a bitch, I'm in" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;