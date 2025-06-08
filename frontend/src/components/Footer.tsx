import React from 'react';
import { Box, Button, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      background: '#1a2a43',
      color: 'white',
      py: { xs: 6, md: 8 },
      px: { xs: 2, md: 8 },
      mt: 8
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
            background: '#22c55e',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.25rem',
            borderRadius: 2,
            px: 3,
            py: 1.5,
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': { background: '#16a34a' }
          }}
        >
          Tell us about your project
        </Button>
      </Grid>
      {/* Right column */}
      <Grid item xs={12} md={5}>
        <Box mb={3}>
          <Typography fontWeight={700} component="span" mr={1}>Email</Typography>
          <MuiLink href="mailto:hello@buuuk.com" sx={{ color: '#3ba3ff', fontWeight: 400 }} underline="none">
            hello@buuuk.com
          </MuiLink>
        </Box>
        <Box mb={3}>
          <Typography fontWeight={700} component="span" mr={1}>Phone</Typography>
          <MuiLink href="tel:+6598735984" sx={{ color: '#3ba3ff', fontWeight: 400 }} underline="none">
            (+65) 98735984
          </MuiLink>
        </Box>
        <Box mb={3}>
          <Typography fontWeight={700} component="span" mr={1}>Address</Typography>
          <MuiLink href="https://goo.gl/maps/xyz" target="_blank" rel="noopener" sx={{ color: '#3ba3ff', fontWeight: 400 }} underline="none">
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