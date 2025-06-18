import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './InvestorCallToAction.css';
import investor from '../images/hero12.jpg';

const InvestorCallToAction: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleWriteUs = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="investor-container">
      <div className="investor-content">
        <div className="investor-image-container">
          <img
            src={investor}
            alt={t('investor.title')}
            className="investor-image"
          />
        </div>
        <div className="investor-text-container">
          <h2 className="investor-title">{t('investor.title')}</h2>
          <p className="investor-description">
            {t('investor.subtitle')}
          </p>
          <div className="investor-button-container">
            <button className="investor-button primary" onClick={handleLearnMore}>
              {t('investor.learnMoreButton')}
            </button>
            <button className="investor-button secondary" onClick={handleWriteUs}>
              {t('investor.contactButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorCallToAction;