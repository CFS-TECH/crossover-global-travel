import Link from "next/link";
import { travelPackages } from "@/data/packages";
import "./page.css";

export const metadata = {
  title: "Travel Packages | Crossover Global Travel",
  description: "Handcrafted travel packages for every journey including Honeymoon, Family, Luxury, and Budget options.",
};

export default function PackagesPage() {
  return (
    <main className="packages-page">
      
      {/* Hero Section */}
      <section className="pkg-hero">
        <div className="pkg-hero-bg"></div>
        <div className="pkg-hero-overlay"></div>
        <div className="container pkg-hero-content">
          <span className="hero-tagline">Curated Experiences</span>
          <h1>Handcrafted Travel Packages for Every Journey</h1>
          <p>At Crossover Global Travel, we design travel experiences that go beyond ordinary trips. Whether you're planning a romantic escape, a family vacation, or a luxury getaway, our customized packages are built to match your style, budget, and expectations.</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="packages-list-section">
        <div className="container">
          <div className="packages-grid-full">
            {travelPackages.map((pkg, i) => (
              <div key={i} className="pkg-card-full">
                <div 
                  className="pkg-image" 
                  style={{backgroundImage: `url(${pkg.image})`}}
                >
                  <span className="pkg-tag">{pkg.tag}</span>
                </div>
                <div className="pkg-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  <Link href={`/packages/${pkg.slug}`} className="pkg-btn">
                    Explore {pkg.title} →
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
          <h2>Not sure which package suits you best?</h2>
          <p>Let our travel experts create a personalized plan for you.</p>
          <div className="hero-btns" style={{justifyContent: 'center', marginTop: '30px'}}>
            <Link href="/contact" className="btn btn-accent">
              ✈️ Plan My Trip
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
