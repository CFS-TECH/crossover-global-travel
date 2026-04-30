import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const points = [
    'Personalized travel solutions',
    'Transparent pricing',
    'Fast response time',
    'Global travel expertise',
    'End-to-end support'
  ];

  return (
    <section className="why-choose-us">
      <div className="container why-container">
        <div className="why-image">
          <img src="/assets/why_us.png" alt="Travel Experience" />
        </div>
        <div className="why-content">
          <span className="section-tag">Why Choose Us</span>
          <h2>We don’t just plan trips — we create experiences.</h2>
          <p>
            At Crossover Global Travel, we specialize in crafting personalized international travel experiences. 
            From planning to booking, we ensure every journey is smooth, affordable, and unforgettable.
          </p>
          <ul className="why-list">
            {points.map((point, i) => (
              <li key={i}>
                <span className="check">✓</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
