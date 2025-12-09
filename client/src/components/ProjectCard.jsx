// client/src/components/ProjectCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project }) => {
    const { t, i18n } = useTranslation();
    
    // Decide which description to show based on the current language
    const description = i18n.language === 'fr' 
        ? project.descriptionFr 
        : project.descriptionEn;

    // Use the key 'project.link' since your previous code suggested it.
    // We'll use the 'project.link' for the URL.
    const projectLinkUrl = project.link; 

    // The entire card content is wrapped in the anchor tag for clickability.
    return (
        // 🎯 FIX: Wrap the entire card in an <a> tag and use the 'link' key 🎯
        <a 
            href={projectLinkUrl}        // Use the URL from the project object
            target="_blank"             // Opens the link in a new tab
            rel="noopener noreferrer"   // Security best practice
            className="project-card"    // Keep the original styling class
        >
            <div className="project-image-container">
                <img 
                    src={project.imageUrl || 'placeholder.jpg'} 
                    alt={project.title} 
                    className="project-image" 
                />
            </div>

            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{description}</p>
                
                {/* Display the link text only if a URL exists */}
                {projectLinkUrl && (
                    <span className="project-link">
                        {t('project_view_link', 'View Project')} →
                    </span>
                )}
            </div>
        </a>
    );
};

export default ProjectCard;