import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'white',
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
      color: 'white',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: 'white',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: 'white',
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
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: 'white',
          color: '#000',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
        outlinedPrimary: {
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'white',
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'white',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          color: 'white',
        },
      },
    },
  },
});

export default theme; 