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
  alpha,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const productCategories = [
    { label: 'Paintings', path: '/products/paintings' },
    { label: 'Sculptures', path: '/products/sculptures' },
    { label: 'Digital Art', path: '/products/digital-art' },
    { label: 'Photography', path: '/products/photography' },
    { label: 'Ceramics', path: '/products/ceramics' }
  ];

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
    console.log('Searching for:', searchQuery);
  };

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' }
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out',
          paddingTop: '20px'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: '64px' }}>
            {isMobile && (
              <IconButton
                color="inherit"
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
                  color="inherit"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                color="inherit"
                onClick={handleProductsMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Products
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProductsMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white'
                  }
                }}
              >
                {productCategories.map((category) => (
                  <MenuItem
                    key={category.path}
                    component={Link}
                    to={category.path}
                    onClick={handleProductsMenuClose}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {category.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                position: 'relative',
                borderRadius: 1,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                mr: 2,
                width: { sm: 'auto', md: 300 }
              }}
            >
              <IconButton
                type="submit"
                sx={{
                  padding: '10px',
                  color: 'white'
                }}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  color: 'white',
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
                  color="inherit"
                  size="small"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
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