import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import FAQ from './pages/FAQ';
import Paintings from './pages/products/Paintings';
import Sculptures from './pages/products/Sculptures';
import DigitalArt from './pages/products/DigitalArt';
import Photography from './pages/products/Photography';
import Ceramics from './pages/products/Ceramics';
import PaintingsPage from './pages/PaintingsPage';
import SculpturesPage from './pages/SculpturesPage';
import DigitalArtPage from './pages/DigitalArtPage';
import PhotographyPage from './pages/PhotographyPage';
import CeramicsPage from './pages/CeramicsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAdmin from './components/RequireAdmin';
import Navbar from './components/Navbar';
import './i18n';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { useLoadingNavigation } from './hooks/useLoadingNavigation';

const dataProvider = simpleRestProvider('http://localhost:4000'); // Placeholder, backend to be implemented

const AppRoutes: React.FC = () => {
  useLoadingNavigation();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/paintings" element={<PaintingsPage />} />
        <Route path="/products/sculptures" element={<SculpturesPage />} />
        <Route path="/products/digital-art" element={<DigitalArtPage />} />
        <Route path="/products/photography" element={<PhotographyPage />} />
        <Route path="/products/ceramics" element={<CeramicsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={
          <RequireAdmin>
            <Admin dataProvider={dataProvider}>
              <Resource name="products" list={ListGuesser} />
            </Admin>
          </RequireAdmin>
        } />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes; 