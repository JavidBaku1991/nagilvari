import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  variant?: 'home' | 'products';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  path,
  variant = 'products'
}) => {
  const isHomeVariant = variant === 'home';

  return (
    <Card
      component={Link}
      to={path}
      sx={{
        height: isHomeVariant ? '300px' : '400px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease-in-out',
        textDecoration: 'none',
        '&:hover': {
          transform: isHomeVariant ? 'scale(1.02)' : 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <Box sx={{ position: 'relative', height: isHomeVariant ? '200px' : '300px' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease-in-out'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))'
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
          backgroundColor: isHomeVariant ? 'transparent' : 'white',
          position: isHomeVariant ? 'absolute' : 'relative',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: isHomeVariant ? 'white' : '#8B4513',
            fontWeight: 600,
            marginBottom: '0.5rem',
            textShadow: isHomeVariant ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: isHomeVariant ? 'rgba(255,255,255,0.9)' : '#666',
            textShadow: isHomeVariant ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none',
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard; 