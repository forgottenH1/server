// client/src/components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="container footer-content">
                <p className="footer-copyright">
                    &copy; {currentYear} Ayoub El Arabi. {t('footer_rights', 'All Rights Reserved.')}
                </p>
                <div className="footer-links">
                    <a href="https://github.com/forgottenH1" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://w4j.yool.education/" target="_blank" rel="noopener noreferrer">Web4jobs</a>
                    <a href="/contact">{t('nav_contact')}</a>
                    <a href="/admin">Admin</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;