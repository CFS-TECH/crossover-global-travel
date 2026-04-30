"use client";
import React, { useState } from 'react';
import "./page.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    travelers: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Temporary simulation until database is connected
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', destination: '', dates: '', travelers: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>
        <div className="container contact-hero-content">
          <span className="hero-tagline">Start Your Journey</span>
          <h1>Let's Plan Your Dream Trip</h1>
          <p>Whether you know exactly where you want to go or you need some expert inspiration, our team is ready to curate the perfect itinerary for you.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-col">
              <div className="info-card">
                <h2>Get in Touch</h2>
                <p>Have a question or need immediate assistance? Reach out to our dedicated global support team.</p>
                
                <div className="info-item">
                  <div className="info-icon">🇺🇸</div>
                  <div className="info-text">
                    <h4>USA Support</h4>
                    <a href="tel:+18884007136">+1 (888) 400-7136</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🇲🇽</div>
                  <div className="info-text">
                    <h4>Mexico Support</h4>
                    <a href="tel:+528003510311">+52 (800) 351-0311</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-text">
                    <h4>Email Us</h4>
                    <a href="mailto:crossoversupport@gmail.com">crossoversupport@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="office-card">
                <h3>Business Hours</h3>
                <ul>
                  <li><span>Monday - Friday:</span> <span>8:00 AM - 8:00 PM (EST)</span></li>
                  <li><span>Saturday:</span> <span>9:00 AM - 5:00 PM (EST)</span></li>
                  <li><span>Sunday:</span> <span>Closed</span></li>
                </ul>
                <div className="emergency-support">
                  <span>* 24/7 Emergency support available for active travelers.</span>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="contact-form-col">
              <div className="form-wrapper">
                <h2>Plan My Trip</h2>
                <p className="form-intro">Fill out the details below, and a travel designer will get back to you within 24 hours.</p>
                
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">✨</div>
                    <h3>Request Received!</h3>
                    <p>Thank you for reaching out. One of our travel experts will contact you shortly to start planning your adventure.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="trip-form">
                    <div className="form-row">
                      <div className="form-group">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address *" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="travelers" value={formData.travelers} onChange={handleChange} placeholder="Number of Travelers" />
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="text" name="destination" value={formData.destination} onChange={handleChange} required placeholder="Desired Destination (or Region) *" />
                    </div>

                    <div className="form-group">
                      <input type="text" name="dates" value={formData.dates} onChange={handleChange} placeholder="Estimated Travel Dates (e.g., Nov 2026)" />
                    </div>

                    <div className="form-group">
                      <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your dream trip. What are you looking for? *" rows="5"></textarea>
                    </div>

                    <button type="submit" className="btn btn-accent full-width submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Request...' : '✈️ Submit Trip Request'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
