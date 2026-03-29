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
    <section className="wwu-form-section bg-primary-blue py-20 px-4">
      <div className="container max-w-4xl bg-white rounded-3xl p-12 shadow-2xl">
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
          <div className="form-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="form-group col-span-1">
              <label className="form-label">First name <span className="text-red-500">*</span></label>
              <input type="text" name="firstName" placeholder="First name" className="form-input" required onChange={handleChange} />
            </div>
            <div className="form-group col-span-1">
              <label className="form-label">Last name <span className="text-red-500">*</span></label>
              <input type="text" name="lastName" placeholder="Last name" className="form-input" required onChange={handleChange} />
            </div>
            <div className="form-group col-span-1">
              <label className="form-label">City and state <span className="text-red-500">*</span></label>
              <input type="text" name="cityState" placeholder="City and state" className="form-input" required onChange={handleChange} />
            </div>
            <div className="form-group col-span-1">
              <label className="form-label">Phone number <span className="text-red-500">*</span></label>
              <input type="tel" name="phone" placeholder="Phone number" className="form-input" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-group mb-8">
            <label className="form-label">Trailer preference <span className="text-red-500">*</span></label>
            <div className="checkbox-group flex gap-6">
              {['Dry Van', 'Flatbed', 'Reefer'].map((type) => (
                <label key={type} className="checkbox-item flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="trailerPreference" 
                    value={type} 
                    checked={formData.trailerPreference === type} 
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

           <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-group">
              <label className="form-label">How many miles a week do you want to drive? <span className="text-red-500">*</span></label>
              <input type="number" name="milesPerWeek" placeholder="2500" className="form-input" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">How many years of experience do you have? <span className="text-red-500">*</span></label>
              <input type="number" name="yearsExperience" placeholder="2" className="form-input" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             <div className="form-group">
                <label className="form-label">Do you have a clean driving record? <span className="text-red-500">*</span></label>
                <div className="flex gap-6">
                  {['YES', 'NO'].map((opt) => (
                    <label key={opt} className="checkbox-item flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="cleanRecord" value={opt} checked={formData.cleanRecord === opt} onChange={handleChange} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
             </div>
             <div className="form-group">
                <label className="form-label">Have you ever been enrolled in a SAP program? <span className="text-red-500">*</span></label>
                <div className="flex gap-6">
                  {['YES', 'NO'].map((opt) => (
                    <label key={opt} className="checkbox-item flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sapProgram" value={opt} checked={formData.sapProgram === opt} onChange={handleChange} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
             </div>
          </div>

          <div className="form-group mb-8">
            <label className="checkbox-item flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required />
              <span className="text-sm">Do you agree with the <span className="text-blue">privacy policy</span>?</span>
            </label>
          </div>

          <div className="text-center">
            <button 
                type="submit" 
                className={`btn-primary px-12 py-4 rounded-full flex items-center justify-center gap-3 mx-auto ${submitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={submitted}
            >
              {submitted ? 'Submitting...' : <>Submit <Send size={18} /></>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
