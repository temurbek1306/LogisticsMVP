import React from 'react';
import { Star } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function FlexibleHometimeSection() {
  return (
    <section className="wwu-hometime-section">
      <div className="container wwu-split-grid">
        
        <div className="wwu-split-content">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="icon-circle mb-8">
              <Star size={24} color="#fff" fill="#fff" />
            </div>
          </ScrollReveal>
          
          <AnimatedTitle 
            text="FLEXIBLE<br/>HOMETIME<br/>AND BONUSES."
            className="title-large text-dark"
          />
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-6 text-dark opacity-80 max-w-md line-height-1-6">
              We assist in finding employers who offer flexible schedules and various bonuses, such as safe driving bonuses, referral bonuses, loyalty programs, and more.
            </p>
          </ScrollReveal>
        </div>

        <div className="wwu-split-visual">
          <ScrollReveal direction="left" delay={0.3}>
            <img 
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800" 
              alt="Family on a road trip looking at a driving semi-truck" 
              className="hometime-img" 
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
