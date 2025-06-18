import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/About.css';
import hero1Img from '../images/hero.jpeg';
import about from '../images/pottery.png';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page page" style={{
      minHeight: 'calc(100vh - 64px)', // Subtract navbar height
      padding: '80px 20px',
      background: 'white',
      marginBottom: 0,
      backgroundImage: `url(${about})`,
      backgroundSize: 'cover'
    }}>
      <div className="container">
        <h2 className="about-title text-center mb-5" style={{ color: '#8B4513' }}>
          {t('about.title')}
        </h2>
        <div
          className="about-content card p-4 mx-auto mt-4"
          style={{
            maxWidth: '1000px',
            padding: '20px',
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#8B4513',
            textShadow: '2px 2px 4px rgba(203, 186, 186, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <p>
            <strong>Nagilvari </strong>
            {t('about.description.part1')}
          </p>
          <p>
            {t('about.description.part2')}
          </p>
          <p>
            {t('about.description.part3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 


