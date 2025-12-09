// client/src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

// The URL for our Node.js server (runs on port 5000)
const API_URL = `${import.meta.env.VITE_API_URL}/projects` || 'http://localhost:5000/api/projects';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use axios to make a GET request to our server API
        const response = await axios.get(API_URL);
        setProjects(response.data); // Store the list of projects
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Check server connection.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this runs only once on load

  if (loading) return <div className="container">Loading projects...</div>;
  if (error) return <div className="container error-message">{error}</div>;

  return (
    <div className="container">
      <h2 className="page-header">{t('project_title')}</h2>
      
      {/* Grid container for project cards (Responsive) */}
      <div className="projects-grid">
        {projects.length > 0 ? (
          // Map over the array of projects and render a ProjectCard for each
          projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <p>No projects found. Add some from the Admin Dashboard!</p>
        )}
      </div>
    </div>
  );
};

export default Projects;