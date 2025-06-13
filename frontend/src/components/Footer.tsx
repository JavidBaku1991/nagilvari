import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Box, Button, Grid, Typography, Link as MuiLink, TextField } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

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
      .then((res) => {
        console.log('Email sent successfully:', res);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: '#8B4513',
        color: 'white',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 8 }
      }}
    >
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        {/* Left column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} mb={2}>
            Contact Us
          </Typography>
        
          
          <Box component="form" onSubmit={sendEmail} sx={{ mt: 2, mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="dense"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                  '&::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              size="small"
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                  '&::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              size="small"
              placeholder="Your Message"
              name="message"
              multiline
              rows={2}
              value={formData.message}
              onChange={handleChange}
              margin="dense"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                  '&::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                background: 'white',
                color: '#8B4513',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: 1,
                px: 2,
                py: 1,
                boxShadow: 'none',
                textTransform: 'none',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#8B4513'
                }
              }}
            >
              Send Message
            </Button>
          </Box>

       
        </Grid>
        {/* Right column */}
        <Grid item xs={12} md={5}>
          <Box mb={3}>
            <Typography fontWeight={700} component="span" mr={1}>Email</Typography>
            <MuiLink sx={{ color: 'white', fontWeight: 400, opacity: 0.8, '&:hover': { opacity: 1 } }} underline="none">
              hello@buuuk.com
            </MuiLink>
          </Box>
          <Box mb={3}>
            <Typography fontWeight={700} component="span" mr={1}>Phone</Typography>
            <MuiLink sx={{ color: 'white', fontWeight: 400, opacity: 0.8, '&:hover': { opacity: 1 } }} underline="none">
              (+65) 98735984
            </MuiLink>
          </Box>
        
          <Box mt={4} mb={5} display="flex" gap={2}>
            <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Twitter fontSize="large" /></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Facebook fontSize="large" /></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Instagram fontSize="large" /></MuiLink>
            <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><LinkedIn fontSize="large" /></MuiLink>
          </Box>
      
        </Grid>
        
      </Grid>

    </Box>
  );
};

export default Footer; 