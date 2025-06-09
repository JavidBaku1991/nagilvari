import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  InputBase,
  Badge
} from '@mui/material';
import { 
  ShoppingCart as ShoppingCartIcon, 
  Search as SearchIcon,
  Menu as MenuIcon 
} from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: isScrolled ? 2 : 0,
        transition: 'box-shadow 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: '#8B4513',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Nagilvari
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                <InputBase
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    width: '300px'
                  }}
                />
                <IconButton 
                  type="submit" 
                  sx={{ 
                    color: '#8B4513',
                    '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </form>

              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{ 
                    color: '#8B4513',
                    '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton
                component={Link}
                to="/cart"
                sx={{ 
                  color: '#8B4513',
                  '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
                }}
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <LanguageSwitcher />
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                component={Link}
                to="/cart"
                sx={{ 
                  color: '#8B4513',
                  '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
                }}
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ 
                  color: '#8B4513',
                  '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' }
                }}
              >
                <MenuIcon />
              </IconButton>
              <MobileDrawer open={isMenuOpen} onClose={handleDrawerToggle} />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 