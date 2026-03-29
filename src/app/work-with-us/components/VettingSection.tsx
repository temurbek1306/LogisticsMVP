import React from 'react';
import { ShieldCheck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function VettingSection() {
  return (
    <section className="wwu-vetting-section bg-primary-blue py-24">
      <div className="container hometime-grid">
        
        <div className="vetting-content">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="icon-circle white mb-8">
              <ShieldCheck size={24} color="#1A1A1A" />
            </div>
          </ScrollReveal>
          
          <AnimatedTitle 
            text="RIGOROUS EMPLOYER VETTING."
            className="title-large text-white"
          />
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-6 text-white opacity-80 max-w-md line-height-1-6">
              We carefully screen employers and partner only with those who prioritize driver safety and ethical business practices. Our vetting process has resulted in rejecting 27% of companies due to suspicions of unethical conduct.
            </p>
          </ScrollReveal>
        </div>

        <div className="vetting-visual">
          <ScrollReveal direction="left" delay={0.3}>
            <div className="hometime-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1591768793355-74d7c8691f1a?auto=format&fit=crop&q=80&w=1000" 
                alt="Truck inside magnifying glass" 
                className="hometime-img" 
              />
              <div className="rejected-stamp">REJECTED</div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
