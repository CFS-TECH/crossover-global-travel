import Link from "next/link";
import { destinations } from "@/data/destinations";
import "./page.css";

export const metadata = {
  title: "Destinations | Crossover Global Travel",
  description: "Explore our top travel destinations including USA, Mexico, Canada, and Europe.",
};

export default function Destinations() {
  return (
    <main className="destinations-page">
      
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-bg"></div>
        <div className="dest-hero-overlay"></div>
        <div className="container dest-hero-content">
          <span className="hero-tagline">Worldwide Catalog</span>
          <h1>Explore Top Global Destinations</h1>
          <p>Discover the world’s most exciting destinations with Crossover Global Travel. Whether you’re planning a relaxing vacation, a luxury escape, or an adventure trip, we offer customized travel solutions tailored to your needs.</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="destinations-list-section">
        <div className="container">
          <div className="destinations-grid-full">
            {destinations.map((dest, i) => (
              <div key={i} className="dest-card-full">
                <div 
                  className="dest-image" 
                  style={{backgroundImage: `url(${dest.image})`}}
                >
                  <span className="dest-tag">{dest.tag}</span>
                </div>
                <div className="dest-info">
                  <h3>{dest.title}</h3>
                  <p>{dest.desc}</p>
                  <Link href={`/destinations/${dest.slug}`} className="dest-btn">
                    Explore {dest.title.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="dest-bottom-cta">
        <div className="container text-center">
          <h2>Not sure where to go?</h2>
          <p>Let our experts help you plan your perfect trip.</p>
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
