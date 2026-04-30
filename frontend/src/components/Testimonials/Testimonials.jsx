import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      text: "Smooth and professional travel planning experience!",
      author: "Robert M., USA"
    },
    {
      text: "Highly recommended for international trips. They handled everything perfectly.",
      author: "Sarah L., Canada"
    },
    {
      text: "Expert guidance and great deals on flights to Mexico.",
      author: "Juan R., Mexico"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Testimonials</span>
          <h2>What Our Travelers Say</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div key={i} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{review.text}</p>
              <p className="testimonial-author">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
