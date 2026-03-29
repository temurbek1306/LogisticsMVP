'use client';
import React, { useState } from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';
import './CalculatorSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

export default function CalculatorSection() {
  const [units, setUnits] = useState('');
  const [hires, setHires] = useState('');
  const [savings, setSavings] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const hireCount = parseInt(hires) || 0;
    setSavings(hireCount * 500);
  };

  return (
    <section id="calculator" className="section calculator-section">
      <div className="container">
        <div className="grid-2col calc-grid">

          {/* Left: Title + Phone Mockup */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="calc-graphic-container">
              <div>
                <p className="calc-eyebrow">Savings Calculator</p>
                <AnimatedTitle 
                  text="CALCULATE<br/>YOUR SAVINGS" 
                  className="title-large text-dark m-0" 
                />
              </div>
              <div className="phone-mockup shadow-lg">
                <div className="phone-header">
                  <span>9:41</span>
                  <span>📶 LTE 🔋</span>
                </div>
                <div className={`calc-display ${savings !== null && savings > 0 ? 'has-result' : ''}`}>
                  {savings !== null && savings > 0 ? `$${savings.toLocaleString()}` : '$$$'}
                </div>
                <div className="calc-keys">
                  <div className="c-key gray">AC</div>
                  <div className="c-key gray">+/-</div>
                  <div className="c-key gray">%</div>
                  <div className="c-key blue-key">÷</div>
                  <div className="c-key light">7</div>
                  <div className="c-key light">8</div>
                  <div className="c-key light">9</div>
                  <div className="c-key blue-key">×</div>
                  <div className="c-key light">4</div>
                  <div className="c-key light">5</div>
                  <div className="c-key light">6</div>
                  <div className="c-key blue-key">-</div>
                  <div className="c-key light">1</div>
                  <div className="c-key light">2</div>
                  <div className="c-key light">3</div>
                  <div className="c-key blue-key">+</div>
                  <div className="c-key light zero">0</div>
                  <div className="c-key light">.</div>
                  <div className="c-key blue-key">=</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="calc-form-container">
              <form onSubmit={handleCalculate} className="calc-form">
                <div className="input-group">
                  <label htmlFor="calc-units">How many power units do you have in your fleet?</label>
                  <input
                    id="calc-units"
                    type="number"
                    min="0"
                    placeholder="Enter the amount"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="calc-hires">How many drivers do you hire per month on average?</label>
                  <input
                    id="calc-hires"
                    type="number"
                    min="0"
                    placeholder="Enter the amount"
                    value={hires}
                    onChange={(e) => setHires(e.target.value)}
                  />
                </div>

                {/* Result card - show when calculated */}
                {savings !== null && (
                  <div className="savings-result">
                    <div>
                      <p className="savings-result-label">Your Monthly Savings</p>
                      <p className="savings-result-amount">${savings.toLocaleString()}</p>
                    </div>
                    <DollarSign size={40} color="rgba(255,255,255,0.3)" />
                  </div>
                )}

                <button type="submit" className="btn-blue btn-calc">
                  Calculate <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
