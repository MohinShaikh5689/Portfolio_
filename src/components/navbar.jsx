import { useState, useEffect } from 'react';
import '../components/css/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '#home', delay: 1 },
    { name: 'About', link: '#about', delay: 2 },
    { name: 'Projects', link: '#projects', delay: 3 },
    { name: 'Contact', link: '#contact', delay: 5 }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <a href="/" className="logo-text">
          <span className="gradient-text">PORTFOLIO</span>
        </a>
      </div>
      
      <button 
        className={`nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <li key={item.name}>
            <a 
              href={item.link} 
              onClick={() => setIsOpen(false)}
              style={{ '--i': item.delay }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;