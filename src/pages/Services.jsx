import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

import './Services.css';

const SERVICES = [
  {
    image: "https://www.tutorialspoint.com/basics_of_computer_science/images/programmer.jpg",
    icon: 'fas fa-cogs',
    title: ' Information Technology Solutions ',
    description: 'Comprehensive IT services for businesses, including software development, system support, and cloud solutions.',
    features: ['Software Development & Integration ', 'IT Project Management & Implementation ', 'IT System Support & Infrastructure Management ','Cloud & Network Solutions '],
  },
  {
    image: "https://cdn.prod.website-files.com/62752da756f73572fb31bbd1/66cca2996764d79b16d13f1a_What%20Digital%20Skill%20Development%20Means.webp",
    icon: 'fas fa-laptop-code',
    title: ' Digital Skills & Training ',
    description: 'Empowering individuals and organizations with essential digital skills and cybersecurity awareness training.',
    features: ['Digital Skills Development ', 'Skills Development Training', 'Cybersecurity Awareness ','Digital Safety Training  '],
  },
  {
    image: "https://resources.finalsite.net/images/t_image_size_4/v1593113701/mntechnologycom/mdyhpkjgktchgfqy5om2/WorkbasedLearning.png",
    icon: 'fas fa-briefcase',
    title: ' Workforce Solutions ',
    description: 'Providing workforce solutions, including workplace-based learning, internships, and talent development programs.',
    features: [
      'Workplace-Based Learning ',
       'Internships',
        'Talent Development  ',
        'Workforce Solutions '],
  },
  {
    image:"https://wearebluegrass.com/wp-content/uploads/2024/05/importance-of-graphic-design-services-in-digital-marketing-2.png",
    icon: 'fas fa-paint-brush',
    title: 'Creative & Digital Services ',
    description: 'Offering creative and digital services, including graphic design, web development, and digital platform solutions.',
    features: ['Graphic Design ', 'Digital Platforms ', 'Business Websites ','Web Application Development '],
  },
];

const STATS = [
  { number: '50+', label: 'Clients Served' },
  { number: '24/7', label: 'Support Available' },
  { number: '4', label: 'Core Sectors' },
  { number: '98%', label: 'Satisfaction Rate' },
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
                <span className="services-hero-tag">WHAT WE OFFER</span>
                <h1>Our <span className="highlight">Services</span></h1>
                <p className="services-hero-description">
                  Integrated infrastructure solutions across energy, mining, agriculture, 
                  and IT — designed to keep your operations running seamlessly.
                </p>
                <div className="services-hero-buttons">
                  <a href="#services-grid" className="btn btn-primary">
                    <i className="fas fa-arrow-down"></i> Explore Services
                  </a>
                  <a href="#contact" className="btn btn-outline-light">
                    <i className="fas fa-phone"></i> Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services-grid" className="services-grid-section">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-cogs"></i>
                <span className="line"></span>
              </div>
              <h2>Our Core Services</h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to your industry needs
              </p>
            </div>

            <div className="services-grid">
              {SERVICES.map((service, index) => (
                <ServiceCard 
                  key={service.title} 
                  {...service} 
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="services-stats">
          <div className="container">
            <div className="stats-grid">
              {STATS.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="services-why">
          <div className="container">
            <div className="why-content">
              <div className="why-text">
                <span className="why-tag">WHY VHUTHELU</span>
                <h2>Your Trusted <span className="highlight">Infrastructure Partner</span></h2>
                <p className="why-description">
                  We combine industry expertise with cutting-edge technology to deliver 
                  solutions that drive measurable results. From Digital development to IT 
                  infrastructure, we're committed to your operational excellence.
                </p>
                <div className="why-features">
                  <div className="why-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>B-BBEE Level 1 Compliant</span>
                  </div>
                  <div className="why-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>100% Black-Owned Enterprise</span>
                  </div>
                  <div className="why-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Industry-Leading Expertise</span>
                  </div>
                  <div className="why-feature">
                    <i className="fas fa-check-circle"></i>
                    <span>Nationwide Service Coverage</span>
                  </div>
                </div>
              </div>
              <div className="why-image">
                <div className="why-image-placeholder">
                  <i className="fas fa-handshake"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Operations?</h2>
              <p>Let's discuss how our integrated solutions can drive your business forward.</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i> Get in Touch
                </a>
                <a href="/about" className="btn btn-outline">
                  <i className="fas fa-info-circle"></i> Learn About Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}