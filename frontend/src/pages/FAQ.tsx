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
import faq from '../images/faq.jpg';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the country. International shipping may take 7-14 business days depending on the destination.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all products. Items must be in their original condition with all packaging and tags intact.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s website.'
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
          Frequently Asked Questions
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