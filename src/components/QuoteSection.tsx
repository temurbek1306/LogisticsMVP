'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './QuoteSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    cityState: '',
    phoneNumber: '',
    driversNeeded: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(res.ok) {
        setSuccess(true);
        setFormData({companyName: '', email: '', cityState: '', phoneNumber: '', driversNeeded: ''});
        setTimeout(() => setSuccess(false), 5000); // Hide banner after 5s
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="section quote-section">
      <div className="container">
        <ScrollReveal direction="up" delay={0.2} width="100%">
          <div className="quote-box shadow-lg">
            
            {/* Left Panel */}
            <div className="quote-left">
              <div className="quote-content">
                <h2 className="title-large">GET A QUOTE<br/>FOR FREE</h2>
                <p className="mt-4 opacity-80" style={{ maxWidth: '300px' }}>
                  Getting a consultation from us won't cost you a dime.<br/><br/>
                  Fill the form on the right and we'll contact you!
                </p>
              </div>
              <ScrollReveal direction="left" delay={0.6} duration={1.2}>
                <img src="/images/white-truck.png" alt="Clean White Truck" className="quote-truck-img" />
              </ScrollReveal>
            </div>

            {/* Right Form */}
            <div className="quote-right">
              {success && (
                <div className="success-banner text-white mb-4">
                  Thank you! Your quote request has been submitted successfully to our system.
                </div>
              )}
              <form onSubmit={handleSubmit} className="quote-form-layout">
                <div className="input-group">
                  <label>Company name *</label>
                  <input required type="text" placeholder="Company name" value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Email *</label>
                  <input required type="email" placeholder="example@google.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>City and state *</label>
                  <input required type="text" placeholder="City and state" value={formData.cityState} onChange={e => setFormData({...formData, cityState: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>Phone number *</label>
                  <input required type="tel" placeholder="Phone number" value={formData.phoneNumber} onChange={e => setFormData({...formData, phoneNumber: e.target.value})} />
                </div>
                <div className="input-group">
                  <label>How many drivers do you need? *</label>
                  <input required type="text" placeholder="Number of drivers" value={formData.driversNeeded} onChange={e => setFormData({...formData, driversNeeded: e.target.value})} />
                </div>
                <button type="submit" disabled={loading} className="btn-blue btn-calc mt-4 w-full" style={{ justifyContent: 'center' }}>
                  {loading ? 'Submitting...' : 'Get Quote'} <ArrowRight size={20} />
                </button>
              </form>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
