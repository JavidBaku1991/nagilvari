import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Rating
} from '@mui/material';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  rating = 0,
}) => {
  return (
    <Card sx={{ 
      maxWidth: 345,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 2
          }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={rating} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({rating})
            </Typography>
          </Box>
          <Typography variant="h6" color="primary">
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
};

export default ProductCard; 