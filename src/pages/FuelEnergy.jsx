import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './FuelEnergy.css';





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
                <span className="services-hero-tag">WHAT FUEL AND ENERGY SERVICES WE OFFER</span>
                <h1>Fuel & Energy <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Bulk diesel, petrol & backup power solutions with real-time monitoring.
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
              <h2>Fuel & Enery  Services</h2>
              
            </div>
  <div className="container">
    <ul className="highlights-list">
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Bulk Fuel Supply</span>
      </li>
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Backup Power</span>
      </li>
      <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Real-time Monitoring</span>
      </li>
    </ul>
  </div>
</section>
        
        
      </main>

      <Footer />
    </>
  );
}