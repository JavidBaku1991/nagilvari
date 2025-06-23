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
      backgroundColor: 'var(--secondary-main)',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3 
      }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
          {t('products.filters.title')}
        </Typography>
        {isMobile && (
          <IconButton 
            onClick={() => onFilterOpenChange(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel sx={{ color: 'white' }}>{t('products.filters.sort')}</InputLabel>
        <Select
          value={sortBy}
          label={t('products.filters.sort')}
          onChange={onSortChange}
          sx={{
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.8)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'white',
            },
          }}
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
        sx={{ 
          mb: 3,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.8)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          },
        }}
      />

      <Typography gutterBottom sx={{ color: 'white', fontWeight: 500, mb: 1 }}>
        {t('products.filters.priceRange')}
      </Typography>
      <Slider
        value={priceRange}
        onChange={onPriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={maxPrice}
        sx={{ 
          mb: 3,
          '& .MuiSlider-track': {
            backgroundColor: 'white',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white',
            },
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: 'white',
            color: 'var(--secondary-main)',
          },
        }}
      />

      <Button
        fullWidth
        variant="outlined"
        onClick={onResetFilters}
        sx={{ 
          mb: 2,
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'white',
          },
        }}
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
          sx={{ 
            mb: 2,
            color: 'var(--secondary-main)',
            borderColor: 'var(--secondary-main)',
            '&:hover': {
              backgroundColor: 'rgba(210, 180, 140, 0.1)',
              borderColor: 'var(--secondary-main)',
            },
          }}
        >
          {t('products.filters.title')}
        </Button>
      )}

      {!isMobile && <FilterContent />}

      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => onFilterOpenChange(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'var(--secondary-main)',
          }
        }}
      >
        <Box sx={{ width: 280 }}>
          <FilterContent />
        </Box>
      </Drawer>
    </>
  );
};

export default ProductFilters; 