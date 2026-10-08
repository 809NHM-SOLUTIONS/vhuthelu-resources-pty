import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './CropCattleServices.css';




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
                <span className="services-hero-tag">WHAT LOGISTICS SERVICES WE OFFER</span>
                <h1>Logistics <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Efficient transportation and supply chain management solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. CROP FARMING SERVICES SECTION */}
        <section id="crop-services-grid" className="services-grid-section">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-truck"></i>
                <span className="line"></span>
              </div>
              <h2>Logistics Services</h2>
            </div>

            
          </div>
        </section>

        </main>

      <Footer />
    </>
  );
}