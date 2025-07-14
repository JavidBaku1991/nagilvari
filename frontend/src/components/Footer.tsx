import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    navigate(path);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      footerSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Naghilvari</h3>
          <p className="footer-description">
            {t('footer.company.description')}
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('footer.quickLinks.title')}</h4>
          <ul className="footer-links">
            <li><Link to="/about" onClick={() => handleNavigation('/about')}>{t('footer.quickLinks.about')}</Link></li>
            <li><Link to="/products" onClick={() => handleNavigation('/products')}>{t('footer.quickLinks.gallery')}</Link></li>
            <li><Link to="/contact" onClick={() => handleNavigation('/contact')}>{t('footer.quickLinks.contact')}</Link></li>
            <li><Link to="/faq" onClick={() => handleNavigation('/faq')}>{t('footer.quickLinks.faq')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('footer.categories.title')}</h4>
          <ul className="footer-links">
            <li><Link to="/products/paintings" onClick={() => handleNavigation('/products/paintings')}>{t('categories.paintings.title')}</Link></li>
            <li><Link to="/products/sculptures" onClick={() => handleNavigation('/products/sculptures')}>{t('categories.sculptures.title')}</Link></li>
            <li><Link to="/products/digital-art" onClick={() => handleNavigation('/products/digital-art')}>{t('categories.digitalArt.title')}</Link></li>
            <li><Link to="/products/photography" onClick={() => handleNavigation('/products/photography')}>{t('categories.photography.title')}</Link></li>
            <li><Link to="/products/ceramics" onClick={() => handleNavigation('/products/ceramics')}>{t('categories.ceramics.title')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">{t('footer.connect.title')}</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Add the contact form here */}
        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Naghilvari. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy" onClick={() => handleNavigation('/privacy')}>Privacy Policy</Link>
          <Link to="/terms" onClick={() => handleNavigation('/terms')}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;