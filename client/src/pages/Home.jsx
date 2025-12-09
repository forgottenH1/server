// client/src/pages/Home.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container home-container">
      <header className="hero-section">
        {/* Your personalized greeting */}
        <h1 className="hero-greeting">{t('greeting')}</h1>
        
        <p className="hero-bio">
          {/* Example of a translated bio (You can replace this text in i18n.js) */}
          {t('home_bio', 'I specialize in building responsive web applications using React and robust APIs with Node.js and MongoDB. My focus is on creating dynamic, user-friendly, and scalable digital solutions.')}
        </p>
        
        {/* Call to action */}
        <a href="/projects" className="cta-button">{t('nav_projects')} →</a>
      </header>

      <section className="skills-section">
        <h2 className="section-title">{t('skills_title', 'My Core Skills')}</h2>
        <div className="skills-grid">
          <div className="skill-item">React & Redux</div>
          <div className="skill-item">Node.js & Express</div>
          <div className="skill-item">MongoDB / Atlas</div>
          <div className="skill-item">HTML5 & CSS3/SCSS</div>
          <div className="skill-item">Responsive Design</div>
          <div className="skill-item">Git & CI/CD</div>
        </div>
      </section>
    </div>
  );
};

export default Home;