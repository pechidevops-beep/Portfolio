import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'glass scraped' : ''}`}>
      <div className="nav-content container">
        <a href="#home" className="nav-logo heading-serif text-gradient">
          Port<span style={{color: 'var(--text-primary)'}}>folio</span>.
        </a>
        
        <div className="nav-links desktop-only">
          <a href="#about" className="nav-link hover-target">About</a>
          <a href="#skills" className="nav-link hover-target">Skills</a>
          <a href="#projects" className="nav-link hover-target">Projects</a>
          <a href="#contact" className="nav-link hover-target">Contact</a>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle hover-target" aria-label="Toggle Theme">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button 
            className="mobile-menu-btn mobile-only hover-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} glass`}>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
