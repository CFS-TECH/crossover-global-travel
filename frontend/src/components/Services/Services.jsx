import './Services.css';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Travel Planning',
      desc: 'Bespoke itineraries tailored to your unique preferences and wanderlust.',
      image: '/assets/travel_planning.png'
    },
    {
      title: 'Flight Booking',
      desc: 'Seamless connections with premium airlines and exclusive corporate rates.',
      image: '/assets/flight_booking.png'
    },
    {
      title: 'Hotel Booking',
      desc: 'Handpicked luxury stays and boutique accommodations worldwide.',
      image: '/assets/hotel_booking.png'
    },
    {
      title: 'Visa Assistance',
      desc: 'Expert guidance for stress-free visa processing and travel documentation.',
      image: '/assets/visa_assistance.png'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tagline">Excellence in Motion</span>
          <h2>Our <span className="text-gradient">Premium</span> Services</h2>
          <p className="section-desc">Experience travel redefined with our comprehensive suite of global services.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <Link href="/contact" key={i} className="service-card" style={{ textDecoration: 'none' }}>
              <div className="service-card-inner">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-link">
                    Learn More <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
