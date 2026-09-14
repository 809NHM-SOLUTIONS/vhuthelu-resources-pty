import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import './Services.css';


const PROJECTS = [
  {
    title: 'Fuel and Energy',
    description: '',
    image: 'https://cdn.britannica.com/93/258993-159-0F2A3A4A/Energy-Sector-composite-image-pumpjack-tanker-truck-fuel-pump.jpg',
    icon: 'fas fa-gas-pump',
    link: '/projects/fuel-depot-rollout',
  },
  {
    title: 'Mining ',
    description: '',
    image: 'https://www.miningdoc.tech/wp-content/uploads/2025/09/Mining-trucks.jpeg',
     icon: 'fas fa-truck-monster',
    link: '',
  },
  {
    title: 'Crop and Cattle ',
    description: '',
    image: 'https://africanagribusiness.com/wp-content/uploads/2025/02/irrigation_technology.jpg',
    icon: 'fas fa-seedling',
    link: '',
  },
  {
    title: 'IT Projects ',
    description: 'Custom business websites and web applications built to manage operations and customer-facing services.',
    image: 'https://www.uws.ac.uk/media/6539/project-management.jpg?width=650&height=650&v=1dada066cf9f370',
    icon: 'fas fa-laptop-code',
    link: '/ITProjects',
  },
];

const STATS = [
  { number: '100+', label: 'Clients Served' },
  { number: '24/7', label: 'Support Available' },
  { number: '4', label: 'Core Sectors' },
  { number: '98%', label: 'Satisfaction Rate' },
];

export default function Projects() {
  return (
    <>
      <Header />

      <main className="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content">
              <div className="services-hero-text">
                <span className="services-hero-tag">WHAT WE'VE DELIVERED</span>
                <h1>Our <span className="highlight">Projects</span></h1>
                <p className="services-hero-description">
                  Integrated infrastructure solutions across energy, mining, agriculture,
                  and IT — delivered on the ground, on time, and built to last.
                </p>
                <div className="services-hero-buttons">
                  <a href="#projects-grid" className="btn btn-primary">
                    <i className="fas fa-arrow-down"></i> Explore Projects
                  </a>
                  <a href="#contact" className="btn btn-outline-light">
                    <i className="fas fa-phone"></i> Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section id="projects-grid" className="services-grid-section">
          <div className="container">
            <div className="section-header">
              <div className="header-decoration">
                <span className="line"></span>
                <i className="fas fa-diagram-project"></i>
                <span className="line"></span>
              </div>
              <h2>Featured Projects</h2>
              <p className="section-subtitle">
                A look at the work we've delivered across our core sectors
              </p>
            </div>

            <div className="sectors-grid">
              {PROJECTS.map((project, index) => (
                <div className="sector-card" key={index}>
                  <div className="sector-image-container">
                    <img src={project.image} alt={project.title} className="sector-image" />
                    <div className="sector-icon-badge">
                      <i className={project.icon}></i>
                    </div>
                  </div>

                  <div className="sector-card-body">
                    <h3 className="sector-title">{project.title}</h3>
                    <p className="sector-description">{project.description}</p>

                    <Link to={project.link} className="btn-explore">
                      View Projects <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
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
                  projects that drive measurable results. From energy infrastructure to IT
                  rollouts, we're committed to operational excellence on every site.
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
              <h2>Have a Project in Mind?</h2>
              <p>Let's discuss how our integrated solutions can bring it to life.</p>
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