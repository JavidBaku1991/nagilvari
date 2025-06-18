import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

const Photography: React.FC = () => {
  const photography = products.filter(product => product.category === 'photography');
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
          Photography
        </Typography>
        <Grid container spacing={4}>
          {photography.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Photography; 