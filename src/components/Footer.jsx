import { NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/VR.jpeg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section brand-section">
            <NavLink to="/" className="footer-brand">
              <img 
                src={Logo} 
                alt="VHUTHELU Resources" 
                className="footer-logo" 
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">VHUTHELU</span>
                <span className="footer-brand-subtitle">RESOURCES (PTY) Ltd</span>
              </div>
            </NavLink>
            <p className="footer-description">
               Empowering People.Enabling Technology.Enhancing the Future
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section services-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Software Development</a></li>
              <li><a href="#">IT Support</a></li>
              <li><a href="#">Cloud & Network solutions</a></li>
              <li><a href="#">Skills Development</a></li>
              <li><a href="#">Workforce Solutions</a></li>
              <li><a href="#">Cybersecurity Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Main Street, Johannesburg<br />Gauteng, 2000, South Africa</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>083 474 9155</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>vhutheluresources@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Elegant Divider with Dots */}
        <div className="footer-decoration">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Footer Info Bar */}
        <div className="footer-info">
          <span>
            <i className="fas fa-registered"></i> Reg: 2021/136254/07
          </span>
          <span className="separator">◆</span>
          <span>
            <i ></i> B-BBEE Level 1
          </span>
          <span className="separator">◆</span>
          <span>
            <i className="fas fa-map-pin"></i> Gauteng, South Africa
          </span>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; {currentYear} VHUTHELU RESOURCES (PTY) Ltd. 
            All Rights Reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="legal-separator">|</span>
            <a href="#">Terms of Service</a>
            <span className="legal-separator">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;