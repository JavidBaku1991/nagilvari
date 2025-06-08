import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import contactImage from '../images/footer.jpg';
import '../css/Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define emailjs response type since @types package is not available
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
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ursknit', 'template_64qmekz', e.target as HTMLFormElement, 'RV22WzPhD0vnOR09L')
      .then((res: EmailJSResponse) => {
        console.log('Email sent successfully:', res);
      })
      .catch((err: unknown) => {
        console.error('Error sending email:', err);
      });
    navigate('/');
  };

  return (
    <Box className="contacts-page" sx={{ 
      padding: '2rem',
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: '#333',
      paddingTop: '100px'
    }}>
      <Grid container spacing={4}>
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
            {t('contacts.title')}
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#666' }}>
            {t('contacts.description')}
          </Typography>
          <Box component="form" onSubmit={sendEmail} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label={t('contacts.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8B4513',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8B4513',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8B4513',
                },
              }}
            />
            <TextField
              fullWidth
              label={t('contacts.email')}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8B4513',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8B4513',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8B4513',
                },
              }}
            />
            <TextField
              fullWidth
              label={t('contacts.message')}
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ddd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8B4513',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8B4513',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#666',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#8B4513',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                mt: 2,
                backgroundColor: '#8B4513',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#6B3410',
                }
              }}
            >
              {t('contacts.send')}
            </Button>
          </Box>
        </Grid>
        {/* @ts-ignore */}
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <Box
            component="img"
            src={contactImage}
            alt="Contact"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;