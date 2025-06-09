import React, { useState, useMemo } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Slider,
  Paper
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import image from '../images/hero.jpeg';

interface CategoryPageProps {
  categoryName: string;
  categoryDescription: string;
}

const mockProducts = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is a description for product 1.',
    price: 99.99,
    image: image,
    rating: 4.5,
    category: 'Paintings'
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is a description for product 2.',
    price: 149.99,
    image: image,
    rating: 4.0,
    category: 'Paintings'
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is a description for product 3.',
    price: 199.99,
    image: image,
    rating: 4.8,
    category: 'Paintings'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' }
];

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, categoryDescription }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const filteredAndSortedProducts = useMemo(() => {
    return mockProducts
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchQuery, priceRange, sortBy]);

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
            {categoryName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            {categoryDescription}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Filters */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Filters
              </Typography>
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Search"
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size="small"
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography gutterBottom>Price Range</Typography>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  step={10}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">${priceRange[0]}</Typography>
                  <Typography variant="body2">${priceRange[1]}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Products Grid */}
          <Grid item xs={12} md={9}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                >
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Grid container spacing={3}>
              {filteredAndSortedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard {...product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryPage; 