import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Box, TextField, Button, Typography, Grid, Fade, IconButton, Container } from '@mui/material';
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
        minHeight: 'calc(100vh - 64px)',
        paddingTop: '100px',
        paddingBottom: '40px',
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(49, 44, 44, 0.85)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={0} sx={{ position: 'relative', width: '100%', marginTop: '70px' }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-main)' }}>
                  <PhoneIcon />
                  <Typography variant="h4" sx={{ color: 'var(--secondary-main)', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                    {t('contacts.phone')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-main)' }}>
                  <EmailIcon />
                  <Typography variant="h4" sx={{ color: 'var(--secondary-main)', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                    {t('contacts.emailAddress')}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'var(--secondary-main)', mt: 2, textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                  {t('contacts.social.title')}
                </Typography>
                <Box sx={{ display: 'flex', gap: '12px', mt: 1 }}>
                  <IconButton 
                    href="https://facebook.com" 
                    target="_blank" 
                    sx={{ color: 'var(--secondary-main)', '&:hover': { color: '#1877F2' } }}
                    aria-label={t('contacts.social.facebook')}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    href="https://instagram.com" 
                    target="_blank" 
                    sx={{ color: 'var(--secondary-main)', '&:hover': { color: '#E4405F' } }}
                    aria-label={t('contacts.social.instagram')}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com" 
                    target="_blank" 
                    sx={{ color: 'var(--secondary-main)', '&:hover': { color: '#1DA1F2' } }}
                    aria-label={t('contacts.social.twitter')}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton 
                    href="https://linkedin.com" 
                    target="_blank" 
                    sx={{ color: 'var(--secondary-main)', '&:hover': { color: '#0A66C2' } }}
                    aria-label={t('contacts.social.linkedin')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Fade>
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
                <Typography variant="h5" gutterBottom sx={{ color: 'var(--secondary-main)', fontWeight: 'bold', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                  {t('contacts.title')}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: 'var(--secondary-main)', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
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
                        '& fieldset': { borderColor: 'rgba(210, 180, 140, 0.5)' },
                        '&:hover fieldset': { borderColor: 'var(--secondary-main)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--secondary-main)' }
                      },
                      '& .MuiInputLabel-root': { color: 'var(--secondary-main)' },
                      '& .MuiInputLabel-root.Mui-focused': { color: 'var(--secondary-main)' }
                    }}
                    InputProps={{ style: { color: 'var(--secondary-main)' } }}
                  />
                ))}

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: 'var(--secondary-main)',
                    color: 'black',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#DEB887'
                    }
                  }}
                >
                  {t('contacts.send')}
                </Button>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
