import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/VR.jpeg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand/Logo */}
        <NavLink to="/" className="header-brand" onClick={closeMenu}>
          <img 
            src={Logo} 
            alt="VHUTHELU Resources" 
            className="header-logo" 
          />
          <div className="brand-text">
            <span className="brand-name">VHUTHELU</span>
            <span className="brand-subtitle">RESOURCES (PTY) Ltd</span>
          </div>
        </NavLink>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          
          {/* Contact Button inside nav for mobile */}
          <NavLink to="/contact" className="header-button" onClick={closeMenu}>
            Get in Touch
            <span className="button-arrow">→</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;