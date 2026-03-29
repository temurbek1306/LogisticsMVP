import React from 'react';
import { BadgeDollarSign, XOctagon, CalculatorIcon } from 'lucide-react';
import './SavingsSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

export default function SavingsSection() {
  return (
    <section className="section savings-section">
      <div className="container">
        
        {/* Top 2 columns */}
        <div className="savings-grid mb-4">
          <ScrollReveal direction="left" delay={0.2} width="100%">
            <div className="saving-card blue-bg">
              <div className="icon-circle mb-4">
                <BadgeDollarSign size={24} color="#3A56AF" />
              </div>
              <AnimatedTitle
                text="SAVE THOUSANDS<br/>ON RECRUITMENT<br/>EXPENSES."
                className="title-large text-white"
              />
              <p className="text-white opacity-90 mt-4" style={{ maxWidth: '400px' }}>
                Our clients save an average of $500 per hired driver, or $20,000 annually, based on the hiring costs of a typical 10-100 truck fleet's annual recruiting expenses.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4} width="100%">
            <div className="saving-image-card">
              <img src="/images/money.png" alt="Stack of Money" className="money-img" />
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom 2 columns */}
        <div className="savings-grid-half mb-4">
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="feature-card dark-bg">
              <div className="no-fees-graphic">
                <p className="fees-text">Set-up fees<br/>or monthly<br/>fees</p>
                <XOctagon size={48} color="#EF4444" className="mt-4" />
              </div>
              <div className="feature-content text-white">
                <h3 className="title-large">No set-up<br/>fees</h3>
                <p className="opacity-80">Unlike other companies, we do not charge any set-up fees or monthly fees, meaning that our clients only pay for what they need, when they need it.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} width="100%">
            <div className="feature-card dark-bg">
              <div className="phone-graphic">
                <div className="phone-screen">
                  <p className="text-gray">Your balance</p>
                  <p className="phone-balance">+$$.$$</p>
                  <p className="text-gray" style={{ fontSize: '0.8rem', marginTop: 'auto' }}>Payment will<br/>be later</p>
                </div>
              </div>
              <div className="feature-content text-white">
                <h3 className="title-large">Risk-free<br/>payment</h3>
                <p className="opacity-80">Our payment system minimizes financial risk for clients. You only payafter the driver starts delivering loads and for services already rendered.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Personalized Pricing Banner */}
        <ScrollReveal direction="up" delay={0.6} width="100%">
          <div className="pricing-banner dark-bg">
            <AnimatedTitle
              text="WE OFFER PERSONALIZED PRICING<br/>BASED ON COMPANY SIZE AND NEEDS,<br/>RATHER THAN A ONE-SIZE-FITS-ALL<br/>APPROACH."
              className="title-large no-margin text-white"
              accentWords={['PERSONALIZED', 'PRICING']}
              accentColor="#8CA4F1"
            />
            <div className="icon-circle white">
              <CalculatorIcon size={24} color="#1A1A1A" />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
