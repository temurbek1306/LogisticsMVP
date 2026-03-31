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
              accentColor="var(--primary-blue)"
            />
            <ScrollReveal direction="up" delay={0.2}>
              <p className="qa-desc mt-8">
                Future Solution Logistic offers immediate access to the latest job opportunities in the market.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side */}
          <div className="qa-card-content">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="qa-info-card-premium">
                <div className="qa-icon-wrapper-premium">
                  <Contact2 size={36} color="#fff" />
                </div>
                <p className="qa-card-text-premium">
                  Our drivers not only secure employment 30% faster compared to independent searches but also enjoy unique benefits like a dedicated recruiter and 24-hour pre-approval.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Fleet Image */}
        <ScrollReveal direction="up" delay={0.4} width="100%">
          <div className="qa-fleet-img-wrapper">
            <img 
              src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Fleet of modern semi-trucks" 
              className="qa-fleet-img"
            />
            <div className="qa-fleet-overlay">
              <h3 className="qa-fleet-title">Premium Fleet Partnerships</h3>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
