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
  Menu,
  MenuItem
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';
import logo from '../images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];

  const productCategories = [
    { label: 'All Products', path: '/products' },
    { label: 'Paintings', path: '/products/paintings' },
    { label: 'Sculptures', path: '/products/sculptures' },

    { label: 'Ceramics', path: '/products/ceramics' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
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
      // Scroll to top after search navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryNavigation = (path: string) => {
    handleNavigation(path);
    handleMenuClose();
  };

  // Keyframes for logo scaling animation
  const logoScaleKeyframes = `@keyframes logo-scale { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }`;

  return (
    <>
      <style>{logoScaleKeyframes}</style>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'var(--secondary-main)' : 'transparent',
          boxShadow: isScrolled ? 2 : 0,
          transition: 'all 0.3s ease-in-out',
          color: 'var(--secondary-main)',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            height: '100%'
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              onClick={() => handleNavigation('/')}
              sx={{
                flexGrow: 1,
                color:  isScrolled ? 'white' : 'var(--secondary-main)',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease-in-out',
                cursor:'pointer',
                '&:hover': {
                  color: isScrolled ? '#f0f0f0' : '#DEB887',
                  transform: 'scale(1.1)',
                  textShadow: '0 0 8px rgba(210, 180, 140, 0.5)'
                }
              }}
            >
              Naghilvari
            </Typography>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', width: '250px'}}>
                  <InputBase
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      backgroundColor: isScrolled ? 'var(---main)' : 'rgba(255, 255, 255, 0.5)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      width: '300px',
                      color: isScrolled ? 'white' : 'var(--secondary-main)',
                      transition: 'all 0.3s ease-in-out',
                      '&::placeholder': {
                        color: isScrolled ? '#666' : 'rgba(255, 255, 255, 0.7)',
                        transition: 'color 0.3s ease-in-out'
                      },
                      '&:hover': {
                        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
                        transform: 'scale(1.02)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                      },
                      '&:focus-within': {
                        backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0.8)',
                        transform: 'scale(1.02)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                      }
                    }}
                  />
                  <IconButton
                    type="submit"
                    sx={{
                      color: 'var(--secondary-main)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': { 
                        backgroundColor: 'rgba(210, 180, 140, 0.2)',
                        transform: 'scale(1.1) rotate(5deg)',
                        color: '#DEB887',
                        boxShadow: '0 4px 12px rgba(210, 180, 140, 0.3)'
                      }
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </form>

                <Button
                  aria-controls="products-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{
                    color: isScrolled ? 'white' : 'var(--secondary-main)',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    '&:hover': { 
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                      transform: 'translateY(-2px)',
                      color: isScrolled ? '#f0f0f0' : '#DEB887',
                      boxShadow: '0 4px 12px rgba(210, 180, 140, 0.3)',
                      border: '1px solid rgba(210, 180, 140, 0.3)'
                    }
                  }}
                >
                  Products
                </Button>
                <Menu
                  id="products-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(210, 180, 140, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      borderRadius: '12px',
                      mt: 1
                    }
                  }}
                  disableScrollLock={true}
                >
                  {productCategories.map((category) => (
                    <MenuItem
                      sx={{
                        color: 'var(--secondary-main)',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: 'rgba(210, 180, 140, 0.15)',
                          color: '#DEB887',
                          transform: 'translateX(4px)'
                        }
                      }}
                      key={category.path} 
                      onClick={() => handleCategoryNavigation(category.path)}
                    >
                      {category.label}
                    </MenuItem>
                  ))}
                </Menu>

                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: isScrolled ? 'white' : 'var(--secondary-main)',
                      transition: 'all 0.3s ease-in-out',
                      borderRadius: '20px',
                      padding: '8px 16px',
                      '&:hover': { 
                        backgroundColor: 'rgba(210, 180, 140, 0.2)',
                        transform: 'translateY(-2px)',
                        color: isScrolled ? '#f0f0f0' : '#DEB887',
                        boxShadow: '0 4px 12px rgba(210, 180, 140, 0.3)',
                        border: '1px solid rgba(210, 180, 140, 0.3)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: isScrolled ? 'white' : 'var(--secondary-main)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { 
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                      transform: 'scale(1.1) rotate(5deg)',
                      color: '#1877F2',
                      boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)'
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: isScrolled ? 'white' : 'var(--secondary-main)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { 
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                      transform: 'scale(1.1) rotate(5deg)',
                      color: '#E4405F',
                      boxShadow: '0 4px 12px rgba(228, 64, 95, 0.3)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: isScrolled ? 'white' : 'var(--secondary-main)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { 
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                      transform: 'scale(1.1) rotate(5deg)',
                      color: '#1DA1F2',
                      boxShadow: '0 4px 12px rgba(29, 161, 242, 0.3)'
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <LanguageSwitcher isScrolled={isScrolled} />
              </Box>
            )}

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LanguageSwitcher isScrolled={isScrolled} />
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: isScrolled ? 'white' : 'var(--secondary-main)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': { 
                      backgroundColor: 'rgba(210, 180, 140, 0.2)',
                      transform: 'scale(1.1) rotate(5deg)',
                      color: '#DEB887',
                      boxShadow: '0 4px 12px rgba(210, 180, 140, 0.3)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <MobileDrawer open={isMenuOpen} onClose={handleDrawerToggle} isScrolled={isScrolled} />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;