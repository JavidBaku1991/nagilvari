import React from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sortBy: string;
  onSortChange: (event: any) => void;
  priceRange: [number, number];
  onPriceChange: (event: any, newValue: number | number[]) => void;
  onResetFilters: () => void;
  filterOpen: boolean;
  onFilterOpenChange: (open: boolean) => void;
  maxPrice?: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceChange,
  onResetFilters,
  filterOpen,
  onFilterOpenChange,
  maxPrice = 1000
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const FilterContent = () => (
    <Box sx={{ 
      p: 2,
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2 
      }}>
        <Typography variant="h6">{t('products.filters.title')}</Typography>
        {isMobile && (
          <IconButton onClick={() => onFilterOpenChange(false)}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>{t('products.filters.sort')}</InputLabel>
        <Select
          value={sortBy}
          label={t('products.filters.sort')}
          onChange={onSortChange}
        >
          <MenuItem value="title">{t('products.filters.sortByName')}</MenuItem>
          <MenuItem value="priceAsc">{t('products.filters.sortByPriceAsc')}</MenuItem>
          <MenuItem value="priceDesc">{t('products.filters.sortByPriceDesc')}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label={t('products.filters.search')}
        value={searchQuery}
        onChange={onSearchChange}
        sx={{ mb: 2 }}
      />

      <Typography gutterBottom>{t('products.filters.priceRange')}</Typography>
      <Slider
        value={priceRange}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={maxPrice}
        sx={{ mb: 2 }}
      />

      <Button
        fullWidth
        variant="outlined"
        onClick={onResetFilters}
        sx={{ mb: 2 }}
      >
        {t('products.filters.reset')}
      </Button>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={() => onFilterOpenChange(true)}
          sx={{ mb: 2 }}
        >
          {t('products.filters.title')}
        </Button>
      )}

      {!isMobile && <FilterContent />}

      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => onFilterOpenChange(false)}
      >
        <Box sx={{ width: 280 }}>
          <FilterContent />
        </Box>
      </Drawer>
    </>
  );
};

export default ProductFilters; 