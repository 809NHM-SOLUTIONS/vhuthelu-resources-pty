import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './Services.css';

const CROP_SERVICES = [
  {
    image: "https://www.danfoss.com/media/6541/irrigation_new.jpg",
    icon: 'fas fa-water',
    title: 'Irrigation Powering & Management',
    description: 'High-performance power solutions for pivot, drip, and overhead irrigation systems, keeping fields watered on schedule.',
    features: [
      'Generators & Solar Hybrids: Reliable primary and backup power.',
      'Water System Support: Grid connections for pivot, drip, and overhead systems.',
    ],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7oNwyB5HvnZe0qQHfTAoEfwoVh5tIls0BX1ii2l4rKaK-UPgN-J0HHQ&s=10",
    icon: 'fas fa-gas-pump',
    title: 'Harvesting & Machinery Fueling',
    description: 'On-site fuel delivery and fleet monitoring that keeps harvesters and tractors running through the season.',
    features: [
      'Bulk Fuel Delivery: Direct on-site fueling for field equipment.',
      'Fleet Management: Monitoring systems for harvesters and tractors.',
    ],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-4aL6xaVmcHXtXsBC4ClE2noMypjVxs7kn0aRLzj9XcBGrx7lzjFwctY&s=10",
    icon: 'fas fa-chart-line',
    title: 'Seasonal Planning & AgTech',
    description: 'Data-driven planning tools that help you time rotations, fertilizer, and harvest for the best possible yield.',
    features: [
      'Field Optimization: Data-driven rotation and fertilizer timing.',
      'Yield Analytics: Smart crop health and performance monitoring.',
    ],
  },
];

const LIVESTOCK_SERVICES = [
  {
    image: "https://croctroughpumps.com.au/cdn/shop/files/510_2048x.jpg?v=1613762824",
    icon: 'fas fa-faucet',
    title: 'Water Pumping & Troughs',
    description: 'Continuous power for borehole and dam pumping, keeping automated troughs supplied for livestock hydration.',
    features: [
      'Borehole & Dam Pumping: Continuous energy for water transfer.',
      'Automated Troughs: Uninterrupted supply for livestock hydration.',
    ],
  },
  {
    image: "https://kumarmetal.com/wp-content/uploads/the-essential-checklist-for-setting-up-feed-mills.jpeg",
    icon: 'fas fa-industry',
    title: 'Feed Mills & Processing',
    description: 'Stable electrical setups for grinding, mixing, and pelletizing operations at your feed mill.',
    features: [
      'Grinding & Mixing: Stable electrical setup for industrial mills.',
      'Pelletizing Power: Dedicated support for production operations.',
    ],
  },
  {
    image: "https://www.jamescargo.com/assets/images/blog/cow-transport-over-long-distance.webp",
    icon: 'fas fa-truck',
    title: 'Transport & Logistics',
    description: 'Safe, regulated hauling for livestock and reliable bulk delivery for feed, grains, and farm supplies.',
    features: [
      'Livestock Hauling: Safe and regulated livestock transport.',
      'Bulk Supply Transport: Delivery of feed, grains, and farm supplies.',
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
                <span className="services-hero-tag">WHAT CROP AND CATTLE FARMING SERVICES WE OFFER</span>
                <h1>Crop and Cattle Farming <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Irrigation power, harvesters fuel & seasonal planning tools. Water pumps, feed mills, transport & fencing energizers
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
                <i className="fas fa-seedling"></i>
                <span className="line"></span>
              </div>
              <h2>Crop Farming Services</h2>
            </div>

            <div className="services-grid">
              {CROP_SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2. CATTLE & LIVESTOCK SERVICES SECTION */}
        <section id="livestock-services-grid" className="services-grid-section alt-bg">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-cow"></i>
                <span className="line"></span>
              </div>
              <h2>Cattle & Livestock Services</h2>
            </div>

            <div className="services-grid">
              {LIVESTOCK_SERVICES.map((service, index) => (
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