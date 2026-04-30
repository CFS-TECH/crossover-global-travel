import Link from "next/link";
import { blogPosts } from "@/data/blog";
import "./page.css";

export const metadata = {
  title: "Travel Blog & Journals | Crossover Global Travel",
  description: "Read the latest travel tips, destination guides, and industry news from the Crossover Global Travel experts.",
};

export default function BlogPage() {
  return (
    <main className="blog-index-page">
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-bg"></div>
        <div className="blog-hero-overlay"></div>
        <div className="container blog-hero-content">
          <span className="hero-tagline">Our Travel Journal</span>
          <h1>Travel Insights, Tips & Inspiration</h1>
          <p>Explore expert travel guides, destination insights, and smart tips from Crossover Global Travel. Whether you're planning your next trip or looking for inspiration, our blog helps you travel smarter and better.</p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="blog-categories-bar" style={{ background: 'white', padding: '20px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
            <span style={{ padding: '8px 20px', background: 'var(--bg-light)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>🌍 Destination Guides</span>
            <span style={{ padding: '8px 20px', background: 'var(--bg-light)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>💰 Budget Travel Tips</span>
            <span style={{ padding: '8px 20px', background: 'var(--bg-light)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>💎 Luxury Travel</span>
            <span style={{ padding: '8px 20px', background: 'var(--bg-light)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>💑 Honeymoon Travel</span>
            <span style={{ padding: '8px 20px', background: 'var(--bg-light)', borderRadius: '50px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>✈️ Travel Tips & Hacks</span>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      {blogPosts.length > 0 && (
        <section className="featured-blog-section" style={{ padding: '80px 0 40px' }}>
          <div className="container">
            <Link href={`/blog/${blogPosts[0].slug}`} className="featured-blog-card">
              <div 
                className="featured-blog-image" 
                style={{backgroundImage: `url(${blogPosts[0].image})`}}
              >
                <span className="blog-category">{blogPosts[0].category}</span>
              </div>
              <div className="featured-blog-info">
                <span className="blog-date">{blogPosts[0].date}</span>
                <h2>{blogPosts[0].title}</h2>
                <p>{blogPosts[0].excerpt}</p>
                <span className="blog-read-more">Read Featured Article →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      <section className="blog-list-section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.slice(1).map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className="blog-card">
                <div 
                  className="blog-image" 
                  style={{backgroundImage: `url(${post.image})`}}
                >
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-info">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-read-more">Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="blog-cta-section">
        <div className="container text-center">
          <h2>Ready to turn inspiration into reality?</h2>
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
