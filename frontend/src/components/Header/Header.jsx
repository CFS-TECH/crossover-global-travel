"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Destinations', 
      path: '/destinations',
      dropdown: [
        { title: 'USA', path: '/destinations/usa' },
        { title: 'Mexico', path: '/destinations/mexico' },
        { title: 'Canada', path: '/destinations/canada' },
        { title: 'Europe', path: '/destinations/europe' },
      ]
    },
    { 
      title: 'Packages', 
      path: '/packages',
      dropdown: [
        { title: 'Honeymoon Packages', path: '/packages/honeymoon' },
        { title: 'Family Trips', path: '/packages/family' },
        { title: 'Luxury Travel', path: '/packages/luxury' },
        { title: 'Budget Travel', path: '/packages/budget' },
      ]
    },
    { 
      title: 'Services', 
      path: '/services',
      dropdown: [
        { title: 'Flight Booking', path: '/services/flight-booking' },
        { title: 'Hotel Booking', path: '/services/hotel-booking' },
        { title: 'Travel Planning', path: '/services/travel-planning' },
        { title: 'Visa Assistance', path: '/services/visa-assistance' },
      ]
    },
    { title: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="trust-signals">
            <span>Serving USA, Canada & Mexico</span>
          </div>
          <div className="tfn-group">
            <span className="tfn-item">
              <span className="flag">🇺🇸</span> USA: <a href="tel:+18884007136">+1 (888) 400-7136</a>
            </span>
            <span className="tfn-item">
              <span className="flag">🇲🇽</span> MX: <a href="tel:+528003510311">+52 (800) 351-0311</a>
            </span>
          </div>
        </div>
      </div>
      
      <div className="main-nav">
        <div className="container nav-inner">
          <Link href="/" className="logo">
            <img 
              src="/assets/logo2.png" 
              alt="Crossover Global Travel - Premium Travel Agency" 
              className="logo-img" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-fallback" style={{ display: 'none' }}>
              <span className="logo-c">C</span>rossover <span className="logo-global">Global Travel</span>
            </div>
          </Link>
          
          <nav className="nav-links desktop-only">
            {menuItems.map((item, idx) => (
              <div key={idx} className="nav-item-wrapper">
                <Link href={item.path} className="nav-link">
                  {item.title} {item.dropdown && <span className="chevron">▾</span>}
                </Link>
                {item.dropdown && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link key={sIdx} href={sub.path} className="dropdown-link">
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="nav-right">
            <div className="nav-ctas desktop-only">
              <Link href="tel:+18884007136" className="call-us-link">
                <span className="call-icon">📞</span>
                <div className="call-text">
                  <span className="call-label">Call Us</span>
                  <span className="call-number">+1 (888) 400-7136</span>
                </div>
              </Link>
              <Link href="/contact" className="btn btn-accent nav-cta">✈️ Plan My Trip</Link>
            </div>
            
            <button className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <Link href="/" className="logo" onClick={toggleMobileMenu}>
               <img src="/assets/logo2.png" alt="Crossover Global Travel" className="logo-img" />
            </Link>
            <button className="close-menu" onClick={toggleMobileMenu}>&times;</button>
          </div>
          <nav className="mobile-nav-links">
            <Link href="/" onClick={toggleMobileMenu}>Home</Link>
            <Link href="/destinations" onClick={toggleMobileMenu}>Destinations</Link>
            <Link href="/packages" onClick={toggleMobileMenu}>Packages</Link>
            <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
            <Link href="/blog" onClick={toggleMobileMenu}>Blog</Link>
            <Link href="/contact" className="btn btn-accent mobile-cta" onClick={toggleMobileMenu}>✈️ Plan My Trip</Link>
          </nav>
          <div className="mobile-menu-footer">
            <p>Ready to explore?</p>
            <a href="tel:+18884007136" className="mobile-call-btn">📞 Call Us: +1 (888) 400-7136</a>
          </div>
        </div>
      </div>
    </header>
  );
}
