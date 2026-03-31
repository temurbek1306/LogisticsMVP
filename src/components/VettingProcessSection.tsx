'use client';
import React from 'react';
import { FileSearch, Search, UserCheck, Briefcase, CheckCircle2 } from 'lucide-react';
import './VettingProcessSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

const vettingSteps = [
  {
    icon: <FileSearch size={32} />,
    title: "STEP 1",
    desc: "Company sends hiring requirements.",
    delay: 0.1
  },
  {
    icon: <Search size={32} />,
    title: "STEP 2",
    desc: "We search our driver network.",
    delay: 0.2
  },
  {
    icon: <UserCheck size={32} />,
    title: "STEP 3",
    desc: "We qualify candidates.",
    delay: 0.3
  },
  {
    icon: <Briefcase size={32} />,
    title: "STEP 4",
    desc: "We present driver profiles.",
    delay: 0.4
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "STEP 5",
    desc: "Company makes the hire.",
    delay: 0.5
  }
];

export default function VettingProcessSection() {
  return (
    <section className="vetting-section">
      <div className="container">
        
        <div className="vetting-header">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-2">
              <span className="section-tag">OUR PROCESS</span>
              <AnimatedTitle 
                text="OUR RECRUITING PROCESS" 
                className="title-xl text-dark no-margin"
                accentWords={['PROCESS']}
                accentColor="var(--primary-blue)"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <p className="vetting-intro">
              We keep recruiting <strong>simple and effective:</strong>
            </p>
          </ScrollReveal>
        </div>

        <div className="vetting-grid">
          {vettingSteps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={step.delay} width="100%">
              <div className="vetting-card">
                <div className="vetting-icon-box">
                  {step.icon}
                </div>
                <h3 className="vetting-card-title">{step.title}</h3>
                <p className="vetting-card-desc">{step.desc}</p>
                <div className="vetting-card-footer">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Verified Step</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="vetting-footer">
          <ScrollReveal direction="up" delay={0.6}>
            <p className="vetting-footer-text">
              Efficient. Professional. Reliable.
            </p>
          </ScrollReveal>
        </div>

        {/* Global Search Decoration replaced with Truck */}
        <div className="vetting-decoration">
           <img 
             src="/images/modern-white-truck.png" 
             alt="Decoration" 
             style={{ width: '400px', opacity: 0.05, filter: 'grayscale(1)' }} 
           />
        </div>
      </div>
    </section>
  );
}
