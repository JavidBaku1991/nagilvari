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
import telegramIcon from '../images/tele.jpg';

// Add shimmer animation keyframes
const shimmerKeyframes = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

// Inject the keyframes into the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
}

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
    console.log('Sending email with service:', 'service_45rbyj7', 'template:', 'template_ixoxhlu');
    emailjs
      .sendForm('service_45rbyj7', 'template_ixoxhlu', e.target as HTMLFormElement, 'RV22WzPhD0vnOR09L')
      .then((res: EmailJSResponse) => {
        console.log('Email sent successfully:', res);
        alert('Email sent successfully!');
        navigate('/');
      })
      .catch(err => {
        console.error('Error sending email:', err);
        alert('Failed to send email. Please check the console for details.');
      });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px)',
        paddingTop: { xs: '80px', sm: '90px', md: '100px' },
        paddingBottom: { xs: '20px', sm: '30px', md: '40px' },
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
        <Grid 
          container 
          spacing={{ xs: 3, md: 4 }} 
          sx={{ 
            position: 'relative', 
            width: '100%', 
            marginTop: { xs: '20px', sm: '40px', md: '70px' },
            alignItems: 'center',
            minHeight: { xs: 'auto', md: '70vh' }
          }}
        >
          {/* Contact Information Section */}
          <Fade in timeout={1600}>   
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                order: { xs: 2, md: 1 }
              }}
            > 
              <Box
                sx={{
                  width: '100%',
                  height: '85vh',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  maxWidth: { xs: '100%', sm: '500px', md: '100%' },
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(49, 44, 44, 0.8) 100%), url(${telegramIcon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  borderRadius: { xs: '16px', sm: '20px', md: '24px' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(210, 180, 140, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                 
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { xs: '6px', sm: '8px', md: '10px' }, 
                  color: 'var(--secondary-main)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <PhoneIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                      wordBreak: 'break-word'
                    }}
                  >
                    {t('contacts.phone')}
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: { xs: '6px', sm: '8px', md: '10px' }, 
                  color: 'var(--secondary-main)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <EmailIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                      wordBreak: 'break-word'
                    }}
                  >
                    {t('contacts.emailAddress')}
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'var(--secondary-main)', 
                    mt: { xs: 1, sm: 1.5, md: 2 }, 
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                    textAlign: 'center'
                  }}
                >
                  {t('contacts.social.title')}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: '8px', sm: '10px', md: '12px' }, 
                  mt: { xs: 0.5, sm: 1 },
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <IconButton 
                    href="https://facebook.com" 
                    target="_blank" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      '&:hover': { color: '#1877F2' },
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}
                    aria-label={t('contacts.social.facebook')}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    href="https://instagram.com" 
                    target="_blank" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      '&:hover': { color: '#E4405F' },
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}
                    aria-label={t('contacts.social.instagram')}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    href="https://twitter.com" 
                    target="_blank" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      '&:hover': { color: '#1DA1F2' },
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}
                    aria-label={t('contacts.social.twitter')}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton 
                    href="https://linkedin.com" 
                    target="_blank" 
                    sx={{ 
                      color: 'var(--secondary-main)', 
                      '&:hover': { color: '#0A66C2' },
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}
                    aria-label={t('contacts.social.linkedin')}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Fade>

          {/* Contact Form Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 }
            }}
          >
            <Fade in timeout={800}>
              <Box
                component="form"
                onSubmit={sendEmail}
                sx={{
                  backdropFilter: 'blur(14px)',
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: { xs: '12px', sm: '16px', md: '20px' },
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  p: { xs: 2, sm: 3, md: 4 },
                  color: '#333',
                  border: '1px solid rgba(255,255,255,0.3)',
                  maxWidth: { xs: '100%', sm: '500px', md: '100%' },
                  mx: 'auto'
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    color: 'var(--secondary-main)', 
                    fontWeight: 'bold', 
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  {t('contacts.title')}
                </Typography>
                <Typography 
                  variant="body2" 
                  paragraph 
                  sx={{ 
                    color: 'var(--secondary-main)', 
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    textAlign: { xs: 'center', md: 'left' },
                    mb: { xs: 2, sm: 3 }
                  }}
                >
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
                    mt: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                    backgroundColor: 'var(--secondary-main)',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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
