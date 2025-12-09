// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// --- Temporary Hardcoded Admin Setup ---
// In a real app, you would register and hash this password.
// We only create the user if one doesn't exist for simplicity.
const setupAdminUser = async () => {
    const existingAdmin = await User.findOne({ username: 'ayoub_admin' });
    if (!existingAdmin) {
        const adminUser = new User({
            username: 'ayoub_admin',
            password: 'secure_password_123' 
        });
        await adminUser.save();
        console.log("Temporary Admin User created: ayoub_admin / secure_password_123");
    }
};
setupAdminUser();

// --- LOGIN ROUTE ---
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    // 1. Check if user exists and password matches (no hashing used here for simplicity)
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 2. Create the JSON Web Token (JWT)
    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1d' } // Token expires in 1 day
    );

    // 3. Send the token back to the frontend
    res.json({ token, username: user.username });
});

module.exports = router;