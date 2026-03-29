'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, RefreshCw } from 'lucide-react';
import './GuaranteesSection.css';
import ScrollReveal from './animations/ScrollReveal';
import AnimatedTitle from './animations/AnimatedTitle';

const guarantees = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Thorough Driver Screening',
    desc: 'We evaluate drivers by checking their driving record, conducting criminal background checks, performing DOT physicals, and using the FMCSA Pre-Screening Program (PSP).',
    accent: '#3A56AF',
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Pay Only After Results',
    desc: "You won't be required to make any payments until the driver starts delivering loads. This ensures that you're only paying for services that have already been rendered.",
    accent: '#2563EB',
  },
  {
    icon: RefreshCw,
    number: '03',
    title: '50% Discount Guarantee',
    desc: "If, for any reason, the driver we provide ends up not working for a month, we're happy to offer you a 50% discount for the next driver.",
    accent: '#1D4ED8',
  },
];

export default function GuaranteesSection() {
  return (
    <section className="section guarantees-section">
      <div className="container">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="guar-header">
            <div>
              <p className="guar-eyebrow">WHY CHOOSE US</p>
              <AnimatedTitle text="WE GUARANTEE<br/>RESULTS." className="title-large text-white m-0" />
            </div>
            <div className="guar-badge">
              <ShieldCheck size={28} color="#fff" strokeWidth={1.5} />
              <span>100% Risk-Free</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="guar-grid">
          {guarantees.map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.15} width="100%">
              <motion.div
                className="guar-card"
                whileHover={{ y: -6, borderColor: 'rgba(58,86,175,0.6)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top row: number + icon */}
                <div className="guar-card-top">
                  <span className="guar-number">{item.number}</span>
                  <div className="guar-icon-wrap" style={{ background: `${item.accent}22` }}>
                    <item.icon size={26} color={item.accent} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Divider */}
                <div className="guar-divider" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

                {/* Title */}
                <h3 className="guar-title">{item.title}</h3>

                {/* Description */}
                <p className="guar-desc">{item.desc}</p>

                {/* Bottom glow */}
                <div className="guar-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${item.accent}33, transparent 70%)` }} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
