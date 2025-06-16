import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvestorCallToAction.css';
import investor from '../images/hero12.jpg';

const InvestorCallToAction: React.FC = () => {
  const navigate = useNavigate();

  const handleWriteUs = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="investor-container">
      <div className="investor-content">
        <div className="investor-image-container">
          <img
            src={investor}
            alt="Investor Call to Action"
            className="investor-image"
          />
        </div>
        <div className="investor-text-container">
          <h2 className="investor-title">Join Our Growing Marketplace</h2>
          <p className="investor-description">
            Are you a project owner looking to showcase your products? Or an investor seeking new opportunities?
            Our platform connects innovative projects with potential investors and customers. Bring your products
            to our marketplace and reach a wider audience while growing your business.
          </p>
          <div className="investor-button-container">
            <button className="investor-button primary" onClick={handleLearnMore}>
              Learn More
            </button>
            <button className="investor-button secondary" onClick={handleWriteUs}>
              Write to Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorCallToAction;