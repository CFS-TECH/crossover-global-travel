import { notFound } from 'next/navigation';
import Link from "next/link";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import "./page.css";

export function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: 'Destination Not Found' };
  
  return {
    title: `${dest.title} | Crossover Global Travel`,
    description: dest.desc,
  };
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  
  if (!dest) {
    notFound();
  }

  return (
    <main className="destination-detail-page">
      
      {/* Dynamic Hero Section */}
      <section className="dest-detail-hero">
        <div 
          className="dest-detail-bg" 
          style={{ backgroundImage: `url(${dest.heroImage || dest.image})` }}
        ></div>
        <div className="dest-detail-overlay"></div>
        <div className="container dest-detail-content">
          <span className="hero-tagline">{dest.heroTagline}</span>
          <h1>{dest.heroTitle}</h1>
          <div className="hero-badge-wrap">
            <span className="dest-tag-large">{dest.tag}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="dest-detail-content-section">
        <div className="container">
          <div className="dest-content-grid">
            <div className="dest-main-info">
              <h2>Overview</h2>
              <p className="dest-lead-text">{dest.desc}</p>
              
              <div className="highlights-box">
                <h3>Top Experiences</h3>
                <ul className="highlights-list">
                  {dest.highlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {dest.services && (
                <div className="services-box">
                  <h3>{dest.servicesTitle}</h3>
                  <div className="services-grid">
                    {dest.services.map((item, idx) => (
                      <div key={idx} className="service-chip">
                        <span className="check-icon">✦</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dest.gallery && (
                <div className="dest-gallery-section">
                  <h3>Photo Gallery</h3>
                  <div className="dest-gallery-grid">
                    {dest.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="gallery-img-wrap">
                        <img src={imgUrl} alt={`${dest.title} gallery ${idx + 1}`} className="gallery-img" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {dest.packages && (
                <div className="dest-packages-section">
                  <h3>Popular Packages</h3>
                  <div className="dest-packages-grid">
                    {dest.packages.map((pkg, idx) => (
                      <div key={idx} className="dest-pkg-card">
                        <div className="pkg-img" style={{ backgroundImage: `url(${pkg.image})` }}></div>
                        <div className="pkg-info">
                          <h4>{pkg.title}</h4>
                          <div className="pkg-meta">
                            <span>⏱ {pkg.duration}</span>
                            <span className="pkg-price">From {pkg.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="dest-sidebar">
              <div className="booking-card">
                <h3>Ready to go?</h3>
                <p>Our travel experts are ready to build your perfect {dest.title.split(' ')[0]} itinerary.</p>
                <div className="booking-features">
                  <span>✓ Lowest Price Guarantee</span>
                  <span>✓ 24/7 Support</span>
                  <span>✓ Tailored Itinerary</span>
                </div>
                <Link href="/contact" className="btn btn-accent full-width">
                  ✈️ {dest.ctaText}
                </Link>
                <a href="tel:+18884007136" className="btn-outline-dark full-width">
                  📞 Call an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dest-why-us">
        <div className="container">
          <div className="why-us-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Your premium partner for international travel</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">✨</div>
              <h4>Personalized travel planning</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">💎</div>
              <h4>Transparent pricing</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">⚡</div>
              <h4>Fast response</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🌍</div>
              <h4>Global travel expertise</h4>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="dest-final-cta">
        <div className="dest-cta-overlay"></div>
        <div className="container dest-cta-content">
          <h2>Ready to plan your dream trip?</h2>
          <div className="hero-btns dest-cta-btns">
            <Link href="/contact" className="btn btn-accent pulse-btn">
              ✈️ Talk to a Travel Expert
            </Link>
            <a href="tel:+18884007136" className="btn btn-outline-white">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="explore-more">
        <div className="container">
          <h2 className="section-title">Explore Other Destinations</h2>
          <div className="more-grid">
            {destinations.filter(d => d.slug !== dest.slug).slice(0, 3).map((other, idx) => (
              <Link href={`/destinations/${other.slug}`} key={idx} className="more-card">
                <div className="more-img" style={{backgroundImage: `url(${other.image})`}}></div>
                <div className="more-info">
                  <h4>{other.title}</h4>
                  <span>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
