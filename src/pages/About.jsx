import "./About.css";
import Header from "../components/Header"; // Adjust path based on your structure
import Footer from "../components/Footer"; // Adjust path based on your structure

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
      "24/7 dispatch capability, dependable supply chains, and disciplined service delivery.",
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
          <div className="about-header">
            <div className="header-decoration">
              <span className="line"></span>
              <i className="fas fa-gem"></i>
              <span className="line"></span>
            </div>

            <h2>About VHUTHELU RESOURCES</h2>

            <p className="sub-line">
              Integrated Infrastructure. Intelligent Solutions. Sustainable
              Growth.
            </p>
          </div>

          <div className="about-content">
            <p className="lead">
              VHUTHELU RESOURCES (PTY) Ltd is a diversified infrastructure and
              technology partner delivering integrated solutions across energy,
              mining support, agriculture, and intelligent IT services.
            </p>

            <p className="regular">
              Established in 2021 and headquartered in Gauteng, we were built on
              a single principle:{" "}
              <span className="highlight-text">
                simplify complex operations through reliable execution and
                forward-thinking innovation.
              </span>
            </p>

            <div className="pull-quote">
              <div className="quote-mark">"</div>

              <div className="quote-content">
                <p>
                  We do not operate as a conventional supplier. We operate as a
                  strategic partner — aligning logistics, technology, and sector
                  expertise to ensure operational continuity, efficiency, and
                  long-term growth for our clients.
                </p>
              </div>
            </div>

            <p className="regular with-icon">
              <i className="fas fa-arrow-right"></i>
              From fueling large-scale mining operations to deploying precision
              farming systems and smart IT infrastructure, VHUTHELU RESOURCES
              delivers performance where it matters most.
            </p>
          </div>

          <div className="how-we-work">
            <div className="section-title">
              <h3>HOW WE WORK</h3>
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

          <div className="commitment">
            <div className="commitment-content">
              <div className="commitment-icon">
                <i className="fas fa-heart"></i>
              </div>

              <div className="commitment-text">
                <h3>OUR COMMITMENT</h3>

                <p className="commitment-lead">
                  We create operational clarity so our clients can focus on
                  strategic growth.
                </p>

                <p className="commitment-body">
                  We remove complexity, streamline processes, and provide
                  infrastructure solutions that strengthen businesses at their
                  core.
                </p>
              </div>
            </div>
          </div>

          <div className="about-footer">
            <div className="footer-decoration">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <div className="footer-info">
              <span>
                <i className="fas fa-registered"></i> Reg: 2021/136254/07
              </span>

              <span className="separator">◆</span>

              <span>
                <i className="fas fa-star"></i> B-BBEE Level 1
              </span>

              <span className="separator">◆</span>

              <span>
                <i className="fas fa-map-pin"></i> Gauteng, South Africa
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}