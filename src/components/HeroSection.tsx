import React from 'react';
import { ArrowRight, UserCircle } from 'lucide-react';
import './HeroSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" style={{ backgroundImage: "url('/images/hero-bg.png')" }}></div>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="hero-content">
            <h1 className="hero-title">HIRE CDL-A DRIVERS FASTER AND CUT HIRING COSTS</h1>
            <p className="hero-subtitle">
              Trust Future Solution for hassle-free recruiting and focus on driving your business forward. We'll help you staff your fleet faster, save money, and time risk-free!
            </p>
            <a href="#services" className="btn-blue btn-hero">
              Learn More <ArrowRight size={20} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5} width="fit-content" className="ml-auto">
          <div className="hero-badge">
          <div className="badge-header">
            <UserCircle size={48} className="text-blue" style={{ strokeWidth: 1.5 }} />
            <div className="badge-title-block">
              <strong className="badge-name">Ethan Smith</strong>
              <span className="badge-status">Driving experience:</span>
            </div>
          </div>
          <div className="badge-body">
            <p className="badge-years">10 years</p>
            <p className="badge-desc">Looking for dry van jobs</p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
