import React from 'react';
import './css/home.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Mohin Shaikh</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="description">
            I craft responsive websites where technology meets creativity
          </p>
          
          <div className="cta-container">
            <button className="cta-button">Download CV</button>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="home-image">
          <div className="image-wrapper">
            <img src="public/assets/WhatsApp Image 2025-01-26 at 21.41.40_452bae73.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Home;