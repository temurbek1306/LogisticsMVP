import React from 'react';
import { Star } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function FlexibleHometimeSection() {
  return (
    <section className="wwu-hometime-section">
      <div className="container hometime-grid">
        
        <div className="hometime-content">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="icon-circle mb-8 bg-blue">
              <Star size={24} color="#fff" fill="#fff" />
            </div>
          </ScrollReveal>
          
          <AnimatedTitle 
            text="FLEXIBLE HOMETIME AND BONUSES."
            className="title-large text-dark"
          />
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-6 text-dark opacity-80 max-w-md line-height-1-6">
              We assist in finding employers who offer flexible schedules and various bonuses, Bundled with safety driving bonuses, referral programs, and loyalty incentives.
            </p>
          </ScrollReveal>
        </div>

        <div className="hometime-visual">
          <ScrollReveal direction="left" delay={0.3}>
            <div className="hometime-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&q=80&w=1000" 
                alt="Truck driver comfort and lifestyle" 
                className="hometime-img" 
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
