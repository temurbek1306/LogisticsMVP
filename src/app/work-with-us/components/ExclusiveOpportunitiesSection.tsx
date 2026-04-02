import React from 'react';
import { UserSearch } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ExclusiveOpportunitiesSection() {
  return (
    <section id="success-rate" className="wwu-exclusive-section">
      <div className="container">
        
        {/* Header */}
        <div className="exclusive-header">
          <div className="exclusive-text-block">
            <AnimatedTitle 
              text="EXCLUSIVE<br/>OPPORTUNITIES."
              className="title-large text-white"
              accentWords={['EXCLUSIVE']}
              accentColor="#8CA4F1"
            />
            <ScrollReveal direction="up" delay={0.2}>
              <p className="exclusive-desc">
                We have access to exclusive job openings and offers that may not be available on job boards. This enables you to quickly find the best job opportunities.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="left" delay={0.3}>
            <div className="exclusive-icon-circle">
              <UserSearch size={32} color="#fff" />
            </div>
          </ScrollReveal>
        </div>

        {/* Feature Cards */}
        <div className="exclusive-cards-grid">
          
          {/* Card 1 — Pre-Approval */}
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="exclusive-feature-card">
              <div className="phone-device">
                <div className="phone-device-screen">
                  <div className="phone-top-bar">
                    <span className="phone-time">9:41</span>
                  </div>
                  <div className="phone-circle-wrap">
                    <svg viewBox="0 0 120 120" className="phone-svg" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="54" fill="transparent" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle cx="60" cy="60" r="54" fill="transparent" stroke="#3B82F6" strokeWidth="8"
                        strokeDasharray="339.3" strokeDashoffset="3.4"
                        strokeLinecap="round" transform="rotate(-90 60 60)" />
                    </svg>
                    <span className="phone-pct">99%</span>
                  </div>
                  <p className="phone-sublabel">Processing Approval</p>
                </div>
              </div>
              <div className="exclusive-feature-info">
                <h3 className="exclusive-feature-title">24-Hour Pre-Approval</h3>
                <p className="exclusive-feature-desc">
                  Our team processes driver applications promptly and ensures pre-approval within 24 hours. You can submit applications conveniently around the clock.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 — Success Rate */}
          <ScrollReveal direction="up" delay={0.4} width="100%">
            <div className="exclusive-feature-card">
              <div className="phone-device">
                <div className="phone-device-screen">
                  <div className="phone-top-bar">
                    <span className="phone-time">9:41</span>
                  </div>
                  <div className="phone-success-wrap">
                    <div className="phone-check-ring">
                      <div className="phone-check-icon">✓</div>
                    </div>
                    <span className="phone-big-num">87%</span>
                    <p className="phone-success-label">Hire Success Rate</p>
                  </div>
                </div>
              </div>
              <div className="exclusive-feature-info">
                <h3 className="exclusive-feature-title">High Success Rate</h3>
                <p className="exclusive-feature-desc">
                  Over 87% of drivers placed through our agency successfully complete the hiring process and start working, demonstrating high effectiveness.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
