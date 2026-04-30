"use client";
import { useState } from 'react';
import './InquiryForm.css';

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send data to the backend here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h4>Inquiry Sent!</h4>
        <p>Our travel expert will call you shortly on your provided number.</p>
        <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another</button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Destination</label>
        <select required>
          <option value="">Select Destination</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
          <option value="other">Other Global</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" required />
      </div>
      
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="+1 (XXX) XXX-XXXX" required />
      </div>
      
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="example@mail.com" required />
      </div>
      
      <button type="submit" className="btn btn-accent btn-full">Get Free Quote</button>
      <p className="form-disclaimer">By clicking, you agree to our terms and to be contacted by our experts.</p>
    </form>
  );
}
