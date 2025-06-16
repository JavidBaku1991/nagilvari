import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import AppRoutes from './routes';
import { LoadingProvider } from './context/LoadingContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <Router>
          <AppRoutes />
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
