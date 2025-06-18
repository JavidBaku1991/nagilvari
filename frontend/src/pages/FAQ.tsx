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
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: '#333',
      paddingTop: '100px',
      paddingBottom: '40px',
      backgroundImage: `url(${faq})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ 
          mb: 4,
          color: '#333'
        }}>
          {t('faq.title')}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: '#666' }}>
          {t('faq.description')}
        </Typography>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqItems.map((item, index) => (
            <Accordion 
              key={index} 
              sx={{ 
                mb: 2,
                color: '#333',
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
                  color: '#333',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 69, 19, 0.05)'
                  }
                },
                '& .MuiAccordionDetails-root': {
                  color: '#666'
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
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 