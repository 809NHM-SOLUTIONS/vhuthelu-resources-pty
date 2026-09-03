import React from 'react';
import './Projects.css'; 
import aegisDriveImg from '../assets/AegisDrive.jpeg';
import coviraImg from '../assets/Covira.jpeg';
import hireSproutImg from '../assets/hiresrout.jpeg';

import vondweImg from '../assets/Vondwe.png';
import tnetraImg from '../assets/TNETRA.png';
import teamoImg from '../assets/TEAMO.png';
import Header from "../components/Header";
import Footer from "../components/Footer";

const PLATFORMS_DATA = [
 
  
  
  
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
              {/** APPLICATION 1 */}
                    <div className="application-card">

                     <div className="application-card-image">
                     <img src={aegisDriveImg} alt="Aegis Drive" />
                     </div> 

                  <div className="project-card-header">
                    <h4 className="project-title">Aegis Drive</h4>
                    <span className="project-badge">Website Application</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                      A secure digital platform designed to support digital file storage and document management.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://aegisdrive-frontend.vercel.app/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="application-card">

                     <div className="application-card-image">
                     <img src={coviraImg} alt="Covira" />
                     </div> 

                  <div className="project-card-header">
                    <h4 className="project-title">Covira</h4>
                    <span className="project-badge">Website Application</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                     A digital platform supporting video and text-based interviews.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://covira-frontend.vercel.app/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              <div className="application-card">

                     <div className="application-card-image">
                     <img src={hireSproutImg} alt="Hire-Sprout™" />
                     </div> 

                  <div className="project-card-header">
                    <h4 className="project-title">Hire-Sprout™</h4>
                    <span className="project-badge">Website Application</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                     A recruitment platform connecting employers with job seekers and supporting the recruitment process digitally.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://hire-sprout-frontend.vercel.app/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="application-card">

                     <div className="application-card-image">
                     <img alt="OurHR-Pulse™" />
                     </div> 

                  <div className="project-card-header">
                    <h4 className="project-title">OurHR-Pulse™</h4>
                    <span className="project-badge">Website Application</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                    A web-based HR platform designed to support employee management, HR processes and organisational operations.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://ourhr-pulse-frontend.vercel.app/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn"
                    >
                      Visit Website <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                  <div className="application-card">

                     <div className="application-card-image">
                     <img alt="SiteVisit™" />
                     </div> 

                  <div className="project-card-header">
                    <h4 className="project-title">SiteVisit™</h4>
                    <span className="project-badge">Website Application</span>
                  </div>
                  <div className="project-card-body">
                    <p>
                    A field operations platform supporting site visits, scheduling and attendance management.
                    </p>
                  </div>
                  <div className="project-card-footer">
                    <a 
                      href="https://ourhr-pulse-frontend.vercel.app/"
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

            {/* CATEGORY 2: WEB DEVELOPMENT PROJECTS */}
            <div className="projects-container">
              <div className="category-header">
                <i className="fas fa-globe"></i>
                <h3>Web Development Projects</h3>
              </div>

              <div className="projects-grid">
                {/* Project Card 1 */}
                <div className="project-card">


                    <div className="project-card-image">
                     <img src={vondweImg} alt="Vondwe Woodworks" />
                     </div>

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

                     <div className="project-card-image">
                     <img src={tnetraImg} alt="TNETRA Trading" />
                     </div> 

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

                     <div className="project-card-image">
                     <img src={teamoImg} alt="Teamo Consulting" />
                     </div>

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

                     <div className="project-card-image">
                     
                     </div> 
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