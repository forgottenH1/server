// client/src/pages/Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

// IMPORTANT: Replace YOUR_FORMSPREE_HASH with your actual Formspree endpoint after setting up.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzznabol";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container contact-container">
      <h2 className="page-header">{t('contact_header')}</h2>
      
      <p className="contact-text">
        {t('contact_intro', 'Have a project idea or a question? Feel free to send me a message! I aim to respond within 24 hours.')}
      </p>

      {/* This form uses Formspree for handling submissions without a custom backend */}
      <form action={FORMSPREE_ENDPOINT} method="POST" className="contact-form">
        
        {/* Name Input */}
        <input 
          type="text" 
          name="name" 
          placeholder={t('contact_name', 'Your Name')} 
          required 
        />
        
        {/* Email Input */}
        <input 
          type="email" 
          name="_replyto" 
          placeholder={t('contact_email', 'Your Email')} 
          required 
        />
        
        {/* Message Input */}
        <textarea 
          name="message" 
          placeholder={t('contact_message', 'Your Message')} 
          required 
        />
        
        <button type="submit" className="submit-button">
          {t('contact_submit')}
        </button>
      </form>
      
      <p className="contact-note">
        {t('contact_note', 'Note: The message will be sent directly via a secure external service.')}
      </p>
    </div>
  );
};

export default Contact;