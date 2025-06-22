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
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
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
        sx: { width: 280 }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LanguageSwitcher />
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      
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
                  <IconButton type="submit" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#eeeeee',
                },
                '&.Mui-focused': {
                  backgroundColor: 'white',
                },
              },
            }}
          />
        </form>
      </Box>
      
      <Divider />
      
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleProductsClick}>
            <ListItemIcon><ProductsIcon /></ListItemIcon>
            <ListItemText primary="Products" />
            {productsOpen ? <ExpandLess /> : <ExpandMore />}
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
                sx={{ pl: 4 }}
              >
                <ListItemText primary={category.text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default MobileDrawer; 