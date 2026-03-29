import React from 'react';
import { ArrowRight, UserCircle } from 'lucide-react';
import './HeroSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video-bg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="hero-content">
            <AnimatedTitle text="HIRE CDL-A DRIVERS FASTER AND CUT HIRING COSTS" className="hero-title" />
            <p className="hero-subtitle">
              Trust Future Solution for hassle-free recruiting and focus on driving your business forward. We'll help you staff your fleet faster, save money, and time risk-free!
            </p>
            <a href="#services" className="btn-blue btn-hero">
              Learn More <ArrowRight size={20} />
            </a>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
}
