import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Brown color used in the application
      light: '#A0522D',
      dark: '#654321',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D2B48C', // Tan color
      light: '#DEB887',
      dark: '#CD853F',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      color: '#8B4513',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#8B4513',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#8B4513',
    },
    body1: {
      fontSize: '1rem',
      color: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme; 