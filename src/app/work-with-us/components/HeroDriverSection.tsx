import React from 'react';
import { ArrowRight, UserCircle2 } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function HeroDriverSection() {
  return (
    <section className="wwu-hero-section">
      <div className="container wwu-hero-container">
        
        {/* Left Content */}
        <div className="wwu-hero-content">
          <AnimatedTitle 
            text="SUPERCHARGE YOUR<br/>DRIVING CAREER" 
            className="wwu-hero-title title-large"
            accentWords={['SUPERCHARGE']}
            accentColor="var(--primary-blue)"
          />
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="wwu-hero-desc">
              We offer competitive pay rates, guaranteed weekly mileage, and exclusive opportunities with reputable companies at zero cost. Our drivers find employment 30% faster than when searching independently.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <button className="btn-primary flex-center gap-2 mt-6">
              Learn More 
              <span className="btn-circle-icon"><ArrowRight size={18} /></span>
            </button>
          </ScrollReveal>
        </div>

        {/* Right Image/Cards */}
        <div className="wwu-hero-visual">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="driver-img-wrapper">
              {/* Temporarily using placeholder for custom asset */}
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Truck Driver" 
                className="driver-main-img" 
              />
              
              {/* Floating Experience Card */}
              <div className="driver-floating-card glass-morphism shadow-2xl">
                <div className="card-header border-b border-gray-100 pb-4 mb-4">
                  <div className="driver-avatar-bg">
                    <UserCircle2 size={32} color="var(--primary-blue)" />
                  </div>
                  <div>
                    <h4 className="driver-name">Ethan Smith</h4>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Verified Driver</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="xp-row flex justify-between items-center bg-blue-50/50 p-2 rounded-lg">
                    <span className="xp-label">Experience:</span>
                    <span className="xp-val">10 years</span>
                  </div>
                  <p className="card-note mt-4 text-sm font-medium">Successfully placed at <span className="text-blue font-bold">Interstate Express</span></p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
