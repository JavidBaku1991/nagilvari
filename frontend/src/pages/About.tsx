import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/About.css';
import hero1Img from '../images/hero.jpeg';
import about from '../images/pottery.png';
import { Box, Container } from '@mui/material';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: 'calc(100vh - 64px)',
      paddingTop: '100px',
      paddingBottom: '40px',
      backgroundImage: `url(${about})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(21, 17, 17, 0.85)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <h2 className="about-title text-center mb-5" style={{ 
          color: 'var(--secondary-main)',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
          fontWeight: 'bold'
        }}>
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
            color: 'var(--secondary-main)',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
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
      </Container>
    </Box>
  );
};

export default About; 


