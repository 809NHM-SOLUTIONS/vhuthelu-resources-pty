import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './Services.css';

const MINING_SUPPORT_SERVICES = [
  {
    image: "https://www.nedapidentification.com/wp-content/uploads/2023/01/Haulpack-with-Tank-scaled.jpg",
    icon: 'fas fa-warehouse',
    title: 'On-Site Fuel Depots & Infrastructure',
    description: 'Rapid deployment of self-bunded storage, heavy-duty filtration, and full safety compliance for fuel infrastructure at the pit face.',
    features: [
      'Containerized & Mobile Depot Setup',
      'Fuel Quality & Filtration Systems',
      'Safety & Regulatory Compliance',
    ],
  },
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
  {
    image: "https://mecaluxcom.cdnwm.com/documents/d/global/m42p01-inventario-tiempo-real-terminales-radiofrecuencia?e=jpg&imwidth=1024&imdensity=1",
    icon: 'fas fa-clipboard-list',
    title: 'Real-Time Inventory & Material Control',
    description: 'Tag-and-pump dispensing, vendor-managed tank replenishment, and daily reconciliation to keep every liter of fuel accounted for.',
    features: [
      'Automated Dispensing & Telematics',
      'Vendor-Managed Inventory (VMI)',
      'Loss & Reconciliation Tracking',
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