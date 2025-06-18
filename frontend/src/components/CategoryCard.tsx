import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
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
  const isHomeVariant = variant === 'home';
  const cardHeight = isHomeVariant ? '200px' : '400px';

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
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
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
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
        <CardContent sx={{ flexGrow: 1, backgroundColor: 'white' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              color: '#8B4513',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: '#666',
              lineHeight: 1.6
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
                color: '#8B4513',
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