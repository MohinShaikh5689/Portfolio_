import React from 'react';
import './css/home.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const handleDownloadCV = () => {
    const cvPath = 'assets/My_Cv.pdf';
    
    try {
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'Mohin_Shaikh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Error downloading CV. Please try again later.');
    }
  };

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
            <button className="cta-button" onClick={handleDownloadCV}>
              Download CV
            </button>
            <div className="social-links">
              <a href="https://github.com/MohinShaikh5689" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mohin-shaikh-26a75b285/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/mohinshaikh5689/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="home-image">
          <div className="image-wrapper">
            <img src="assets/WhatsApp Image 2025-01-26 at 21.41.40_452bae73.jpg" alt="Profile" />
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