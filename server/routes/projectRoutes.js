// server/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Import our Project blueprint

// --- 1. GET ALL PROJECTS (READ) ---
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- 2. ADD NEW PROJECT (CREATE) --- (We will use this later)
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        descriptionEn: req.body.descriptionEn,
        descriptionFr: req.body.descriptionFr,
        imageUrl: req.body.imageUrl,
        link: req.body.link
    });

    try {
        const newProject = await project.save(); 
        res.status(201).json(newProject); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// --- 3. UPDATE PROJECT (UPDATE) ---
router.put('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        // Update fields only if they are provided in the request body
        Object.assign(project, req.body);

        const updatedProject = await project.save();
        res.json(updatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// --- 4. DELETE PROJECT (DELETE) ---
router.delete('/:id', async (req, res) => {
    try {
        const result = await Project.deleteOne({ _id: req.params.id });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;