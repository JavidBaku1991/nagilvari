import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import paintingsImg from '../images/hero.jpeg';
import sculpturesImg from '../images/hero1.jpg';
import digitalArtImg from '../images/hero2.png';
import photographyImg from '../images/footer.jpg';
import ceramicsImg from '../images/hero.jpeg';

const categories = [
  {
    title: 'Paintings',
    description: 'Explore our collection of unique paintings from talented artists around the world.',
    images: [
      { src: paintingsImg, alt: 'Painting 1' },
      { src: sculpturesImg, alt: 'Painting 2' },
      { src: digitalArtImg, alt: 'Painting 3' },
      { src: photographyImg, alt: 'Painting 4' }
    ],
    path: '/products/paintings'
  },
  {
    title: 'Sculptures',
    description: 'Discover our collection of unique sculptures from talented artists.',
    images: [
      { src: sculpturesImg, alt: 'Sculpture 1' },
      { src: digitalArtImg, alt: 'Sculpture 2' },
      { src: photographyImg, alt: 'Sculpture 3' },
      { src: paintingsImg, alt: 'Sculpture 4' }
    ],
    path: '/products/sculptures'
  },
  {
    title: 'Digital Art',
    description: 'Explore the world of digital creativity with our collection of digital artworks.',
    images: [
      { src: digitalArtImg, alt: 'Digital Art 1' },
      { src: photographyImg, alt: 'Digital Art 2' },
      { src: paintingsImg, alt: 'Digital Art 3' },
      { src: sculpturesImg, alt: 'Digital Art 4' }
    ],
    path: '/products/digital-art'
  },
  {
    title: 'Photography',
    description: 'Browse through our collection of stunning photographs from professional photographers.',
    images: [
      { src: photographyImg, alt: 'Photography 1' },
      { src: paintingsImg, alt: 'Photography 2' },
      { src: sculpturesImg, alt: 'Photography 3' },
      { src: digitalArtImg, alt: 'Photography 4' }
    ],
    path: '/products/photography'
  },
  {
    title: 'Ceramics',
    description: 'Explore our collection of handcrafted ceramic pieces from skilled artisans.',
    images: [
      { src: ceramicsImg, alt: 'Ceramics 1' },
      { src: sculpturesImg, alt: 'Ceramics 2' },
      { src: digitalArtImg, alt: 'Ceramics 3' },
      { src: photographyImg, alt: 'Ceramics 4' }
    ],
    path: '/products/ceramics'
  }
];

const Products: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: '#8B4513',
      paddingTop: '100px',
      paddingBottom: '40px'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 2 }}>
            Our Categories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Explore our diverse collection of art and crafts across different categories
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.path}>
              <CategoryCard
                title={category.title}
                description={category.description}
                images={category.images}
                path={category.path}
                variant="products"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
