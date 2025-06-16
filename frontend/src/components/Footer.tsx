import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
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
          <h3 className="footer-title">Nagilvari</h3>
          <p className="footer-description">
            Discover and share amazing art pieces from talented artists around the world.
            Join our community of art enthusiasts and creators.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about" onClick={() => handleNavigation('/about')}>About Us</Link></li>
            <li><Link to="/products" onClick={() => handleNavigation('/products')}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => handleNavigation('/contact')}>Contact</Link></li>
            <li><Link to="/faq" onClick={() => handleNavigation('/faq')}>FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Categories</h4>
          <ul className="footer-links">
            <li><Link to="/products/paintings" onClick={() => handleNavigation('/products/paintings')}>Paintings</Link></li>
            <li><Link to="/products/sculptures" onClick={() => handleNavigation('/products/sculptures')}>Sculptures</Link></li>
            <li><Link to="/products/digital-art" onClick={() => handleNavigation('/products/digital-art')}>Digital Art</Link></li>
            <li><Link to="/products/photography" onClick={() => handleNavigation('/products/photography')}>Photography</Link></li>
            <li><Link to="/products/ceramics" onClick={() => handleNavigation('/products/ceramics')}>Ceramics</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Add the contact form here */}
        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nagilvari. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy" onClick={() => handleNavigation('/privacy')}>Privacy Policy</Link>
          <Link to="/terms" onClick={() => handleNavigation('/terms')}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;