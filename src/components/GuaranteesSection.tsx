import React from 'react';
import { Search, CreditCard, Percent, CheckCircle } from 'lucide-react';
import './GuaranteesSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function GuaranteesSection() {
  return (
    <section className="section guarantees-section">
      <div className="container">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="guar-header">
            <h2 className="title-large text-white m-0">
              WE GUARANTEE<br/>
              <span className="text-blue">RESULTS.</span>
            </h2>
            <div className="check-circle">
              <CheckCircle size={24} color="#1A1A1A" />
            </div>
          </div>
        </ScrollReveal>

        <div className="guar-grid">
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="guar-card">
              <Search size={32} color="#fff" strokeWidth={1.5} className="mb-4" />
              <p className="guar-desc text-white opacity-90 mt-4">
                We evaluate drivers by checking their driving record, conducting criminal background checks, performing DOT physicals, and using the FMCSA Pre-Screening Program (PSP).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} width="100%">
            <div className="guar-card">
              <CreditCard size={32} color="#fff" strokeWidth={1.5} className="mb-4" />
              <p className="guar-desc text-white opacity-90 mt-4">
                You won't be required to make any payments until the driver starts delivering loads. This ensures that you're only paying for services that have already been rendered.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6} width="100%">
            <div className="guar-card">
              <Percent size={32} color="#fff" strokeWidth={1.5} className="mb-4" />
              <p className="guar-desc text-white opacity-90 mt-4">
                If, for any reason, the driver we provide you with ends up not working for a month, we're happy to offer you a 50% discount for the next driver.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
