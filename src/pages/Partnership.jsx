import React from 'react';
import './Partnership.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const COLLABORATION_AREAS = [
  { title: "Corporate Organisations", icon: "fas fa-building" },
  { title: "Public Institutions", icon: "fas fa-university" },
  { title: "Private Institutions", icon: "fas fa-briefcase" },
  { title: "Sector Education & Training Authorities (SETAs)", icon: "fas fa-graduation-cap" },
  { title: "Government Development Programmes", icon: "fas fa-landmark" }
];

const CONTRIBUTIONS = [
  { title: "Digital Skills Development", icon: "fas fa-laptop-code" },
  { title: "Digital Inclusion", icon: "fas fa-network-wired" },
  { title: "Access to Tech Opportunities", icon: "fas fa-door-open" },
  { title: "Workforce Development", icon: "fas fa-user-gear" },
  { title: "Youth Employability", icon: "fas fa-user-graduate" },
  { title: "ICT-Focused Internships", icon: "fas fa-id-badge" },
  { title: "Workplace Opportunities", icon: "fas fa-chart-line" },
  { title: "B-BBEE & National Development", icon: "fas fa-award" }
];

export default function Partnerships() {
  return (
     <>
     <Header />
    <section className="partnerships-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="partnerships-header">
          <span className="section-badge">COLLABORATION & IMPACT</span>
          <h2>Partnerships & Social Impact</h2>
          <p className="intro-text">
            Vhuthelu Resources works with organisations across various sectors to support technology, skills development and workforce initiatives.
          </p>
        </div>

        {/* 1. Collaboration Areas */}
        <div className="impact-block">
          <div className="block-title">
            <i className="fas fa-handshake"></i>
            <h3>Our Collaboration Areas</h3>
          </div>
          <div className="collaboration-grid">
            {COLLABORATION_AREAS.map((item, index) => (
              <div key={index} className="collab-card">
                <div className="collab-icon">
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Our Contribution */}
        <div className="impact-block">
          <div className="block-title">
            <i className="fas fa-seedling"></i>
            <h3>Our Contribution</h3>
          </div>
          <div className="contribution-grid">
            {CONTRIBUTIONS.map((item, index) => (
              <div key={index} className="contribution-card">
                <div className="contrib-icon">
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
     <Footer />
    </>
  );
}