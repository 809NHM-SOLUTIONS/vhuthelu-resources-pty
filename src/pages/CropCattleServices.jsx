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
                <span className="services-hero-tag">WHAT CROP AND CATTLE FARMING SERVICES WE OFFER</span>
                <h1>Crop and Cattle Farming <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Irrigation power, harvesters fuel & seasonal planning tools. Water pumps, feed mills, transport & fencing energizers
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
              <h2>Crop and Cattle Farming  Services</h2>
              
    </div>
  <div className="container">
        <ul className="highlights-list">
        <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Irrigation Systems</span>
        </li>
        <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Harvester Fuel</span>
        </li>
        <li className="highlight-item">
        <i className="fas fa-check-circle"></i>
        <span>Seasonal Planning</span>
       </li>
      </ul>
  </div>
</section>
        
        
      </main>

      <Footer />
    </>
  );
}