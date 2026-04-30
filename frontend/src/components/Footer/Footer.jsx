"use client";
import './Footer.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2026);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };
  
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container newsletter-content">
          {!isSubscribed ? (
            <>
              <div className="newsletter-text">
                <h2>Join Our Travel Community</h2>
                <p>Subscribe for exclusive travel deals and expert destination guides.</p>
              </div>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit" className="btn btn-accent">Subscribe</button>
              </form>
            </>
          ) : (
            <div className="newsletter-success reveal">
              <span className="success-icon">✓</span>
              <div className="success-text">
                <h3>Thank You for Subscribing!</h3>
                <p>Welcome to Crossover Global Travel. Check your inbox for your first exclusive deal.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <img 
                src="/assets/logo2.png" 
                alt="Crossover Global Travel - Expert Consultation" 
                className="logo-img footer-img" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{ display: 'none', color: 'white' }}>
                <span className="logo-c">C</span>rossover <span className="logo-global">Global Travel</span>
              </div>
            </div>
            <p className="footer-desc">
              Bespoke travel experiences for the modern explorer. From luxury escapes to global adventures, we handle every detail with precision.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61587398464233" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <span>FB</span>
              </a>
              <a href="https://www.instagram.com/crossoverfintech/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <span>IG</span>
              </a>
              <a href="https://x.com/CFintech93318" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
                <span>TW</span>
              </a>
              <a href="https://www.linkedin.com/in/crossover-fintech-9a15b73b6/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <span>LI</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h3>Services</h3>
              <ul>
                <li><Link href="/services/flight-booking">Flight Bookings</Link></li>
                <li><Link href="/services/hotel-booking">Hotel Stays</Link></li>
                <li><Link href="/services/travel-planning">Trip Planning</Link></li>
                <li><Link href="/services/visa-assistance">Visa Support</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-col">
              <h3>Explore</h3>
              <ul>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/packages">Tour Packages</Link></li>
                <li><Link href="/blog">Travel Blog</Link></li>
                <li><Link href="/about">Our Story</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <span className="icon">📞</span>
              <div className="contact-text">
                <p>USA: <a href="tel:+18884007136">+1 (888) 400-7136</a></p>
                <p>MX: <a href="tel:+528003510311">+52 (800) 351-0311</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <p><a href="mailto:crossoversupport@gmail.com">crossoversupport@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Global Headquarters, North America</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>&copy; {year} Crossover Global Travel. All rights reserved.</p>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
