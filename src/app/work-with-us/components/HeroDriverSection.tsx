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
            <button className="btn-primary flex items-center justify-center gap-2 mt-8">
              Learn More 
              <span className="btn-circle-icon"><ArrowRight size={18} /></span>
            </button>
          </ScrollReveal>
        </div>

        {/* Right Image/Cards */}
        <div className="wwu-hero-visual">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="driver-img-wrapper">
              <img 
                src="/images/work-with-us/driver1.png" 
                alt="Professional Truck Driver" 
                className="driver-main-img" 
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
