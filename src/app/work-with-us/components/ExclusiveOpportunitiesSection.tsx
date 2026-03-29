import React from 'react';
import { UserSearch } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ExclusiveOpportunitiesSection() {
  return (
    <section className="wwu-exclusive-section">
      <div className="container">
        
        {/* Header */}
        <div className="exclusive-header">
          <div className="exclusive-text-block">
            <AnimatedTitle 
              text="EXCLUSIVE<br/>OPPORTUNITIES."
              className="title-large text-white"
            />
            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-4 text-white opacity-80 max-w-lg">
                We have access to exclusive job openings and offers that may not be available on job boards. This enables you to quickly find the best job opportunities.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="left" delay={0.3}>
            <div className="search-icon-circle-white">
              <UserSearch size={24} color="#1A1A1A" />
            </div>
          </ScrollReveal>
        </div>

        {/* Feature Cards Stack */}
        <div className="exclusive-cards-stack mt-12">
          
          {/* Card 1 */}
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="exclusive-card">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="mock-status-bar">
                    <span className="mock-time">9:41</span>
                  </div>
                  <div className="mock-circle-progress">
                    <span className="mock-percent">99%</span>
                  </div>
                  <p className="mock-label text-blue">Waiting for approval</p>
                </div>
              </div>
              <div className="exclusive-card-content">
                <h3 className="title-medium text-white mb-2">24-Hour Pre-Approval</h3>
                <p className="text-white opacity-80 text-sm">
                  Our team processes driver applications promptly and ensures pre-approval within 24 hours. You can submit applications conveniently around the clock through our website.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal direction="up" delay={0.4} width="100%">
            <div className="exclusive-card">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="mock-status-bar">
                    <span className="mock-time">9:41</span>
                  </div>
                  <div className="mock-success-content">
                    <div className="mock-check-icon">✓</div>
                    <h2 className="mock-val">87%</h2>
                    <p className="mock-day">Hire Success Rate</p>
                  </div>
                </div>
              </div>
              <div className="exclusive-card-content">
                <h3 className="title-medium text-white mb-2">High Success Rate</h3>
                <p className="text-white opacity-80 text-sm">
                  Over 87% of drivers placed through our agency successfully complete the hiring process and start working, demonstrating the high effectiveness of our services.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
