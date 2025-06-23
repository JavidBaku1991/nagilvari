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
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontWeight: 600
        }}>
          {t('faq.title')}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ 
          mb: 6,
          color: 'white',
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
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:before': {
                  display: 'none',
                },
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: 'white'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                sx={{
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  py: 1,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  {t(item.question)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 2, pb: 3, px: 3 }}>
                <Typography sx={{ color: 'white', lineHeight: 1.6 }}>
                  {t(item.answer)}
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