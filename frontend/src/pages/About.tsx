import React from 'react';
import '../css/About.css';
import hero1Img from '../images/hero1.jpg';

const About: React.FC = () => (
  <div className="about-page page" style={{
    minHeight: 'calc(100vh - 64px)', // Subtract navbar height
    padding: '80px 20px',
    background: 'white',
    marginBottom: 0
  }}>
    <div className="container">
      <h2 className="about-title text-center mb-5" style={{ color: '#8B4513' }}>About Nagilvari</h2>
      <div className="about-content card p-4 mx-auto mt-4" style={{
        maxWidth: '1000px',
        height: '300px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero1Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#8B4513',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <p >
          <strong >Nagilvari</strong> is a modern platform for discovering and sharing amazing products. Whether you are a creator, a business, or a shopper, our goal is to make it easy to showcase, browse, and connect with unique products from around the world.
        </p>
        <p>
          Our intuitive admin panel allows you to manage your product listings with ease, while users can explore a curated selection of items, complete with images, prices, and detailed descriptions. Built with the MERN stack and TypeScript, Nagilvari combines performance, security, and a beautiful user experience.
        </p>
        <p>
          Join us and be part of a growing community passionate about great products!
        </p>
      </div>
    </div>
  </div>
);

export default About; 