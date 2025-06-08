import React from 'react';
import { Box, Button, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => (
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
          Let's Talk
        </Typography>
        <Typography variant="body1" mb={3} sx={{ maxWidth: 500 }}>
          Every project starts with a chat. Joven leads our client conversations and will be happy to discuss your project. He will also pull in the right people from the team when needed.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: 'white',
            color: '#8B4513',
            fontWeight: 700,
            fontSize: '1.25rem',
            borderRadius: 2,
            px: 3,
            py: 1.5,
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': { 
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#8B4513'
            }
          }}
        >
          Tell us about your project
        </Button>
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
        <Box mb={3}>
          <Typography fontWeight={700} component="span" mr={1}>Address</Typography>
          <MuiLink target="_blank" rel="noopener" sx={{ color: 'white', fontWeight: 400, opacity: 0.8, '&:hover': { opacity: 1 } }} underline="none">
            1 Paya Lebar Link<br />#04-01, Paya Lebar Quarter<br />Singapore, 408533
          </MuiLink>
        </Box>
        <Box mt={4} display="flex" gap={2}>
          <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Twitter fontSize="large" /></MuiLink>
          <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Facebook fontSize="large" /></MuiLink>
          <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><Instagram fontSize="large" /></MuiLink>
          <MuiLink href="#" color="inherit" sx={{ opacity: 0.6, '&:hover': { opacity: 1 } }}><LinkedIn fontSize="large" /></MuiLink>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Footer; 