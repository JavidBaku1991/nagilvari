import React, { useState, useEffect } from 'react';
import { getFeaturedProducts } from '../services/productService';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTranslation } from 'react-i18next';
import '@splidejs/react-splide/css';
import featured from '../images/featured.jpg'
import { Box, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading featured products:', error);
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.featured-products-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Box 
      className="featured-products-section"
      sx={{
        padding: '2rem 2rem',
        backgroundColor: '#f8f9fa',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
        borderRadius: '20px',
        backgroundImage: `url(${featured})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container maxWidth="lg">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            color: 'var(--secondary-main)',
            marginBottom: '1rem',
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block'
          }}>
            {t('home.featuredProducts')}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: 'var(--secondary-main)',
              borderRadius: '2px'
            }} />
          </h3>
          <p style={{
            color: 'var(--secondary-main)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '1rem auto 0',
            lineHeight: '1.6'
          }}>
            {t('products.featuredDescription')}
          </p>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Splide
            options={{
              type: 'loop',
              perPage: 4,
              gap: '2rem',
              autoplay: true,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              breakpoints: {
                1200: { perPage: 3 },
                768: { perPage: 2 },
                640: { perPage: 1 }
              }
            }}
            aria-label={t('home.featuredProducts')}
          >
            {featuredProducts.map((product, index) => (
              <SplideSlide key={product.id}>
                <div style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `transform 0.5s ease-out ${index * 0.2}s, opacity 0.5s ease-out ${index * 0.2}s`,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <ProductCard product={product} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            component={Link} 
            to="/products"
            sx={{
              backgroundColor: 'white',
              color: 'var(--secondary-main)',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            {t('featuredProducts.viewAll')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts; 