import { notFound } from 'next/navigation';
import Link from "next/link";
import { getServiceBySlug, travelServices } from "@/data/services";
import "../../destinations/[slug]/page.css";

export function generateStaticParams() {
  return travelServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Crossover Global Travel`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  return (
    <main className="destination-detail-page">
      
      {/* Dynamic Hero Section */}
      <section className="dest-detail-hero">
        <div 
          className="dest-detail-bg" 
          style={{ backgroundImage: `url(${service.heroImage || service.image})` }}
        ></div>
        <div className="dest-detail-overlay"></div>
        <div className="container dest-detail-content">
          <span className="hero-tagline">{service.heroTagline}</span>
          <h1>{service.heroTitle}</h1>
          <div className="hero-badge-wrap">
            <span className="dest-tag-large">{service.tag}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="dest-detail-content-section">
        <div className="container">
          <div className="dest-content-grid">
            <div className="dest-main-info">
              <h2>Overview</h2>
              <p className="dest-lead-text">{service.desc}</p>
              
              <div className="highlights-box" style={{marginBottom: '30px'}}>
                <h3>Our Promise</h3>
                <ul className="highlights-list">
                  {service.highlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.services && (
                <div className="services-box" style={{marginBottom: '30px'}}>
                  <h3>{service.servicesTitle}</h3>
                  <div className="services-grid">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="service-chip">
                        <span className="check-icon">✦</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="highlights-box" style={{marginBottom: '30px', background: 'var(--bg-light)'}}>
                <h3>Why Choose This?</h3>
                <p style={{fontSize: '18px', fontStyle: 'italic', color: 'var(--primary)', fontWeight: '600'}}>
                  "{service.whyChooseText}"
                </p>
              </div>

              {service.gallery && (
                <div className="dest-gallery-section">
                  <h3>Service Gallery</h3>
                  <div className="dest-gallery-grid">
                    {service.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="gallery-img-wrap">
                        <img src={imgUrl} alt={`${service.title} gallery ${idx + 1}`} className="gallery-img" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.packages && (
                <div className="dest-packages-section">
                  <h3>Featured Options</h3>
                  <div className="dest-packages-grid">
                    {service.packages.map((subpkg, idx) => (
                      <div key={idx} className="dest-pkg-card">
                        <div className="pkg-img" style={{ backgroundImage: `url(${subpkg.image})` }}></div>
                        <div className="pkg-info">
                          <h4>{subpkg.title}</h4>
                          <div className="pkg-meta">
                            <span>⏱ {subpkg.duration}</span>
                            <span className="pkg-price">{subpkg.price}</span>
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
                <h3>Ready to get started?</h3>
                <p>Our global travel experts are ready to assist you with {service.title}.</p>
                <div className="booking-features">
                  <span>✓ Premium Service</span>
                  <span>✓ 24/7 Support</span>
                  <span>✓ Tailored Assistance</span>
                </div>
                <Link href="/contact" className="btn btn-accent full-width">
                  ✈️ {service.ctaText}
                </Link>
                <a href="tel:+18884007136" className="btn-outline-dark full-width">
                  📞 Call an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us (Universal) */}
      <section className="dest-why-us">
        <div className="container">
          <div className="why-us-header">
            <h2 className="section-title">Why Book With Us</h2>
            <p>Your premium partner for international travel</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">✨</div>
              <h4>Tailor-made travel experiences</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">💎</div>
              <h4>Transparent pricing</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🌍</div>
              <h4>Global travel expertise</h4>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon">🤝</div>
              <h4>Dedicated support</h4>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="dest-final-cta">
        <div className="dest-cta-overlay"></div>
        <div className="container dest-cta-content">
          <h2>Ready to elevate your travel experience?</h2>
          <div className="hero-btns dest-cta-btns">
            <Link href="/contact" className="btn btn-accent pulse-btn">
              ✈️ Talk to a Travel Expert
            </Link>
            <a href="tel:+18884007136" className="btn btn-outline-white">
              📞 Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Explore More Services */}
      <section className="explore-more">
        <div className="container">
          <h2 className="section-title">Explore Other Services</h2>
          <div className="more-grid">
            {travelServices.filter(s => s.slug !== service.slug).slice(0, 3).map((other, idx) => (
              <Link href={`/services/${other.slug}`} key={idx} className="more-card">
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
