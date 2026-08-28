import React from 'react';
import './Projects.css'; 
import aegisDriveImg from '../assets/Aegisdrive.jpeg';
import Header from "../components/Header";
import Footer from "../components/Footer";

const PLATFORMS_DATA = [
  {
    id: 1,
    name: "AegisDrive™",
    image: aegisDriveImg,
    tagline: "Secure Digital File Storage & Document Management",
    description: "A secure digital platform designed to support digital file storage and document management.",
    icon: "fas fa-shield-alt",
    isLive: false,
    link: "https://aegisdrive-frontend.vercel.app/"
  },
  {
    id: 2,
    name: "Covira™",
    tagline: "Digital Interview Platform",
    description: "A digital platform supporting video and text-based interviews.",
    icon: "fas fa-video",
    isLive: false,
    link: "#"
  },
  {
    id: 3,
    name: "Hire-Sprout™",
    tagline: "Recruitment Platform",
    description: "A recruitment platform connecting employers with job seekers and supporting the recruitment process digitally.",
    icon: "fas fa-user-plus",
    isLive: false,
    link: "#"
  },
  {
    id: 4,
    name: "OurHR-Pulse™",
    tagline: "HR & Employee Management",
    description: "A web-based HR platform designed to support employee management, HR processes and organisational operations.",
    icon: "fas fa-users-gear",
    isLive: false,
    link: "#"
  },
  {
    id: 5,
    name: "SiteVisit™",
    tagline: "Field Operations Management",
    description: "A field operations platform supporting site visits, scheduling and attendance management.",
    icon: "fas fa-clipboard-check",
    isLive: false,
    link: "#"
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <main className="projects-page">
        
        <section className="projects-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>OUR PROJECTS</h2>
              <p className="section-subtitle">Showcase of our software platforms & client web solutions</p>
            </div>

            {/* CATEGORY 1: DIGITAL PLATFORMS (WEB APPLICATIONS) */}
            <div className="projects-container mb-5">
              <div className="category-header">
                <i className="fas fa-layer-group"></i>
                <h3>Our Digital Platforms</h3>
              </div>

              <div className="projects-grid">
                {PLATFORMS_DATA.map((platform) => (
                  <div className="project-card platform-card" key={platform.id}>
                    <div className="project-card-header">
                      <div className="d-flex align-items-center gap-2">
                        <i className={`${platform.icon} platform-icon-badge`}></i>
                        <h4 className="project-title">{platform.name}</h4>
                      </div>
                      <span className="project-badge platform-badge">Web Application</span>
                    </div>
                    
                    <div className="project-card-body">
                      <h5 className="platform-subtitle">{platform.tagline}</h5>
                      <p>{platform.description}</p>
                    </div>
                    
                    <div className="project-card-footer">
                      <a 
                        href={platform.link} 
                        className="project-btn platform-btn"
                      >
                        {platform.isLive ? (
                          <>Visit Platform <i className="fas fa-arrow-right"></i></>
                        ) : (
                          <>Learn More <i className="fas fa-arrow-right"></i></>
                        )}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CATEGORY 2: WEB DEVELOPMENT PROJECTS */}
            <div className="projects-container">
              <div className="category-header">
                <i className="fas fa-globe"></i>
                <h3>Web Development Projects</h3>
              </div>

              <div className="projects-grid">
                {/* Project Card 1 */}
                <div className="project-card">
                  <div className="project-card-header">
                    <h4 className="project-title">Vondwe Woodworks</h4>
                    <span className="project-badge">Website</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                      Quality custom woodwork and joinery solutions for homes, offices, and businesses.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://vondwewoodworks.co.za" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="project-card">
                  <div className="project-card-header">
                    <h4 className="project-title">TNETRA Trading</h4>
                    <span className="project-badge">Website</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                      Professional graphic design, printing, and branding solutions for businesses across South Africa.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://tnetratrading.co.za" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Project Card 3 */}
                <div className="project-card">
                  <div className="project-card-header">
                    <h4 className="project-title">Teamo Consulting</h4>
                    <span className="project-badge">Website</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                      Skills and workforce development solutions including training, workplace-based learning, and talent development.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://teamoconsulting.co.za" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Project Card 4 */}
                <div className="project-card">
                  <div className="project-card-header">
                    <h4 className="project-title">809 NHM Solutions</h4>
                    <span className="project-badge">Website</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                      Professional graphic design, printing, and branding solutions for businesses and individuals.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://809nhmsolutions.co.za" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;