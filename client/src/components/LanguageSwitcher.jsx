import React from 'react';
// Import the essential hook for translation
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  // The t function translates, and i18n object helps change the language
  const { i18n } = useTranslation(); 
  
  // Get the current language code
  const currentLanguage = i18n.language; 

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')}
        // Apply a style based on the active language
        style={{ fontWeight: currentLanguage === 'en' ? 'bold' : 'normal' }}
      >
        EN
      </button>
      <span> | </span>
      <button 
        onClick={() => changeLanguage('fr')}
        style={{ fontWeight: currentLanguage === 'fr' ? 'bold' : 'normal' }}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;