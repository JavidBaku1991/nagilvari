import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAdmin from './components/RequireAdmin';
import Navbar from './components/Navbar';
import './i18n';

const dataProvider = simpleRestProvider('http://localhost:4000'); // Placeholder, backend to be implemented

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/paintings" element={<Paintings />} />
          <Route path="/products/sculptures" element={<Sculptures />} />
          <Route path="/products/digital-art" element={<DigitalArt />} />
          <Route path="/products/photography" element={<Photography />} />
          <Route path="/products/ceramics" element={<Ceramics />} />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
