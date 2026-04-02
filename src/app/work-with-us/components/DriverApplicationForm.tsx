"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function DriverApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cityState: '',
    phone: '',
    trailerPreference: 'Dry Van',
    milesPerWeek: '2500',
    yearsExperience: '2',
    cleanRecord: 'YES',
    sapProgram: 'NO',
    privacyPolicy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic API delay
    setTimeout(() => {
        setSubmitted(false);
        alert('Application submitted successfully!');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <section id="apply" className="wwu-form-section">
      <div className="container">
        <div className="form-wrapper-premium">
          
          {/* Side Info / Trust Panel */}
          <div className="form-info-panel">
            <div className="trust-badge">
              <Send size={18} />
              <span>OFFICIAL APPLICATION</span>
            </div>
            <h2 className="panel-title">JOIN THE ELITE FLEET</h2>
            <p className="panel-desc">
              Your journey to a better career starts here. We process applications within 24 hours.
            </p>
            
            <div className="process-steps">
              <div className="step-item">
                <div className="step-num">01</div>
                <div className="step-text">Fill out form</div>
              </div>
              <div className="step-item">
                <div className="step-num">02</div>
                <div className="step-text">Recruiter call</div>
              </div>
              <div className="step-item">
                <div className="step-num">03</div>
                <div className="step-text">Pre-approval</div>
              </div>
            </div>
          </div>

          <div className="form-container-premium shadow-2xl">
            <div className="text-center mb-8">
              <AnimatedTitle 
                text="APPLICATION FORM"
                className="title-medium text-dark mb-2"
              />
              <p className="text-gray-400 text-xs">CONFIDENTIAL DATA PROCESSING</p>
            </div>

            <form onSubmit={handleSubmit} className="driver-form">
              <div className="form-section-title">Personal Information</div>
              <div className="form-grid mb-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="John" className="form-input-premium" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Doe" className="form-input-premium" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cityState">City and state</label>
                  <input type="text" id="cityState" name="cityState" placeholder="Chicago, IL" className="form-input-premium" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" className="form-input-premium" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-section-title">Professional Preferences</div>
              <div className="form-group mb-6">
                <label className="form-label">Trailer preference</label>
                <div className="form-radio-grid">
                  {['Dry Van', 'Flatbed', 'Reefer'].map((type) => (
                    <label 
                        key={type} 
                        className={`form-radio-card ${formData.trailerPreference === type ? 'active' : ''}`}
                        tabIndex={0}
                        onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') handleChange({ target: { name: 'trailerPreference', value: type } } as any) }}
                    >
                      <input 
                        type="radio" 
                        name="trailerPreference" 
                        value={type} 
                        checked={formData.trailerPreference === type} 
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-grid mb-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="milesPerWeek">Weekly miles goal</label>
                  <input type="number" id="milesPerWeek" name="milesPerWeek" placeholder="2500" className="form-input-premium" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="yearsExperience">Experience (Years)</label>
                  <input type="number" id="yearsExperience" name="yearsExperience" placeholder="2" className="form-input-premium" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-section-title">Compliance & History</div>
              <div className="form-grid mb-8">
                 <div className="form-group">
                    <label className="form-label">Clean driving record?</label>
                    <div className="form-boolean-group">
                      {['YES', 'NO'].map((opt) => (
                        <label 
                            key={opt} 
                            className={`boolean-btn ${formData.cleanRecord === opt ? 'active' : ''}`}
                            tabIndex={0}
                            onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') handleChange({ target: { name: 'cleanRecord', value: opt } } as any) }}
                        >
                          <input type="radio" name="cleanRecord" value={opt} checked={formData.cleanRecord === opt} onChange={handleChange} className="sr-only" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                 </div>
                 <div className="form-group">
                    <label className="form-label">SAP program history?</label>
                    <div className="form-boolean-group">
                      {['YES', 'NO'].map((opt) => (
                        <label 
                            key={opt} 
                            className={`boolean-btn ${formData.sapProgram === opt ? 'active' : ''}`}
                            tabIndex={0}
                            onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') handleChange({ target: { name: 'sapProgram', value: opt } } as any) }}
                        >
                          <input type="radio" name="sapProgram" value={opt} checked={formData.sapProgram === opt} onChange={handleChange} className="sr-only" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                 </div>
              </div>

              <div className="form-footer">
                <label className="flex items-center gap-3 cursor-pointer" htmlFor="privacyPolicy">
                  <input type="checkbox" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required className="w-5 h-5 accent-blue-900" />
                  <span className="text-xs text-gray-500 font-medium">I agree with the <span className="text-blue-900 underline">privacy policy</span></span>
                </label>

                <button 
                    type="submit" 
                    className={`btn-submit-premium ${submitted ? 'loading' : ''}`}
                    disabled={submitted}
                >
                  {submitted ? 'PROCESSING...' : <>SUBMIT APPLICATION</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
