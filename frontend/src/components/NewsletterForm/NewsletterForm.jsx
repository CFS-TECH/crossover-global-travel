"use client";
import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Temporary simulation until database is connected
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div style={{textAlign: 'center', padding: '20px 0'}}>
        <div style={{fontSize: '30px', marginBottom: '10px'}}>✅</div>
        <h4 style={{margin: '0', color: 'white'}}>Subscribed Successfully!</h4>
        <p style={{fontSize: '14px', marginTop: '5px', opacity: 0.9}}>Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input 
        type="email" 
        name="email"
        placeholder="Your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <button 
        type="submit" 
        className="btn btn-accent full-width"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Subscribing...' : 'Subscribe Now'}
      </button>
      {status === 'error' && (
        <p style={{color: '#ff6b6b', fontSize: '13px', marginTop: '10px'}}>Oops! Something went wrong.</p>
      )}
    </form>
  );
}
