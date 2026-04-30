import './Hero.css';
import Link from 'next/link';
import InquiryForm from '../InquiryForm/InquiryForm';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse"></span>
            Trusted Global Travel Partner
          </div>
          <span className="hero-tagline">Experience the Extraordinary</span>
          <h1>Your Passport to <span className="text-gradient">Premium</span> Experiences</h1>
          <p>
            Crossover Global Travel crafts bespoke journeys that transcend expectations. From hidden gems in Europe to the vast landscapes of North America, we turn your travel dreams into reality.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn btn-accent hero-btn">
              ✈️ Plan My Trip Now
            </Link>
            <Link href="/destinations" className="btn btn-outline hero-btn">
              Explore Destinations
            </Link>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">💎</span>
              <div className="feature-text">
                <strong>Luxury Travel</strong>
                <span>Curated Experiences</span>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div className="feature-text">
                <strong>Expert Care</strong>
                <span>24/7 Global Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-form-container">
          <div className="form-card">
            <div className="form-header">
              <h3>Get a Free Quote</h3>
              <p>Personalized itinerary within 24 hours</p>
            </div>
            <InquiryForm />
            <div className="form-footer">
              <span>🔒 Secure & Confidential</span>
              <span>⭐ 4.9/5 Service Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-airplane-container">
        <svg className="hero-airplane" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21,16L22,13L21,10L15,10L10,3L8,3L11,10L5,10L3,7L2,7L3,11L2,15L3,15L5,12L11,12L8,19L10,19L15,12L21,16Z" />
        </svg>
      </div>
      <div className="hero-shape-1"></div>
      <div className="hero-shape-2"></div>
    </section>
  );
}
