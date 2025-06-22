import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Pagination, Box } from '@mui/material';
import { products, Product } from '../data/products';
import { useNavigate } from 'react-router-dom';
import all from '../images/all.jpg'
const PRODUCTS_PER_PAGE = 12;

const Products: React.FC = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Pagination logic
  const startIdx = (page - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIdx, endIdx);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: 'calc(100vh - 64px)', 
      paddingTop: '100px', 
      paddingBottom: '40px',
      backgroundImage: `url(${all})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(43, 35, 35, 0.85)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom
        sx={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: '#8B4513',
        fontWeight: 600
        }}
        >
          All Products
        </Typography>
        <Grid container spacing={4}>
          {paginatedProducts.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Box
                onClick={() => navigate(`/product/${product.id}`)}
                tabIndex={0}
                sx={{ outline: 'none' }}
                role="button"
                aria-label={`View details for ${product.title}`}
              >
                <Card
                  sx={{
                    height: 420,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    boxShadow: '0 2px 12px rgba(60,60,60,0.10)',
                    border: '1px solid #f0f0f0',
                    transition: 'transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s cubic-bezier(.4,2,.6,1)',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #fff 80%, #f9f6f2 100%)',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(60,60,60,0.18)',
                      transform: 'scale(1.035) translateY(-4px)',
                      borderColor: '#e0e0e0',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.imageUrl}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--secondary-main)' }}>
                    <Typography variant="h6" component="div" sx={{ mb: 1, fontWeight: 600 }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, flexGrow: 1 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>Artist:</b> {product.artist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>Price:</b> ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>Year:</b> {product.year}
                    </Typography>
                    {product.dimensions && (
                      <Typography variant="body2" color="text.secondary">
                        <b>Dimensions:</b> {product.dimensions}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            color="primary"
            shape="rounded"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                backgroundColor: 'var(--secondary-main)',
                color: '#8B4513',
                '&:hover': {
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                },
                '&.Mui-selected': {
                  backgroundColor: '#8B4513',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#8B4513',
                  },
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Products;