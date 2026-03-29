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
    <section className="wwu-form-section">
      <div className="container">
        <div className="form-container-card shadow-2xl">
          <div className="text-center mb-12">
            <AnimatedTitle 
              text="DRIVER APPLICATION FORM"
              className="title-large text-dark mb-4"
            />
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              We value your privacy and assure you that all the information provided in this application will remain strictly confidential.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="driver-form">
            <div className="form-grid mb-8">
              <div className="form-group">
                <label className="form-label">First name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" placeholder="First name" className="form-input" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Last name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" placeholder="Last name" className="form-input" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">City and state <span className="text-red-500">*</span></label>
                <input type="text" name="cityState" placeholder="City and state" className="form-input" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" placeholder="Phone number" className="form-input" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-group mb-8">
              <label className="form-label">Trailer preference <span className="text-red-500">*</span></label>
              <div className="form-radio-group">
                {['Dry Van', 'Flatbed', 'Reefer'].map((type) => (
                  <label key={type} className="form-radio-label">
                    <input 
                      type="radio" 
                      name="trailerPreference" 
                      value={type} 
                      checked={formData.trailerPreference === type} 
                      onChange={handleChange}
                      className="w-5 h-5 accent-blue-900"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-grid mb-8">
              <div className="form-group">
                <label className="form-label">Weekly miles goal <span className="text-red-500">*</span></label>
                <input type="number" name="milesPerWeek" placeholder="2500" className="form-input" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Experience (Years) <span className="text-red-500">*</span></label>
                <input type="number" name="yearsExperience" placeholder="2" className="form-input" required onChange={handleChange} />
              </div>
            </div>

            <div className="form-grid mb-8">
               <div className="form-group">
                  <label className="form-label">Clean driving record? <span className="text-red-500">*</span></label>
                  <div className="form-radio-group">
                    {['YES', 'NO'].map((opt) => (
                      <label key={opt} className="form-radio-label">
                        <input type="radio" name="cleanRecord" value={opt} checked={formData.cleanRecord === opt} onChange={handleChange} className="w-5 h-5 accent-blue-900" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
               </div>
               <div className="form-group">
                  <label className="form-label">SAP program history? <span className="text-red-500">*</span></label>
                  <div className="form-radio-group">
                    {['YES', 'NO'].map((opt) => (
                      <label key={opt} className="form-radio-label">
                        <input type="radio" name="sapProgram" value={opt} checked={formData.sapProgram === opt} onChange={handleChange} className="w-5 h-5 accent-blue-900" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
               </div>
            </div>

            <div className="form-group mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required className="w-5 h-5 accent-blue-900" />
                <span className="text-sm font-medium text-gray-600">I agree with the <span className="text-blue underline">privacy policy</span></span>
              </label>
            </div>

            <div className="text-center">
              <button 
                  type="submit" 
                  className={`btn-submit ${submitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={submitted}
              >
                {submitted ? 'Submitting...' : <>Submit Application</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
