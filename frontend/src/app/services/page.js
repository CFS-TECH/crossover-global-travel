import Link from "next/link";
import { travelServices } from "@/data/services";
import "./page.css";

export const metadata = {
  title: "Premium Travel Services | Crossover Global Travel",
  description: "Explore our premium travel services including flight booking, hotel reservations, custom travel planning, and visa assistance.",
};

export default function ServicesPage() {
  return (
    <main className="packages-page">
      
      {/* Hero Section */}
      <section className="pkg-hero">
        <div className="pkg-hero-bg"></div>
        <div className="pkg-hero-overlay"></div>
        <div className="container pkg-hero-content">
          <span className="hero-tagline">Excellence in Motion</span>
          <h1>Our Premium Travel Services</h1>
          <p>Experience travel redefined with our comprehensive suite of global services. From securing exclusive flights and luxury accommodations to handling complex visa documentation, we ensure every aspect of your journey is seamless.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="packages-list-section">
        <div className="container">
          <div className="packages-grid-full">
            {travelServices.map((service, i) => (
              <div key={i} className="pkg-card-full">
                <div 
                  className="pkg-image" 
                  style={{backgroundImage: `url(${service.image})`}}
                >
                  <span className="pkg-tag">{service.tag}</span>
                </div>
                <div className="pkg-info">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href={`/services/${service.slug}`} className="pkg-btn">
                    Explore {service.title.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pkg-bottom-cta">
        <div className="container text-center">
          <h2>Need personalized assistance?</h2>
          <p>Our global travel experts are standing by to assist you with any request.</p>
          <div className="hero-btns" style={{justifyContent: 'center', marginTop: '30px'}}>
            <Link href="/contact" className="btn btn-accent">
              ✈️ Make an Inquiry
            </Link>
            <a href="tel:+18884007136" className="btn btn-outline">
              📞 Talk to Expert
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
