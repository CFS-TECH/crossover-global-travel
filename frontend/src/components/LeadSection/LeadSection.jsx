import './LeadSection.css';

export default function LeadSection() {
  return (
    <section className="lead-section">
      <div className="container">
        <div className="lead-card">
          <div className="lead-content">
            <h2>Let’s Plan Your Dream Trip</h2>
            <p>Tell us your destination, budget, and dates — our experts will handle everything.</p>
            <div className="lead-btns">
              <button className="btn btn-accent lead-btn">✈️ Plan My Trip</button>
              <button className="btn btn-outline lead-btn">📞 Call Now</button>
            </div>
          </div>
        </div>
        
        <div className="final-cta">
          <h3>Ready to explore the world?</h3>
          <button className="btn btn-accent hero-btn">Talk to a Travel Expert Now</button>
        </div>
      </div>
    </section>
  );
}
