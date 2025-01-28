import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './css/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
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
                <div className="footer-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className="copyright">
                    © {currentYear} Mohin Shaikh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;