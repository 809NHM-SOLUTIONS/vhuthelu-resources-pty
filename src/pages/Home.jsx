import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import Hero1 from "../assets/cattle.jpg";
import Hero2 from "../assets/crop.jpg";


const heroImages = [
  "https://static.wixstatic.com/media/14cc91_17fdf226d70846baa3be5d3bb0b0bb12~mv2.jpg/v1/fill/w_722,h_634,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  "https://wearebluegrass.com/wp-content/uploads/2024/05/importance-of-graphic-design-services-in-digital-marketing-2.png",
  "https://www.cnp.net/wp-content/uploads/2025/02/AdobeStock_727353391.jpeg",
  "https://educeptiveconsulting.co.za/wp-content/uploads/2025/11/pexels-photo-5935791.jpeg",
  "https://www.tutorialspoint.com/basics_of_computer_science/images/programmer.jpg",
  "https://resources.finalsite.net/images/t_image_size_4/v1593113701/mntechnologycom/mdyhpkjgktchgfqy5om2/WorkbasedLearning.png",
  "https://www.umweltbundesamt.de/system/files/medien/376/bilder/greenit_j-mel_adobestock_315164682_5260x2864_px.jpeg",
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <>
      <Header />

      <main className="home-main">
        {/* Hero Section - split layout */}
        <section className="hero-section">
          <div className="hero-text-panel">
            <div className="hero-text-inner">
              <span className="hero-tag">INNOVATE • SUSTAIN • IMPACT</span>
              <h1 className="hero-title">
                Empowering People.<br />
                <span className="highlight">Enabling Technology.</span><br />
                Enhancing the Future.
              </h1>
              <p className="hero-description">
                Vhuthelu Resources is a 100% Black-owened south african technology and workforce solutions company delivering
                innovative IT ,digital skills development,training and workforce solutions.
              </p>
              <div className="hero-buttons">
                <a href="/services" className="btn btn-primary">
                  Explore Our Services →
                </a>
                <a href="/contact" className="btn btn-primary">
                    Contact Us →
                </a>
                <br />
                <a href="/about" className="btn btn-outline">
                  <i className="fas fa-play-circle"></i> Watch Our Story
                </a>
              </div>
            </div>
          </div>

          <div
            className="hero-image-panel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="hero-image-track"
              style={{
                width: `${heroImages.length * 100}%`,
                transform: `translateX(-${(activeSlide / heroImages.length) * 100}%)`,
              }}
            >
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Vhuthelu Resources ${i + 1}`}
                  className="hero-image"
                  style={{ width: `${100 / heroImages.length}%` }}
                />
              ))}
            </div>

            <div className="hero-image-dots">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`hero-dot ${i === activeSlide ? "active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* About Preview Section */}
        <section className="about-preview-section">
          <div className="container text-center">
            <div className="section-header">
              <h2>ABOUT US</h2>
              <p className="section-subtitle">Technology. Skills. People.</p>
            </div>
            <p className="section-description">
              Vhuthelu Resources (Pty) Ltd is a 100% Black-owned South African company specialising in Information Technology, digital skills development, training and workforce solutions. We provide practical, client-focused technology solutions that help organisations improve operations, productivity and digital capabilities.
            </p>
            <div className="text-center">
              <a href="/about" className="btn btn-secondary">
                Learn More →
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Icons */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <h2>WHY CHOOSE VHUTHELU RESOURCES</h2>
              <p className="section-subtitle">
                Innovative Solutions. Skilled Professionals. Sustainable Practices.
              </p>
            </div>
          
            

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Client Focus</h3>
                <p>Practical and relevant solutions designed around each client's environment and requirements.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>We use technology and modern approaches to develop progressive solutions.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Empowerment</h3>
                <p>We support skills development, digital inclusion and opportunities for individuals and organisations.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Professionalism</h3>
                <p>We operate with integrity, accountability and a commitment to quality.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Scalable Solutions</h3>
                <p>Our solutions are designed to grow with the changing needs of our clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery/Portfolio Section */}
       <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Work in Action</h2>
              <p className="section-subtitle">Delivering excellence across industries</p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img 
                  src="https://www.tutorialspoint.com/basics_of_computer_science/images/programmer.jpg"
                  alt=" Information Technology Solutions"
                />
                <div className="gallery-overlay">
                  <span>Information Technology Solutions</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src= "https://cdn.prod.website-files.com/62752da756f73572fb31bbd1/66cca2996764d79b16d13f1a_What%20Digital%20Skill%20Development%20Means.webp" 
                  alt=" Digital Skills & Training"
                />
                <div className="gallery-overlay">
                  <span>Digital Skills & Training</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src= "https://resources.finalsite.net/images/t_image_size_4/v1593113701/mntechnologycom/mdyhpkjgktchgfqy5om2/WorkbasedLearning.png"
                  alt=" Workforce Solutions "
                />
                <div className="gallery-overlay">
                  <span>Workforce Solutions</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://wearebluegrass.com/wp-content/uploads/2024/05/importance-of-graphic-design-services-in-digital-marketing-2.png"
                  alt="Creative & Digital Services "
                />
                <div className="gallery-overlay">
                  <span>Creative & Digital Services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients Across Industries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Projects Completed Successfully</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Skilled Professionals On Our Team</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment to Quality and Excellence</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;