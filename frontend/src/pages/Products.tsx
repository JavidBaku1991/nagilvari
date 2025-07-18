import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Pagination, Box } from '@mui/material';
// import { getProducts } from '../services/productService';
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';
import all from '../images/all.jpg'
const PRODUCTS_PER_PAGE = 12;

const Products: React.FC = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/api/products');
        const data = await response.json();
        // Map backend fields to frontend Product type
        const mapped = data.map((product: any) => ({
          id: product._id || product.id,
          title: product.name || product.title,
          description: product.description || '',
          price: product.price || 0,
          category: product.category || 'paintings',
          imageUrl: product.imageUrl && product.imageUrl.startsWith('/uploads/')
            ? `http://localhost:4000${product.imageUrl}`
            : (product.imageUrl || ''),
          featured: product.featured || false,
          artist: product.artist || '',
          dimensions: product.dimensions || '',
          year: product.year || 2023,
        }));
        setProducts(mapped);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            fontWeight: 'bold', 
            color: 'var(--secondary-main)',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          All Products
        </Typography>
        {loading ? (
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'var(--secondary-main)' }}>
            Loading products...
          </Typography>
        ) : products.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'var(--secondary-main)' }}>
            No products found
          </Typography>
        ) : (
        <Grid container spacing={4}>
          {paginatedProducts.map((product: Product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Box
                onClick={() => navigate(`/product/${product.id}`)}
                tabIndex={0}
                sx={{ outline: 'none',
                  color:'white'
                 }}
                role="button"
                aria-label={`View details for ${product.title}`}
              >
                <Card
                  sx={{
                    height: 420,
                    color:'white',
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
                    <Typography variant="body2"  sx={{ mb: 1, flexGrow: 1 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="body2" >
                      <b>Artist:</b> {product.artist}
                    </Typography>
                    <Typography variant="body2" >
                      <b>Price:</b> ${product.price}
                    </Typography>
                    <Typography variant="body2" >
                      <b>Year:</b> {product.year}
                    </Typography>
                    {product.dimensions && (
                      <Typography variant="body2" >
                        <b>Dimensions:</b> {product.dimensions}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        )}
        {!loading && products.length > 0 && (
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
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Products;