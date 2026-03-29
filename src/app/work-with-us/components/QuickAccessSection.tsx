import React from 'react';
import { Contact2 } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function QuickAccessSection() {
  return (
    <section className="wwu-qa-section">
      <div className="container">
        
        <div className="wwu-qa-grid">
          {/* Left Side */}
          <div className="qa-text-content">
            <AnimatedTitle 
              text="QUICK ACCESS TO<br/>JOB OPPORTUNITIES"
              className="title-large"
              accentWords={['OPPORTUNITIES']}
              accentColor="var(--text-dark)"
            />
            <ScrollReveal direction="up" delay={0.2}>
              <p className="qa-desc mt-4">
                Future Solution Logistic offers immediate access to the latest job opportunities.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side */}
          <div className="qa-card-content">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="qa-info-card glass-morphism">
                <div className="qa-icon-wrapper">
                  <Contact2 size={32} color="#fff" />
                </div>
                <p className="qa-card-text">
                  Our drivers not only secure employment 30% faster compared to independent searches but also enjoy unique benefits like a dedicated recruiter and 24-hour pre-approval.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
        
      {/* Full Width Truck Array */}
      <ScrollReveal direction="up" delay={0.4} width="100%">
        <div className="container mt-12">
          <div className="qa-truck-array">
            <img 
              src="https://images.unsplash.com/photo-1542362567-b0550029315e?auto=format&fit=crop&q=80&w=1400" 
              alt="Fleet of modern semi-trucks parked in a row" 
              className="qa-trucks-img"
            />
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
}
