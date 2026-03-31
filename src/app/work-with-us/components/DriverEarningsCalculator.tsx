'use client';
import React, { useState, useEffect } from 'react';
import { Wallet, TrendingUp, Calendar, MapPin, Gauge, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import AnimatedTitle from '@/components/animations/AnimatedTitle';

export default function DriverEarningsCalculator() {
  const [miles, setMiles] = useState(4000);
  const [cpm, setCpm] = useState(0.65);
  const [weekly, setWeekly] = useState(0);
  const [annual, setAnnual] = useState(0);

  useEffect(() => {
    const totalWeekly = miles * cpm;
    setWeekly(totalWeekly);
    setAnnual(totalWeekly * 50); 
  }, [miles, cpm]);

  return (
    <section className="wwu-calc-premium-section" id="driver-calculator">
      <div className="container">
        <div className="calc-modern-grid">
          {/* Left Column: Result Dashboard */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="calc-dashboard-card">
              <div className="calc-dashboard-header">
                <div className="dashboard-avatar">
                  DS
                </div>
                <div>
                  <h4 className="dashboard-user">Future Driver</h4>
                  <p className="dashboard-status">
                    <span className="pulse-dot"></span>
                    Estimates Active
                  </p>
                </div>
                <Wallet className="ms-auto opacity-40" size={24} />
              </div>

              <div className="calc-main-result">
                <span className="result-label">Estimated Weekly Pay</span>
                <div className="result-value-wrap">
                  <h2 className="result-amount">${weekly.toLocaleString()}</h2>
                  <span className="result-currency">USD</span>
                </div>
              </div>

              <div className="calc-mini-stats">
                <div>
                  <span className="mini-stat-label">Annual Potential</span>
                  <p className="mini-stat-val">${annual.toLocaleString()}</p>
                </div>
                <div style={{ paddingLeft: '30px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="mini-stat-label">Miles/Week</span>
                  <p className="mini-stat-val">{miles.toLocaleString()} mi</p>
                </div>
              </div>
            </div>
            
            <div className="calc-trust-badge-footer mt-8 px-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <TrendingUp size={32} className="text-blue" />
                <div>
                  <h4 className="text-lg font-bold text-dark">Transparency at its Finest.</h4>
                  <p className="text-gray-500 text-sm">Full company statements provided upon request.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interaction */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="calc-interaction-column">
              <div className="mb-10">
                <span className="premium-tag-blue">EARNINGS ESTIMATOR</span>
                <AnimatedTitle 
                  text="HOW MUCH CAN<br/>YOU EARN?" 
                  className="title-large text-dark no-margin"
                  accentWords={['EARN?']}
                  accentColor="#3B82F6"
                />
              </div>

              <div className="calc-input-row">
                <div className="calc-row-header">
                  <label className="calc-label">Weekly Mileage</label>
                  <span className="calc-val-display">{miles.toLocaleString()} <span>mi</span></span>
                </div>
                <input 
                  type="range" min="1500" max="6000" step="100" 
                  value={miles} onChange={(e) => setMiles(Number(e.target.value))}
                  className="premium-slider"
                />
                <div className="range-hints">
                  <span>1,500</span>
                  <span>6,000+</span>
                </div>
              </div>

              <div className="calc-input-row">
                <div className="calc-row-header">
                  <label className="calc-label">Pay per Mile (CPM)</label>
                  <span className="calc-val-display">${cpm.toFixed(2)} <span>/mi</span></span>
                </div>
                <input 
                  type="range" min="0.50" max="0.95" step="0.01" 
                  value={cpm} onChange={(e) => setCpm(Number(e.target.value))}
                  className="premium-slider"
                />
                <div className="range-hints">
                  <span>$0.50</span>
                  <span>$0.95</span>
                </div>
              </div>

              <button className="btn-start-earning">
                Start Earning Now <ArrowRight size={20} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
