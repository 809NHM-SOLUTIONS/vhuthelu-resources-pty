import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './FuelEnergy.css';

const FUEL_ENERGY_SERVICES = [
  {
    image: "https://www.servicelinksa.co.za/wp-content/themes/servicelinksa-theme/assets/images/services/bulk-fuel-supply/fuel-delivery-equipment.jpg",
    icon: 'fas fa-gas-pump',
    title: 'Diesel, Petrol and LPG',
    description: 'Scheduled and emergency bulk fuel delivery, on-site storage, and strict quality control for commercial fleets, mines, farms, and industrial sites.',
    features: [
      'High-Volume Delivery & Logistics',
      'On-Site Fuel Storage & Management',
      'Fuel Quality & Compliance Assurance',
    ],
  },
  
];

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
                <h1>Fuel and Energy <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Bulk fuel supply, backup power, and real-time telematics — keeping your operations running without interruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="fuel-energy-services-grid" className="services-grid-section">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-bolt"></i>
                <span className="line"></span>
              </div>
              <h2>Fuel and Energy Services</h2>
            </div>

            <div className="services-grid">
              {FUEL_ENERGY_SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}