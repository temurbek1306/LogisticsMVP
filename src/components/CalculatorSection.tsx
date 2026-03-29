'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './CalculatorSection.css';

export default function CalculatorSection() {
  const [units, setUnits] = useState('');
  const [hires, setHires] = useState('');
  const [savings, setSavings] = useState(0);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const hireCount = parseInt(hires) || 0;
    // Basic calculation showing $500 per driver
    setSavings(hireCount * 500);
  };

  return (
    <section id="calculator" className="section calculator-section">
      <div className="container">
        <div className="grid-2col calc-grid">
          {/* Mockup Left */}
          <div className="calc-graphic-container">
            <h2 className="title-large text-dark mb-4" style={{lineHeight: 1}}>CALCULATE<br/>YOUR SAVINGS</h2>
            <div className="phone-mockup shadow-lg">
              <div className="phone-header">
                <span>9:41</span>
                <span>📶 LTE 🔋</span>
              </div>
              <div className="calc-display text-dark">
                {savings > 0 ? `$${savings.toLocaleString()}` : '$$$'}
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

          {/* Form Right */}
          <div className="calc-form-container">
            <form onSubmit={handleCalculate} className="calc-form">
              <div className="input-group">
                <label>How many power units do you have in your fleet?</label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="Enter the amount" 
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>How many drivers do you hire per month on average?</label>
                <input 
                  type="number" 
                  min="0"
                  placeholder="Enter the amount" 
                  value={hires}
                  onChange={(e) => setHires(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-blue btn-calc mt-4 shadow-sm">
                Calculate <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
