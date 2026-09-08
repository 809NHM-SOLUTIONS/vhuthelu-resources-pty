import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './MiningSupport.css';





export default function Services() {
  return (
    <>
      <Header />
      
      <main className="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <div className="services-hero-text">
                <span className="services-hero-tag">WHAT MINING SUPPORT SERVICES WE OFFER</span>
                <h1>Mining Support <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  On‑site fuel depots, logistics & inventory control for remote mines.
                </p>
                
              </div>
            </div>
          </div>
        </section>
  
<section className="crop-cattle-highlights">
    <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-cogs"></i>
                <span className="line"></span>
              </div>
              <h2>Mining Support  Services</h2>
              
            </div>
  <div className="container">
    <ul className="highlights-list">
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>On-Site Depots</span>
      </li>
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Logistics</span>
      </li>
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Invetory Control</span>
      </li>
    </ul>
  </div>
</section>
        
        
      </main>

      <Footer />
    </>
  );
}