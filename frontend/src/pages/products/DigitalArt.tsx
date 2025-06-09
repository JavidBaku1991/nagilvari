import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const DigitalArt: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: '#8B4513',
      paddingTop: '100px',
      paddingBottom: '40px'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Digital Art
        </Typography>
        <Grid container spacing={4}>
          {/* Add your digital art content here */}
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Explore the world of digital creativity with our collection of digital artworks.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DigitalArt; 