import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/VR.jpeg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 // const closeMenu = () => {
   // setIsMenuOpen(false);
  //};
  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
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
            to="/projects" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
           <NavLink 
            to="/partnership" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Partnership
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;