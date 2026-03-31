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
            <div className="stat-label">YEARS OF<br />EXPERIENCE IN<br />RECRUITING</div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-number">
              30+<CheckCircle2 className="stat-icon" size={24} />
            </div>
            <div className="stat-label">CLIENT<br />COMPANIES</div>
          </div>

          {/* Decorative element removed */}
          <div className="road-graphic">
            <img
              src="/images/modern-white-truck.png?v=6"
              alt="Truck"
              className="floating-truck"
              style={{ mixBlendMode: 'multiply', filter: 'brightness(1)' }}
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
