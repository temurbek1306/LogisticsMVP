import React from 'react';
import { ShieldCheck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function VettingSection() {
  return (
    <section className="wwu-vetting-section">
      <div className="container wwu-split-grid">
        
        <div className="wwu-split-content">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="icon-circle white mb-8">
              <ShieldCheck size={24} color="#1A1A1A" />
            </div>
          </ScrollReveal>
          
          <AnimatedTitle 
            text="RIGOROUS<br/>EMPLOYER VETTING."
            className="title-large text-white"
          />
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-6 text-white opacity-80 max-w-md line-height-1-6">
              We carefully screen employers and partner only with those who prioritize driver safety and ethical business practices. Our vetting process has resulted in rejecting 27% of companies due to suspicions of unethical conduct.
            </p>
          </ScrollReveal>
        </div>

        <div className="wwu-split-visual">
          <ScrollReveal direction="left" delay={0.3}>
            <div className="magnifying-art-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1588626607212-9bd5385611f7?auto=format&fit=crop&q=80&w=800" 
                alt="Truck inside magnifying glass" 
                className="vetting-img" 
              />
              {/* Optional glowing effect for premium look */}
              <div className="vetting-glow"></div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
