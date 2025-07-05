import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { getProducts } from '../services/productService';
import { Product } from '../types/product';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, Chip, Divider, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const foundProduct = products.find((p) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedImage(foundProduct.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <Box minHeight="80vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f9f6f2">
        <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            Product not found
          </Typography>
          <Button variant="contained" color="primary" component={RouterLink} to="/products" startIcon={<ArrowBackIcon />}>
            Back to Products
          </Button>
        </Paper>
      </Box>
    );
  }

  const images: string[] = [product.imageUrl];

  return (
    <>
      <Box sx={{ backgroundColor: '#f9f6f2', minHeight: 'calc(100vh - 64px)', py: 8 }}>
        <Container maxWidth="md">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ mb: 4 , color: 'var(--main)', borderColor: 'var(--main)' }}
            variant="outlined"
          >
            Back
          </Button>
          <Card sx={{ borderRadius: 4, boxShadow: '0 4px 32px rgba(60,60,60,0.10)', p: { xs: 2, md: 4 } }}>
            <Grid container spacing={4}>
              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
                  <CardMedia
                    component="img"
                    image={selectedImage}
                    alt={product.title}
                    sx={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 3 }}
                  />
                </Box>
                {images.length > 1 && (
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
                    {images.map((img: string, idx: number) => (
                      <IconButton
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        sx={{
                          border: selectedImage === img ? '2px solid white' : '2px solid #eee',
                          borderRadius: 2,
                          p: 0.5,
                          width: 56,
                          height: 56,
                          transition: 'border 0.2s',
                          background: '#fff',
                        }}
                      >
                        <img
                          src={img}
                          alt={`${product.title} ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                        />
                      </IconButton>
                    ))}
                  </Box>
                )}
              </Grid>
              {/* Info Section */}
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Chip
                    label={product.category.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                    sx={{ background: 'white', color: 'black', mb: 2, alignSelf: 'flex-start', fontWeight: 600 }}
                  />
                  <Typography variant="h4" fontWeight={700} gutterBottom color="white">
                    {product.title}
                  </Typography>
                  <Typography variant="h5" color="white" fontWeight={600} gutterBottom>
                    ${product.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
                  <Typography variant="body2" color="text.secondary">
                    <b>Artist:</b> {product.artist}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Year:</b> {product.year}
                  </Typography>
                  {product.dimensions && (
                    <Typography variant="body2" color="text.secondary">
                      <b>Dimensions:</b> {product.dimensions}
                    </Typography>
                  )}
                  <Box sx={{ mt: 'auto', pt: 3, display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, background: 'white', color: 'black', '&:hover': { background: '#f0f0f0' } }}>
                      Add to Cart
                    </Button>
                    <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 2, fontWeight: 600, color: 'white', borderColor: 'white', '&:hover': { background: 'white', color: 'black', borderColor: 'white' } }}>
                      Contact Seller
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetail; 