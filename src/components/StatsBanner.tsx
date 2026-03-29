'use client';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './StatsBanner.css';
import ScrollReveal from './animations/ScrollReveal';

export default function StatsBanner() {
  return (
    <div className="container" style={{ paddingBottom: '24px' }}>
      <ScrollReveal direction="up" delay={0.2}>
        <div className="stats-banner">
          <div className="stat-item">
            <div className="stat-number">
              5<CheckCircle2 className="stat-icon" size={24} />
            </div>
            <div className="stat-label">YEARS OF<br/>EXPERIENCE IN<br/>RECRUITING</div>
          </div>
          
          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-number">
              5K<span className="plus-sign">+</span>
            </div>
            <div className="stat-label">HIRED<br/>DRIVERS</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-number">
              63<CheckCircle2 className="stat-icon" size={24} />
            </div>
            <div className="stat-label">CLIENT<br/>COMPANIES</div>
          </div>

          {/* Decorative road element */}
          <div className="road-graphic">
             <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 120C50 120 100 80 150 40S200 0 200 0" stroke="#4B68C3" strokeWidth="40" strokeDasharray="10 10" />
             </svg>
             <img src="/images/white-truck.png" alt="Truck" className="floating-truck" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
