import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid, Box, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  // Dummy cart data - replace with actual cart state management later
  const cartItems = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 2,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      name: 'Product 2',
      price: 150,
      quantity: 1,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const { t } = useTranslation();

  return (
    <Box sx={{ p: 4, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          {t('cart.title')}
        </Typography>

        {cartItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" gutterBottom>
              {t('cart.emptyMessage')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary' }}>
              {t('cart.emptyDescription')}
            </Typography>
            <Button 
              variant="outlined" 
              component={Link} 
              to="/products"
              sx={{ mr: 2 }}
            >
              {t('cart.continueShopping')}
            </Button>
            <Button 
              variant="contained" 
              onClick={() => alert(t('cart.checkout'))}
            >
              {t('cart.checkout')}
            </Button>
          </Box>
        ) : (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {cartItems.map(item => (
                <Paper key={item.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ width: 80, height: 80, marginRight: '1rem', borderRadius: '4px' }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">Quantity: {item.quantity}</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {t('cart.summary')}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>{t('cart.subtotal')}</Typography>
                  <Typography>${total.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>{t('cart.shipping')}</Typography>
                  <Typography>{t('cart.free')}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', pt: 2, borderTop: '1px solid #ddd' }}>
                  <Typography variant="h6">{t('cart.total')}</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ mt: 3 }}
                  onClick={() => alert(t('cart.checkout'))}
                >
                  {t('cart.proceedToCheckout')}
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 'bold' }}>{t('cart.totalItems', { count: cartItems.length })}</Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Cart; 