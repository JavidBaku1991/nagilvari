import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import i18n from '../i18n';

function useCssVariable(varName: string, fallback: string) {
  if (typeof window !== 'undefined') {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName);
    return value ? value.trim() : fallback;
  }
  return fallback;
}

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { t } = useTranslation();
  const secondaryMain = '#D2B48C';

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'az', label: 'Azərbaycan' },
  ];

  const buttonSx = {
    color: isScrolled ? 'white' : 'var(--secondary-main)',
    borderColor: isScrolled ? 'white' : 'var(--secondary-main)',
    fontWeight: 600,
    fontSize: '0.75rem',
    borderRadius: '6px',
    textTransform: 'none',
    px: 1.5,
    '&:hover': {
      backgroundColor: `$20`,
      borderColor: isScrolled ? 'white' : 'var(--secondary-main)',
    },
    '& .MuiSvgIcon-root': {
      color: isScrolled ? 'white' : 'var(--secondary-main)',
    },
  };

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        endIcon={<ArrowDropDownIcon />}
        variant="outlined"
        size="small"
        sx={buttonSx}
      >
        {i18n.language.toUpperCase()}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${secondaryMain}`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }
        }}
        disableScrollLock={true}
      >
        {languages.map(({ code, label }) => (
          <MenuItem
            key={code}
            selected={i18n.language === code}
            onClick={() => changeLanguage(code)}
            sx={{ 
              color: 'var(--secondary-main)',
              fontWeight: i18n.language === code ? 600 : 400,
              '&:hover': {
                backgroundColor: `${secondaryMain}15`,
              },
              '&.Mui-selected': {
                backgroundColor: `${secondaryMain}20`,
                '&:hover': {
                  backgroundColor: `${secondaryMain}25`,
                },
              },
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
