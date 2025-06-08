import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  InputBase,
  Badge,
  alpha
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {isMobile && (
              <IconButton
                color={isScrolled ? "inherit" : "primary"}
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  color={isScrolled ? "inherit" : "primary"}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    '&:hover': {
                      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                position: 'relative',
                borderRadius: 1,
                backgroundColor: isScrolled ? alpha(theme.palette.common.black, 0.05) : alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                  backgroundColor: isScrolled ? alpha(theme.palette.common.black, 0.08) : alpha(theme.palette.common.white, 0.25),
                },
                mr: 2,
                width: { sm: 'auto', md: 300 }
              }}
            >
              <IconButton
                type="submit"
                sx={{
                  padding: '10px',
                  color: isScrolled ? 'inherit' : 'white'
                }}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  color: isScrolled ? 'inherit' : 'white',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: '8px 8px 8px 0',
                    width: '100%'
                  }
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageSwitcher />
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isScrolled ? "inherit" : "primary"}
                  size="small"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isScrolled ? "inherit" : "primary"}
                  size="small"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isScrolled ? "inherit" : "primary"}
                  size="small"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default Navbar; 