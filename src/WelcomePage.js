import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="image-wrapper">
        <img src="/images/welcome.jpg" alt="Welcome" className="welcome-image" />

        <div className="welcome-box-overlay">
          <h1 className="welcome-text">Welcome to our App</h1>
          <button className="start-button" onClick={() => navigate('/login')}>
            Let's Start Shopping Together
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
