import React, { useState, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Pagination,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import ProductFilters from '../../components/ProductFilters';
import { useTranslation } from 'react-i18next';

const Sculptures: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sculptures = products.filter(product => product.category === 'sculptures');
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const productsPerPage = 12;

  // Calculate max price for the slider
  const maxPrice = Math.max(...sculptures.map(p => p.price));

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return sculptures
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
  }, [sculptures, searchQuery, sortBy, priceRange]);

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

  return (
    <Box sx={{ 
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 64px)',
      color: '#8B4513',
      paddingTop: '100px',
      paddingBottom: '40px'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          {t('categories.sculptures.title')}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#666' }}>
          {t('categories.sculptures.description')}
        </Typography>

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
                          color: '#8B4513',
                          '&:hover': {
                            backgroundColor: 'rgba(139, 69, 19, 0.1)',
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#8B4513',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: '#8B4513',
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
      </Container>
    </Box>
  );
};

export default Sculptures; 