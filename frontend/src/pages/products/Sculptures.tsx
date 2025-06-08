import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Sculptures: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#8B4513',
      minHeight: 'calc(100vh - 64px)',
      color: 'white',
      paddingTop: '100px',
      paddingBottom: '40px'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Sculptures
        </Typography>
        <Grid container spacing={4}>
          {/* Add your sculptures content here */}
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Discover our curated collection of contemporary and classical sculptures.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sculptures; 