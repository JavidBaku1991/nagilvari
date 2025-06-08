import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  ListItemButton
} from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingBag as ProductsIcon,
  Info as AboutIcon,
  ContactMail as ContactIcon,
  AdminPanelSettings as AdminIcon,
  Close as CloseIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Products', icon: <ProductsIcon />, path: '/products' },
    { text: 'About', icon: <AboutIcon />, path: '/about' },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact' },
    { text: 'FAQ', icon: <HelpIcon />, path: '/faq' },
    { text: 'Admin', icon: <AdminIcon />, path: '/admin' }
  ];

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
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={onClose}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer; 