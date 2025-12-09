import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    // The main container for the navigation bar
    <nav className="portfolio-navbar">
      {/* Your Name/Logo links back to the home page */}
      <Link to="/" className="navbar-brand">
        {t('app_name')}
      </Link>

      <div className="navbar-links">
        {/* Navigation Links using translated keys */}
        <Link to="/" className="nav-item">{t('nav_home')}</Link>
        <Link to="/projects" className="nav-item">{t('nav_projects')}</Link>
        <Link to="/contact" className="nav-item">{t('nav_contact')}</Link>
        
        {/* The Language Switcher */}
        <LanguageSwitcher />
        
        {/* Hidden link for the dashboard (security is added later) */}
        <Link to="/admin" className="nav-item admin-link">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;