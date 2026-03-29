'use client';
import React from 'react';
import { ShieldCheck, FileCheck, Zap, UserCheck, Search } from 'lucide-react';
import './VettingProcessSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

const vettingSteps = [
  {
    icon: <ShieldCheck size={32} />,
    title: "50+ BACKGROUND CHECKS",
    desc: "Rigorous criminal history, employment verification, and drug/alcohol testing history for every candidate.",
    delay: 0.1
  },
  {
    icon: <FileCheck size={32} />,
    title: "MVR & PSP SCREENING",
    desc: "Detailed safety performance history and motor vehicle reports ensuring only the safest drivers join your fleet.",
    delay: 0.3
  },
  {
    icon: <UserCheck size={32} />,
    title: "DQ FILE COMPLIANCE",
    desc: "Complete Driver Qualification files managed by our experts to keep you 100% DOT compliant at all times.",
    delay: 0.5
  },
  {
    icon: <Zap size={32} />,
    title: "RAPID DEPLOYMENT",
    desc: "Our automated vetting pipeline allows us to place qualified, ready-to-work drivers in just 48-72 hours.",
    delay: 0.7
  }
];

export default function VettingProcessSection() {
  return (
    <section className="vetting-section">
      <div className="container">
        
        <div className="vetting-header">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-2">
              <span className="section-tag">OUR STANDARDS</span>
              <AnimatedTitle 
                text="HOW WE ENSURE QUALITY" 
                className="title-xl text-white no-margin"
                accentWords={['QUALITY']}
                accentColor="var(--primary-blue-light)"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <p className="vetting-intro">
              We don't just find drivers; we find the <strong>right</strong> drivers. Our multi-stage vetting process minimizes your risk and maximizes fleet performance.
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

        {/* Global Search Decoration */}
        <div className="vetting-decoration">
           <Search size={300} strokeWidth={0.5} color="rgba(255,255,255,0.03)" />
        </div>
      </div>
    </section>
  );
}
