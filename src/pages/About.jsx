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
    description: "Energy, mining, agriculture, and IT unified under one coordinated structure.",
  },
  {
    icon: "fas fa-clock",
    title: "Operational Reliability",
    description: "24/7 dispatch capability, dependable supply chains, and disciplined service delivery.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Enterprise-Grade Standards",
    description: "B-BBEE Level 1 compliant. 100% black-owned. Governance-focused and performance-driven.",
  },
  {
    icon: "fas fa-microchip",
    title: "Future-Focused Innovation",
    description: "Technology-enabled systems that enhance productivity and measurable outcomes.",
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
          {/* Main Title Banner */}
          <div className="about-header">
            <div className="header-decoration">
              <span className="line"></span>
              <i className="fas fa-gem"></i>
              <span className="line"></span>
            </div>
            <h2>ABOUT US</h2>
            <p className="sub-line">
              Technology. Skills. People. Integrated Infrastructure & Intelligent Solutions.
            </p>
          </div>

          {/* 1. Company Overview Section */}
          <div className="company-overview-section">
            <div className="about-content">
              <span className="ownership-badge">
                <i className="fas fa-flag"></i> 100% Black-Owned South African Company
              </span>

              <p className="lead">
                Vhuthelu Resources (Pty) Ltd is a 100% Black-owned South African company specialising in Information Technology, digital skills development, training and workforce solutions. We provide practical, client-focused technology solutions that help organisations improve operations, productivity and digital capabilities.
              </p>

              <p className="regular">
                Established in 2021 and headquartered in Gauteng, we were built on a single principle:{" "}
                <span className="highlight-text">
                  simplify complex operations through reliable execution, targeted skills development, and forward-thinking innovation.
                </span>
              </p>

              <p className="regular">
                From delivering enterprise IT support to precision farming systems and workforce empowerment programs, Vhuthelu Resources acts as a strategic partner ensuring performance and measurable growth where it matters most.
              </p>
            </div>

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
                  {/** */}
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
                </div>
                <div className="info-row">
                  <span className="info-label">Industry:</span>
                  <span className="info-value">Information Technology & Workforce Solutions</span>
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
                  To be a leading provider of integrated ICT and talent development solutions that transform skills, enhance productivity, and prepare the workforce for the future.
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower individuals and organisations through innovative technology, training, strategic talent management and workforce development solutions.
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
                  We create operational clarity so our clients can focus on strategic growth.
                </p>
                <p className="commitment-body">
                  We remove complexity, streamline processes, and provide infrastructure and digital skills solutions that strengthen businesses at their core.
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