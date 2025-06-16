import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Box, TextField, Button, Typography, Grid, Fade, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import contactImage from '../images/hero.jpeg';
import '../css/Contact.css';
import contactBg from '../images/contact.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface EmailJSResponse {
  status: number;
  text: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ursknit', 'template_64qmekz', e.target as HTMLFormElement, 'RV22WzPhD0vnOR09L')
      .then((res: EmailJSResponse) => console.log('Email sent successfully:', res))
      .catch(err => console.error('Error sending email:', err));
    navigate('/');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        px: 8,
        py: 10,
        
        background: 'linear-gradient(to right, #fdfcfb, #e2d1c3)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${contactBg})`,

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Grid container spacing={0} sx={{ position: 'relative', width: '100%' ,marginTop:'70px'}}>
        {/* IMAGE - Smaller and centered */}
       <Fade in timeout={1600}>   
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        > 
      
          <Box
            sx={{
              width: '50%',
              height: '60vh',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}
          />
                 

          <Box
            sx={{
              width: '60%',
              height: '60vh',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '15px 25px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              textShadow: '0 0 10px rgba(120, 112, 112, 0.5)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--main)' }}>
              <PhoneIcon />
              <Typography variant="h4">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--main)' }}>
              <EmailIcon />
              <Typography variant="h4">contact@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '12px', mt: 1 }}>
              <IconButton 
                href="https://facebook.com" 
                target="_blank" 
                sx={{ color: 'var(--main)', '&:hover': { color: '#1877F2' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                href="https://instagram.com" 
                target="_blank" 
                sx={{ color: 'var(--main)', '&:hover': { color: '#E4405F' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                href="https://twitter.com" 
                target="_blank" 
                sx={{ color: 'var(--main)', '&:hover': { color: '#1DA1F2' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                href="https://linkedin.com" 
                target="_blank" 
                sx={{ color: 'var(--main)', '&:hover': { color: '#0A66C2' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
       
        </Grid>
   </Fade>
        {/* FORM - Smaller and overlaps image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            position: 'absolute',
            
            right: { xs: '5%', md: '12%' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: { xs: '90%', sm: '70%', md: '400px' }
          }}
        >
          <Fade in timeout={800}>
            <Box
              component="form"
              onSubmit={sendEmail}
              sx={{
                backdropFilter: 'blur(14px)',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                p: 4,
                color: '#333',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#4B2E19' }}>
                {t('contacts.title')}
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: '#5c4b3b' }}>
                {t('contacts.description')}
              </Typography>

              {['name', 'email', 'message'].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  label={t(`contacts.${field}`)}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  margin="normal"
                  required
                  multiline={field === 'message'}
                  rows={field === 'message' ? 4 : 1}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '& fieldset': { borderColor: '#d3c2b4' },
                      '&:hover fieldset': { borderColor: '#8B4513' },
                      '&.Mui-focused fieldset': { borderColor: '#8B4513' }
                    },
                    '& .MuiInputLabel-root': { color: '#7a6651' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#8B4513' }
                  }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  backgroundColor: '#8B4513',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#6B3410' }
                }}
              >
                {t('contacts.send')}
              </Button>
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
