import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import Hero1 from "../assets/cattle.jpg";
import Hero2 from "../assets/crop.jpg";


const heroImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=1200&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=1400&fit=crop&q=80",
  Hero1,
  Hero2,
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
                Building Solutions.<br />
                <span className="highlight">Creating Value.</span><br />
                Sustaining Future.
              </h1>
              <p className="hero-description">
                Vhuthelu Resources (PTY) Ltd provides innovative and sustainable
                solutions that empower businesses, communities and industries to
                grow responsibly.
              </p>
              <div className="hero-buttons">
                <a href="/services" className="btn btn-primary">
                  Explore Our Services →
                </a>
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

        {/* Why Choose Us Section with Icons */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <h2>WHY CHOOSE US</h2>
              <p className="section-subtitle">
                Driven by Excellence. Focused on Impact.
              </p>
            </div>
            <p className="section-description">
              We combine expertise, innovation and sustainability to deliver 
              solutions that create real and lasting impact.
            </p>
            <div className="text-center">
              <a href="/about" className="btn btn-secondary">
                Learn More About Us →
              </a>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Expert Team</h3>
                <p>Skilled professionals with proven experience and a passion for excellence.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovative Solutions</h3>
                <p>Smart, practical and customised solutions tailored to your needs.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Sustainability First</h3>
                <p>Committed to environmental responsibility and sustainable business practices.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Value & Integrity</h3>
                <p>Building long-term relationships through transparency, trust and quality service.</p>
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
                  src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&h=400&fit=crop" 
                  alt="Mining Operations"
                />
                <div className="gallery-overlay">
                  <span>Mining Operations</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" 
                  alt="Construction"
                />
                <div className="gallery-overlay">
                  <span>Construction</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" 
                  alt="Logistics"
                />
                <div className="gallery-overlay">
                  <span>Logistics</span>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop" 
                  alt="Sustainability"
                />
                <div className="gallery-overlay">
                  <span>Sustainability</span>
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