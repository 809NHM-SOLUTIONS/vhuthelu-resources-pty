import { useRef, useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './Contact.css';

// Comment out EmailJS for testing
// import emailjs from '@emailjs/browser';

// const PUBLIC_KEY = 'C6QS6upEFp4HTzr0Z';
// const SERVICE_ID = 'service_b8a935l';
// const TEMPLATE_ID = 'template_0h5f9jh';

const CONTACT_INFO = [
  {
    icon: 'fas fa-phone-alt',
    title: 'Phone',
    details: ['083 474 9155'],
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    details: ['info@vhutheluresources.co.za', 'vhutheluresources@gmail.com'],
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Address',
    details: ['111 Outeniqua Flats, 721 Church Street, Arcadia Gauteng, 0083'
     , '23 Corridor cres, Ben Fleur, EMalahleni 1035, Mpumalanga'
    ],
  },
  {
    icon: 'fas fa-clock',
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    // Simulate sending for testing
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      setSending(false);
      formRef.current.reset();
    }, 1500);

    // Uncomment this when EmailJS is installed
    /*
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setSending(false);
        formRef.current.reset();
      },
      (error) => {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or contact us directly.',
        });
        setSending(false);
        console.error('EmailJS error:', error);
      }
    );
    */
  }

  return (
    <>
      <Header />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <span className="contact-hero-tag">GET IN TOUCH</span>
              <h1>Let's <span className="highlight">Work Together</span></h1>
              <p className="contact-hero-description">
               Whether you need IT Solutions, digital Skills development, workforce support or a technology partner,
               Vhuthelu Resources is ready to work with you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-wrapper">
              {/* Contact Info Cards */}
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p className="contact-info-description">
                  Reach out to us through any of the following channels, and our 
                  team will respond promptly.
                </p>
                <div className="contact-info-grid">
                  {CONTACT_INFO.map((item, index) => (
                    <div className="contact-info-card" key={index}>
                      <div className="contact-info-icon">
                        <i className={item.icon}></i>
                      </div>
                      <h4>{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="contact-form">
                  <div className="form-header">
                    <h3>Send Us a Message</h3>
                    <p>We'll get back to you within 24 hours</p>
                  </div>
                  
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="full_name">
                        <i className="fas fa-user"></i> Full Name
                      </label>
                      <input 
                        type="text" 
                        id="full_name"
                        name="full_name" 
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">
                        <i className="fas fa-building"></i> Company
                      </label>
                      <input 
                        type="text" 
                        id="company"
                        name="company" 
                        placeholder="Enter your company name" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="fas fa-envelope"></i> Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email address" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="fas fa-phone"></i> Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        placeholder="Enter your phone number" 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service_required">
                        <i className="fas fa-handshake"></i> Service Required
                      </label>
                      <input 
                        type="text" 
                        id="service_required"
                        name="service_required" 
                        placeholder="What service are you interested in?" 
                        required 
                      />
                    </div>


                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-comment"></i> Message
                      </label>
                      <textarea 
                        id="message"
                        name="message" 
                        placeholder="Tell us how we can assist you..." 
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={sending}>
                      {sending ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i> Send Enquiry
                        </>
                      )}
                    </button>
                  </form>

                  {status && (
                    <div className={`status-message ${status.type}`}>
                      <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                      {status.message}
                    </div>
                  )}

                  <p className="privacy-note">
                    <i className="fas fa-lock"></i> Your information is confidential and will not be shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-map">
          <div className="container">
            <div className="map-placeholder">
              <div className="map-content">
                <i className="fas fa-map-marked-alt"></i>
                <h3>Find Us Here</h3>
                <p>Gauteng, South Africa</p>
                <div className="map-coordinates">
                  <span><i className="fas fa-map-pin"></i> 26.2041° S, 28.0473° E</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Partner With Us?</h2>
              <p>Let's discuss how our integrated solutions can drive your business forward.</p>
              <div className="cta-buttons">
                <a href="/services" className="btn btn-primary">
                  <i className="fas fa-cogs"></i> Explore Our Services
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