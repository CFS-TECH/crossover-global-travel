import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "About Us | Crossover Global Travel",
  description: "Learn about Crossover Global Travel, your premium partner for international travel planning and booking.",
};

export default function About() {
  return (
    <main className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <span className="hero-tagline">Our Journey</span>
          <h1>Explore Beyond Boundaries</h1>
          <p>We are a passionate team of global travel designers dedicated to crafting seamless, unforgettable experiences around the world.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-image-wrap">
              <div className="story-image" style={{backgroundImage: "url('/assets/travel_planning.png')"}}></div>
              <div className="story-image-accent"></div>
            </div>
            <div className="story-text">
              <h2>The Crossover Story</h2>
              <h3 className="story-subtitle">Simplifying Global Travel</h3>
              <p>
                Crossover Global Travel was founded on a simple premise: international travel should be exhilarating, not exhausting. In an era where endless booking options and confusing visa requirements can overwhelm even the most seasoned traveler, we act as your personal compass.
              </p>
              <p>
                We specialize in curating bespoke travel experiences across the USA, Mexico, Canada, Europe, and beyond. Whether you are planning a complex multi-city corporate itinerary, a deeply romantic honeymoon, or a sprawling family adventure, our global team manages the infinite details so you can focus entirely on the journey.
              </p>
              <div className="story-highlights">
                <div className="story-highlight">
                  <span className="check-icon">✓</span>
                  <span>Curated Itineraries</span>
                </div>
                <div className="story-highlight">
                  <span className="check-icon">✓</span>
                  <span>Premium Partnerships</span>
                </div>
                <div className="story-highlight">
                  <span className="check-icon">✓</span>
                  <span>End-to-End Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Global Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-section">
        <div className="container">
          <div className="values-header text-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide every journey we plan.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Uncompromising Quality</h3>
              <p>We partner exclusively with top-tier airlines, luxury hotels, and highly-vetted local guides to ensure your experience meets the highest global standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Radical Transparency</h3>
              <p>No hidden fees, no surprise routing, and no stress. We believe in clear, upfront communication throughout the entire planning process.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Deep Local Expertise</h3>
              <p>We don't just book trips; we engineer experiences. Our team possesses intimate, on-the-ground knowledge of our core destinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <div className="container text-center">
          <h2>Ready to write your next chapter?</h2>
          <p>Let our experts build the perfect itinerary for your next global adventure.</p>
          <div className="hero-btns" style={{justifyContent: 'center', marginTop: '30px'}}>
            <Link href="/contact" className="btn btn-accent pulse-btn">
              ✈️ Plan Your Trip
            </Link>
            <a href="tel:+18884007136" className="btn btn-outline-white">
              📞 Talk to an Expert
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
