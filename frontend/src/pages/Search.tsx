import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Pagination,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { useTranslation } from 'react-i18next';

import search from '../images/search.jpg'

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const productsPerPage = 12;

  // Calculate max price for the slider
  const maxPrice = Math.max(...products.map(p => p.price));

  // Search and filter products
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    
    return products.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.artist.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      (product.dimensions && product.dimensions.toLowerCase().includes(searchTerm))
    );
  }, [query]);

  // Apply additional filters to search results
  const filteredProducts = useMemo(() => {
    return searchResults
      .filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'title':
            return a.title.localeCompare(b.title);
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }, [searchResults, searchQuery, sortBy, priceRange]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Event handlers
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
    setCurrentPage(1);
  };

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
    setCurrentPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('title');
    setPriceRange([0, maxPrice]);
    setCurrentPage(1);
  };

  // Reset page when query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <Box sx={{ 
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: 'white',
      paddingTop: '100px',
      paddingBottom: '40px',
      backgroundImage: `url(${search})`,
      backgroundSize: 'cover'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          {t('common.search')}
        </Typography>
        
        {query && (
          <Typography variant="h4" component="h2" align="center" sx={{ mb: 1, color: 'white' }}>
            Results for "{query}"
          </Typography>
        )}

        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: 'white' }}>
          {searchResults.length > 0 
            ? `Found ${searchResults.length} product${searchResults.length !== 1 ? 's' : ''}`
            : 'No products found'
          }
        </Typography>

        {searchResults.length > 0 && (
          <Grid container spacing={3}>
            {!isMobile && (
              <Grid item xs={12} md={3}>
                <Box sx={{ position: 'sticky', top: '100px' }}>
                  <ProductFilters
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                    sortBy={sortBy}
                    onSortChange={handleSortChange}
                    priceRange={priceRange}
                    onPriceChange={handlePriceChange}
                    onResetFilters={resetFilters}
                    filterOpen={filterOpen}
                    onFilterOpenChange={setFilterOpen}
                    maxPrice={maxPrice}
                  />
                </Box>
              </Grid>
            )}

            <Grid item xs={12} md={isMobile ? 12 : 9}>
              {isMobile && (
                <ProductFilters
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                  sortBy={sortBy}
                  onSortChange={handleSortChange}
                  priceRange={priceRange}
                  onPriceChange={handlePriceChange}
                  onResetFilters={resetFilters}
                  filterOpen={filterOpen}
                  onFilterOpenChange={setFilterOpen}
                  maxPrice={maxPrice}
                />
              )}

              {filteredProducts.length === 0 ? (
                <Typography align="center" color="text.secondary" sx={{ py: 8 }}>
                  {t('products.noProducts')}
                </Typography>
              ) : (
                <>
                  <Grid container spacing={4}>
                    {paginatedProducts.map(product => (
                      <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>

                  {totalPages > 1 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        sx={{
                          '& .MuiPaginationItem-root': {
                            backgroundColor: 'var(--secondary-main)',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'rgba(139, 69, 19, 0.1)',
                            },
                            '&.Mui-selected': {
                              backgroundColor: 'white',
                              color: 'black',
                              '&:hover': {
                                backgroundColor: 'white',
                              },
                            },
                          },
                        }}
                      />
                    </Box>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        )}

        {searchResults.length === 0 && query && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              No products found for "{query}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Try searching with different keywords or browse our categories
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Search tips: Try searching by product name, artist, category, or description
            </Typography>
          </Box>
        )}

        {!query && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              Enter a search term to find products
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Search for products by name, artist, category, or description
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Search; 