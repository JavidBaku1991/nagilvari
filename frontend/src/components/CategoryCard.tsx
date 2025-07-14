import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, CardActions, Button } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useTranslation } from 'react-i18next';

interface Image {
  src: string;
  alt: string;
}

interface CategoryCardProps {
  title: string;
  description: string;
  images: Image[];
  path: string;
  variant?: 'home' | 'products' | 'categories';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  images,
  path,
  variant = 'categories'
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isHomeVariant = variant === 'home';
  const cardHeight = isHomeVariant ? '200px' : '400px';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate programmatically to ensure scroll to top
    navigate(path);
    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={path} style={{ textDecoration: 'none', marginBottom: '20px', display: 'block' }} onClick={handleClick}>
      <Card
        sx={{
          height: cardHeight,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={images[0].src}
          alt={images[0].alt}
          sx={{
            objectFit: 'cover',
            borderBottom: '1px solid rgba(0,0,0,0.1)'
          }}
        />
        <CardContent sx={{ 
          flexGrow: 1, 
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'white',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.6,
              color: 'white',
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {variant === 'products' ? t('common.view') : t('common.browse')}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard; 