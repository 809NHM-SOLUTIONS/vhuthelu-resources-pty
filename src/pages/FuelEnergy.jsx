import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './Services.css';

const FUEL_ENERGY_SERVICES = [
  {
    image: "https://www.servicelinksa.co.za/wp-content/themes/servicelinksa-theme/assets/images/services/bulk-fuel-supply/fuel-delivery-equipment.jpg",
    icon: 'fas fa-gas-pump',
    title: 'Bulk Fuel Supply (Diesel & Petrol)',
    description: 'Scheduled and emergency bulk fuel delivery, on-site storage, and strict quality control for commercial fleets, mines, farms, and industrial sites.',
    features: [
      'High-Volume Delivery & Logistics',
      'On-Site Fuel Storage & Management',
      'Fuel Quality & Compliance Assurance',
    ],
  },
  {
    image: "https://www.facilitiesnet.com/resources/editorial/2024/shutterstock_2310716045-sized.png",
    icon: 'fas fa-bolt',
    title: 'Backup Power Solutions',
    description: 'Turnkey generator systems, hybrid renewable integration, and seamless UPS distribution to keep critical operations running without interruption.',
    features: [
      'Turnkey Generator Systems',
      'Hybrid & Renewable Energy Integration',
      'Uninterruptible Power Supply (UPS) & Distribution',
    ],
  },
  {
    image: "https://images.business.com/app/uploads/2022/03/23021350/data_fizkes_getty-3.jpg",
    icon: 'fas fa-satellite-dish',
    title: 'Real-Time Monitoring & Telematics',
    description: 'IoT-driven tank telemetry, theft and leak detection, and live generator performance tracking to protect assets and cut operating costs.',
    features: [
      'Smart Tank Telemetry',
      'Theft Prevention & Leak Detection',
      'Generator & Power Performance Tracking',
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