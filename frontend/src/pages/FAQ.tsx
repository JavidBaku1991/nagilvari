import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import faq from '../images/faq.jpg';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t('faq.questions.shipping.question'),
      answer: t('faq.questions.shipping.answer')
    },
    {
      question: t('faq.questions.returns.question'),
      answer: t('faq.questions.returns.answer')
    },
    {
      question: t('faq.questions.payment.question'),
      answer: t('faq.questions.payment.answer')
    },
    {
      question: t('faq.questions.authenticity.question'),
      answer: t('faq.questions.authenticity.answer')
    },
    {
      question: t('faq.questions.customization.question'),
      answer: t('faq.questions.customization.answer')
    }
  ];

  return (
    <Box sx={{
      position: 'relative',
      minHeight: 'calc(100vh - 64px)',
      paddingTop: '100px',
      paddingBottom: '40px',
      backgroundImage: `url(${faq})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(24, 19, 19, 0.85)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ 
          mb: 4,
          color: '#8B4513',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontWeight: 600
        }}>
          {t('faq.title')}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ 
          mb: 6,
          color: '#8B4513',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
        }}>
          {t('faq.description')}
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <Accordion 
              key={index} 
              sx={{ 
                mb: 2,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                '&:before': {
                  display: 'none'
                },
                '& .MuiAccordionSummary-root': {
                  color: '#8B4513',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 69, 19, 0.05)'
                  }
                },
                '& .MuiAccordionDetails-root': {
                  color: '#8B4513'
                },
                '& .MuiSvgIcon-root': {
                  color: '#8B4513'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" sx={{ color: '#8B4513', fontWeight: 600 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#8B4513', lineHeight: 1.6 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 