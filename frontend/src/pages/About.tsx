import React from 'react';
import '../css/About.css';
import footerImg from '../images/footer.jpg';



const About: React.FC = () => (
  <div className="about-page page">
    <h2 className="about-title">About Nagilvari</h2>
    <div className="about-img-wrapper mb-4">
      <img src={footerImg} alt="About Nagilvari" className="about-img" />
    </div>
    <div className="about-content card p-4 mx-auto mt-4" style={{maxWidth: '700px'}}>
      <p>
        <strong>Nagilvari</strong> is a modern platform for discovering and sharing amazing products. Whether you are a creator, a business, or a shopper, our goal is to make it easy to showcase, browse, and connect with unique products from around the world.
      </p>
      <p>
        Our intuitive admin panel allows you to manage your product listings with ease, while users can explore a curated selection of items, complete with images, prices, and detailed descriptions. Built with the MERN stack and TypeScript, Nagilvari combines performance, security, and a beautiful user experience.
      </p>
      <p>
        Join us and be part of a growing community passionate about great products!
      </p>
    </div>
  </div>
);

export default About; 