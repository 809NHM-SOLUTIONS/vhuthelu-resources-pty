import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './MiningSupport.css';

const MINING_SUPPORT_SERVICES = [
  
  {
    image: "https://www.azomining.com/images/Article_Images/ImageForArticle_1856_17442759620541009.jpg",
    icon: 'fas fa-truck-moving',
    title: 'Mining Logistics & Supply Chain',
    description: 'Certified heavy haulage, optimized delivery scheduling, and direct-to-equipment refueling to keep fleets running around the clock.',
    features: [
      'Heavy Haulage & Dangerous Goods Transport',
      'Fleet Route & Delivery Optimization',
      'Site Distribution Management',
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
                <span className="services-hero-tag">WHAT MINING SUPPORT SERVICES WE OFFER</span>
                <h1>Mining Support <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  On-site fuel infrastructure, logistics, and real-time material control — built for the demands of remote mining sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="mining-support-services-grid" className="services-grid-section">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-hard-hat"></i>
                <span className="line"></span>
              </div>
              <h2>Mining Support Services</h2>
            </div>

            <div className="services-grid">
              {MINING_SUPPORT_SERVICES.map((service, index) => (
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