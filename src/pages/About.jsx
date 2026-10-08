import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CORE_VALUES = [
  {
    icon: "fas fa-shield-alt",
    title: "Integrity",
    description: "We operate with honesty, transparency and professionalism.",
  },
  {
    icon: "fas fa-award",
    title: "Excellence",
    description: "We pursue high standards in everything we do.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Innovation",
    description: "We embrace technology and change to deliver progressive solutions.",
  },
  {
    icon: "fas fa-users-cog",
    title: "Empowerment",
    description: "We are committed to unlocking potential and creating opportunities.",
  },
  {
    icon: "fas fa-check-circle",
    title: "Accountability",
    description: "We take responsibility for our commitments and deliver quality results.",
  },
  {
    icon: "fas fa-user-check",
    title: "Client Focus",
    description: "We provide practical, relevant and fit-for-purpose solutions.",
  },
];

const WORK_ITEMS = [
  {
    icon: "fas fa-link",
    title: "Integrated Execution",
    description:
      "Energy, mining, agriculture, and IT unified under one coordinated structure.",
  },
  {
    icon: "fas fa-clock",
    title: "Operational Reliability",
    description:
      "24/7 technical backup, smooth digital workflows, and systems that just work.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Enterprise-Grade Standards",
    description:
      "B-BBEE Level 1 compliant. 100% black-owned. Governance-focused and performance-driven.",
  },
  {
    icon: "fas fa-microchip",
    title: "Future-Focused Innovation",
    description:
      "Technology-enabled systems that enhance productivity and measurable outcomes.",
  },
];

function ValueCard({ icon, title, description }) {
  return (
    <div className="value-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

function WorkCard({ icon, title, description }) {
  return (
    <div className="work-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="card-shine"></div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Header />

      <section id="about" className="about-section">
        <div className="container">
          {/* Main Title Banner Matching Image */}
          <div className="about-hero">
            <div className="hero-divider">
              <span className="line dark-line"></span>
              <span className="line green-line"></span>
            </div>
            <h1>About VHUTHELU RESOURCES</h1>
            <p className="hero-subtitle">
              Integrated Infrastructure. Intelligent Solutions. Sustainable Growth.
            </p>
          </div>

          {/* 1. Company Overview Section Matching Image Text */}
          <div className="company-overview-section">
            <div className="about-content">
              <p className="lead-heading">
                <strong>VHUTHELU RESOURCES (PTY) Ltd</strong> is a diversified technology and infrastructure partner delivering integrated solutions across 
                Information Technology, Fuel and Energy, Mining Operations, Logistics, and Agriculture.
              </p>

              <p className="regular">
                Established in 2021 and headquartered in Gauteng, we were built
                on a single principle:{" "}
                <span className="highlight-text">
                  simplify complex operations through reliable execution and
                  forward-thinking innovation.
                </span>
              </p>
            </div>
          <div className="partner-quote-card">
           <div className="quote-marks">
           <i className="fas fa-quote-left"></i>
           </div>
           <p className="quote-content">
             We do not operate as a conventional supplier. We operate as a strategic partner <br></br>
               aligning logistics, technology, and sector expertise to ensure operational continuity, <br></br>
               efficiency, and long-term growth for our clients.
                </p>
                    </div>
       
            <p className="performance-statement">
             From fueling large-scale mining operations to deploying precision farming systems and smart IT <br></br> infrastructure, 
           <strong> VHUTHELU RESOURCES</strong> delivers performance where it matters most.
             </p>

            {/* Information Details Table Box */}
            <div className="info-details-box">
              <h3>Information Details</h3>
              <div className="info-grid">
                <div className="info-row">
                  <span className="info-label">Company:</span>
                  <span className="info-value">Vhuthelu Resources (Pty) Ltd</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Registration:</span>
                  <span className="info-value">2021/136254/07</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Ownership:</span>
                  <span className="info-value">100% Black-Owned</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Director:</span>
                  <span className="info-value">M.P. Mugwedi</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Pretoria, Gauteng</span>
                  <span className="info-value">Emalahleni, Mpumalanga</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Industry:</span>
                  <span className="info-value">
                    Information Technology, Fuel & Energy, Mining operations, Logistics, Agriculture
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Vision & Mission Section */}
          <div className="vision-mission-section">
            <div className="vision-mission-grid">
              <div className="vm-card vision-card">
                <div className="vm-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                 To be a leading multi-sector provider of integrated Information Technology, Fuel & Energy, Mining operations, Logistics, and Agriculture solutions that transforms skills, enhances productivity, and drives sustainable growth across crop production, fuel supply, and resource development for the future.
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                 To empower individuals and organisations across the Information Technology,Fuel & Energy,Mining operations,Logistics, and Agriculture sectors through innovative solutions, strategic training, sustainable operational management, and targeted workforce development.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Core Values Section */}
          <div className="core-values-section">
            <div className="section-title">
              <h3>CORE VALUES</h3>
              <div className="title-underline"></div>
            </div>
            <div className="values-grid">
              {CORE_VALUES.map((val) => (
                <ValueCard
                  key={val.title}
                  icon={val.icon}
                  title={val.title}
                  description={val.description}
                />
              ))}
            </div>
          </div>

          {/* 4. Our Approach / How We Work */}
          <div className="how-we-work">
            <div className="section-title">
              <h3>OUR APPROACH</h3>
              <div className="title-underline"></div>
            </div>

            <div className="work-grid">
              {WORK_ITEMS.map((item) => (
                <WorkCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* 5. Why Work With Us / Commitment Section */}
          <div className="commitment">
            <div className="commitment-content">
              <div className="commitment-icon">
                <i className="fas fa-handshake"></i>
              </div>

              <div className="commitment-text">
                <h3>WHY WORK WITH US</h3>
                <p className="commitment-lead">
                  We create operational clarity so our clients can focus on
                  strategic growth.
                </p>
                <p className="commitment-body">
                  We remove complexity, streamline processes, and provide
                  infrastructure and digital skills solutions that strengthen
                  businesses at their core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}