import React, { useState, useEffect } from 'react';
import { getFeaturedProducts, Product } from '../data/products';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const FeaturedProducts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate loading time for demonstration
    const loadProducts = async () => {
      try {
        const products = getFeaturedProducts().slice(0, 10);
        setFeaturedProducts(products);
        // Add a small delay to show the loading spinner
        await new Promise(resolve => setTimeout(resolve, 1000));
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
    <div 
      className="featured-products-section"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f9fa',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#8B4513',
            marginBottom: '1rem',
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block'
          }}>
            Featured Products
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: '#8B4513',
              borderRadius: '2px'
            }} />
          </h3>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '1rem auto 0',
            lineHeight: '1.6'
          }}>
            Discover our handpicked selection of exceptional artworks
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
            aria-label="Featured Products"
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
                  <ProductCard
                    id={product.id}
                    name={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.imageUrl}
                    category={product.category}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts; 