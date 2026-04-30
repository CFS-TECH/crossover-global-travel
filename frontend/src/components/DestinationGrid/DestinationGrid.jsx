import './DestinationGrid.css';

import { destinations } from '@/data/destinations';
import Link from 'next/link';

export default function DestinationGrid() {

  return (
    <section className="destinations-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Worldwide Catalog</span>
          <h2>Explore Top Destinations</h2>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((dest, i) => (
            <div key={i} className="dest-card">
              <div 
                className="dest-image" 
                style={{backgroundImage: `url(${dest.image})`}}
              >
                <span className="dest-tag">{dest.tag}</span>
              </div>
              <div className="dest-info">
                <h3>{dest.title}</h3>
                <p>{dest.desc}</p>
                <Link href={`/destinations/${dest.slug}`} className="dest-btn">Plan This Trip →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
