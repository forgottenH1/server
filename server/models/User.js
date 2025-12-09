// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // In a real app, this would be hashed!
    role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('User', userSchema);