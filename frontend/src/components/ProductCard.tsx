import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Rating,
  Chip
} from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category
}) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
        },
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}
    >
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ mb: 1 }}>
            <Chip 
              label={category}
              size="small"
              sx={{ 
                backgroundColor: '#8B4513',
                color: 'white',
                fontSize: '0.75rem',
                height: '24px'
              }}
            />
          </Box>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 600,
              color: '#8B4513',
              mb: 1,
              fontSize: '1.1rem',
              lineHeight: 1.4
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mb: 2,
              fontSize: '0.9rem',
              lineHeight: 1.5,
              height: '2.7em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {description}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
            mt: 'auto'
          }}>
            <Typography 
              variant="h6" 
              color="primary"
              sx={{ 
                fontWeight: 600,
                color: '#8B4513'
              }}
            >
              ${price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard; 