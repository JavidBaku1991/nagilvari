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
  InputBase
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
        backgroundColor: isScrolled ? 'var(--secondary-main)' : 'transparent',
        boxShadow: isScrolled ? 2 : 0,
        transition: 'all 0.3s ease-in-out',
        color: '#8B4513',
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
            sx={{
              flexGrow: 1,
              color:   '#8B4513' ,
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.3s ease-in-out'
            }}
          >
            Nagilvari
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', width: '250px'}}>
                <InputBase
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    backgroundColor: isScrolled ? '#f5f5f5' : 'rgba(255, 255, 255, 0.5)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    width: '300px',
                    color: '#8B4513',
                    transition: 'all 0.3s ease-in-out',
                    '&::placeholder': {
                      color: isScrolled ? '#666' : 'rgba(255, 255, 255, 0.7)',
                      transition: 'color 0.3s ease-in-out'
                    }
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    color: '#8B4513',
                    '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' },
                    transition: 'color 0.3s ease-in-out'
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
                    '&:hover': { backgroundColor: 'rgba(139, 69, 19, 0.1)' },
                    transition: 'color 0.3s ease-in-out'
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
                  color: '#8B4513',
                  transition: 'color 0.3s ease-in-out'
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
                  color: '#8B4513',
                  transition: 'color 0.3s ease-in-out'
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
                  color: '#8B4513',
                  transition: 'color 0.3s ease-in-out'
                }}
              >
                <TwitterIcon />
              </IconButton>

              <LanguageSwitcher />
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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