import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import Search from './pages/Search';
import Paintings from './pages/products/Paintings';
import Sculptures from './pages/products/Sculptures';
import DigitalArt from './pages/products/DigitalArt';
import Photography from './pages/products/Photography';
import Ceramics from './pages/products/Ceramics';
import './i18n/config';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkIcon from '@mui/icons-material/Work';
import { Box } from '@mui/material';
import { useScrollToTop } from './hooks/useScrollToTop';

// Component that uses the scroll to top hook inside Router context
const AppContent: React.FC = () => {
  // Scroll to top on route changes
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/paintings" element={<Paintings />} />
          <Route path="/products/sculptures" element={<Sculptures />} />
          <Route path="/products/digital-art" element={<DigitalArt />} />
          <Route path="/products/photography" element={<Photography />} />
          <Route path="/products/ceramics" element={<Ceramics />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      {/* Global SpeedDial */}
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1300 }}>
        <SpeedDial
          icon={<WorkIcon sx={{ color: 'var(--secondary-main)' , backgroundColor: 'transparent'}} />}
          sx={{backgroundColor: 'transparent'}}
          ariaLabel="Share on social media"
          FabProps={{
            sx: {
              backgroundColor: 'white',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          <SpeedDialAction
            icon={<FacebookIcon sx={{ color: '#1877F3' }} />}
            tooltipTitle="Facebook"
            onClick={() => window.open('https://facebook.com', '_blank')}
          />
          <SpeedDialAction
            icon={<TwitterIcon sx={{ color: '#1DA1F2' }} />}
            tooltipTitle="Twitter"
            onClick={() => window.open('https://twitter.com', '_blank')}
          />
          <SpeedDialAction
            icon={<InstagramIcon sx={{ color: '#E4405F' }} />}
            tooltipTitle="Instagram"
            onClick={() => window.open('https://instagram.com', '_blank')}
          />
          <SpeedDialAction
            icon={<WorkIcon sx={{ color: '#2164F3' }} />}
            tooltipTitle="Indeed"
            onClick={() => window.open('https://indeed.com', '_blank')}
          />
        </SpeedDial>
      </Box>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
