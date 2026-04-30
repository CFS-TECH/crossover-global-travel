import { notFound } from 'next/navigation';
import Link from "next/link";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import "./page.css";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };
  
  return {
    title: `${post.title} | Crossover Global Travel`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="blog-article-page">
      
      {/* Article Hero */}
      <section className="article-hero">
        <div 
          className="article-hero-bg" 
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className="article-hero-overlay"></div>
        <div className="container article-hero-content">
          <span className="article-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>By {post.author}</span>
            <span className="meta-dot">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="article-content-section">
        <div className="container">
          <div className="article-layout">
            
            {/* Main Content */}
            <article className="article-body">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Social Sharing */}
              <div className="article-share-section">
                <h3>Share this article:</h3>
                <div className="share-buttons">
                  <a href="#" className="share-btn fb">Share on Facebook</a>
                  <a href="#" className="share-btn tw">Share on Twitter</a>
                  <a href="#" className="share-btn li">Share on LinkedIn</a>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="article-author-bio">
                <div className="author-avatar">
                  <span className="avatar-icon">✈️</span>
                </div>
                <div className="author-bio-text">
                  <h4>{post.author}</h4>
                  <p>Our team of dedicated travel designers travels the globe to bring you firsthand insights, hidden gems, and expert advice for your next unforgettable journey.</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="sidebar-box newsletter-box">
                <div className="newsletter-icon">📬</div>
                <h3>Get Travel Inspiration</h3>
                <p>Subscribe to our newsletter for exclusive travel tips, destination guides, and special offers delivered straight to your inbox.</p>
                <NewsletterForm />
              </div>

              <div className="sidebar-box recent-posts-box">
                <h3>Recent Articles</h3>
                <div className="recent-posts-list">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((recent, idx) => (
                    <Link href={`/blog/${recent.slug}`} key={idx} className="recent-post-item">
                      <div className="recent-thumb" style={{backgroundImage: `url(${recent.image})`}}></div>
                      <div className="recent-info">
                        <h4>{recent.title}</h4>
                        <span>{recent.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="blog-final-cta">
        <div className="container text-center">
          <h2>Ready to turn your travel dreams into reality?</h2>
          <p>Let our experts handle the details.</p>
          <div className="hero-btns" style={{justifyContent: 'center', marginTop: '30px'}}>
            <Link href="/contact" className="btn btn-accent">
              ✈️ Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
