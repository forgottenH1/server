// server/models/Project.js
const mongoose = require('mongoose');

// This is the blueprint for every project you add
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descriptionEn: { type: String, required: true }, // English Description
    descriptionFr: { type: String, required: true }, // French Description
    imageUrl: { type: String, required: true },      // Link to the photo
    link: { type: String }                           // Link to the live project/github
});

module.exports = mongoose.model('Project', ProjectSchema);