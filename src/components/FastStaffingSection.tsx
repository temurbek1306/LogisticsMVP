import React from 'react';
import { ChevronsRight } from 'lucide-react';
import './FastStaffing.css';
import ScrollReveal from './animations/ScrollReveal';

export default function FastStaffingSection() {
  return (
    <section className="section fast-staffing-section">
      <div className="container">
        
        <ScrollReveal direction="left" delay={0.1}>
          <div className="staffing-header mb-4">
            <h2 className="title-large no-margin text-dark">
              STAFF YOUR<br/>FLEET <span className="text-blue">FASTER.</span>
            </h2>
            <div className="arrow-circle">
              <ChevronsRight size={32} color="#fff" />
            </div>
          </div>
        </ScrollReveal>

        <div className="staffing-grid">
          {/* Left Card */}
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="staffing-card dark-bg">
              <h3 className="staffing-title text-white">QUICK DRIVER<br/>PLACEMENT</h3>
              <p className="staffing-desc text-white opacity-90 mt-4 mb-4" style={{maxWidth: '400px'}}>
                Usually we provide the first drivers within the first week. The timeframe may vary depending on your company's specific requirements.
              </p>
              <div className="staffing-img-wrapper">
                <img src="/images/driver.png" alt="Happy driver in truck" className="staffing-img" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Card */}
          <ScrollReveal direction="left" delay={0.4} width="100%">
            <div className="staffing-card blue-bg">
              <h3 className="staffing-title text-white">DIVERSE HIRING<br/>STRATEGIES</h3>
              <p className="staffing-desc text-white opacity-90 mt-4 mb-4" style={{maxWidth: '430px'}}>
                We use various methods to search and recruit drivers, which enables us to hire them faster than the industry average.
              </p>
              <div className="staffing-img-wrapper">
                <img src="/images/laptop-charts.png" alt="Analytics laptop" className="staffing-img" />
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
