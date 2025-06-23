import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  ListItemButton,
  Collapse,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingBag as ProductsIcon,
  Info as AboutIcon,
  ContactMail as ContactIcon,
  AdminPanelSettings as AdminIcon,
  Close as CloseIcon,
  Help as HelpIcon,
  ExpandLess,
  ExpandMore,
  Search as SearchIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  isScrolled?: boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, isScrolled = false }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const productCategories = [
    { text: 'Paintings', path: '/products/paintings' },
    { text: 'Sculptures', path: '/products/sculptures' },
    { text: 'Digital Art', path: '/products/digital-art' },
    { text: 'Photography', path: '/products/photography' },
    { text: 'Ceramics', path: '/products/ceramics' }
  ];

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <AboutIcon />, path: '/about' },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact' },
    { text: 'FAQ', icon: <HelpIcon />, path: '/faq' },
    { text: 'Admin', icon: <AdminIcon />, path: '/admin' }
  ];

  const handleProductsClick = () => {
    setProductsOpen(!productsOpen);
  };

  const handleNavigation = (path: string) => {
    onClose();
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      onClose();
      // Scroll to top after search navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: 280,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid var(--secondary-main)',
        }
      }}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid var(--secondary-main)',
      }}>
        <LanguageSwitcher isScrolled={isScrolled} />
        <IconButton 
          onClick={onClose}
          sx={{ 
            color: 'var(--secondary-main)',
            '&:hover': {
              backgroundColor: 'rgba(210, 180, 140, 0.1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'var(--secondary-main)' }} />
      
      {/* Search Form */}
      <Box sx={{ p: 2 }}>
        <form onSubmit={handleSearch}>
          <TextField
            fullWidth
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    type="submit" 
                    edge="end"
                    sx={{ 
                      color: 'var(--secondary-main)',
                      '&:hover': {
                        backgroundColor: 'rgba(210, 180, 140, 0.1)',
                      }
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                backgroundColor: 'rgba(210, 180, 140, 0.1)',
                color: 'var(--secondary-main)',
                '& fieldset': {
                  borderColor: 'var(--secondary-main)',
                },
                '&:hover fieldset': {
                  borderColor: 'var(--secondary-main)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--secondary-main)',
                },
                '&:hover': {
                  backgroundColor: 'rgba(210, 180, 140, 0.15)',
                },
                '&.Mui-focused': {
                  backgroundColor: 'rgba(210, 180, 140, 0.2)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'var(--secondary-main)',
                '&.Mui-focused': {
                  color: 'var(--secondary-main)',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'var(--secondary-main)',
                opacity: 0.7,
              },
            }}
          />
        </form>
      </Box>
      
      <Divider sx={{ borderColor: 'var(--secondary-main)' }} />
      
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                color: 'var(--secondary-main)',
                '&:hover': {
                  backgroundColor: 'rgba(210, 180, 140, 0.1)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(210, 180, 140, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(210, 180, 140, 0.25)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'var(--secondary-main)' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: 'var(--secondary-main)',
                    fontWeight: 500,
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            onClick={handleProductsClick}
            sx={{
              color: 'var(--secondary-main)',
              '&:hover': {
                backgroundColor: 'rgba(210, 180, 140, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'var(--secondary-main)' }}>
              <ProductsIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Products" 
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: 'var(--secondary-main)',
                  fontWeight: 500,
                }
              }}
            />
            {productsOpen ? 
              <ExpandLess sx={{ color: 'var(--secondary-main)' }} /> : 
              <ExpandMore sx={{ color: 'var(--secondary-main)' }} />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={productsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {productCategories.map((category) => (
              <ListItemButton
                key={category.path}
                component={Link}
                to={category.path}
                onClick={() => handleNavigation(category.path)}
                sx={{ 
                  pl: 4,
                  color: 'var(--secondary-main)',
                  '&:hover': {
                    backgroundColor: 'rgba(210, 180, 140, 0.1)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(210, 180, 140, 0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                    },
                  },
                }}
              >
                <ListItemText 
                  primary={category.text} 
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      color: 'var(--secondary-main)',
                      fontSize: '0.9rem',
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default MobileDrawer; 