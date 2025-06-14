import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Image {
  src: string;
  alt: string;
}

interface CategoryCardProps {
  title: string;
  description: string;
  images: Image[];
  path: string;
  variant?: 'home' | 'products';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  images,
  path,
  variant = 'products'
}) => {
  const isHomeVariant = variant === 'home';
  const cardHeight = isHomeVariant ? '200px' : '400px';

  return (
    <Card
      component={Link}
      to={path}
      sx={{
        height: cardHeight,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease-in-out',
        textDecoration: 'none',
        backgroundColor: 'white',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          '& .splide__slide img': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          height: '60%',
          overflow: 'hidden',
          '& .splide': {
            height: '100%'
          },
          '& .splide__track': {
            height: '100%'
          },
          '& .splide__list': {
            height: '100%'
          },
          '& .splide__slide': {
            height: '100%',
            padding: 0,
            margin: 0
          }
        }}
      >
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            height: '100%',
            padding: 0,
            gap: 0
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out',
                  display: 'block',
                  padding: 0,
                  margin: 0
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))'
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'white'
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#8B4513',
            fontWeight: 600,
            marginBottom: '0.5rem',
            fontSize: '1.25rem'
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            lineHeight: 1.5,
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard; 