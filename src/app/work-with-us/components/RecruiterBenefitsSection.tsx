import React from 'react';
import { Banknote, RouteOff, Truck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function RecruiterBenefitsSection() {
  const benefits = [
    {
      icon: <Banknote size={48} color="var(--primary-blue)" />,
      title: 'Competitive\nPay Rates',
      desc: 'All companies we work with offer pay rates ranging from 60 to 70 cpm, which is excellent in today’s market. We do not partner with companies that pay below market rates.'
    },
    {
      icon: <RouteOff size={48} color="var(--primary-blue)" />,
      title: 'Guaranteed\nMileage',
      desc: 'Our partner companies can guarantee drivers a minimum of 2,500 miles per week. No more sitting idle in your truck!'
    },
    {
      icon: <Truck size={48} color="var(--primary-blue)" />,
      title: 'Drop And\nHook',
      desc: 'Some companies in our network offer drop and hook options as well as dedicated lanes, allowing you to cover more miles and, consequently, earn more.'
    }
  ];

  return (
    <section className="wwu-benefits-section">
      <div className="container">
        
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <AnimatedTitle 
            text="YOU'LL BE ASSIGNED A PERSONAL RECRUITER WHO WILL ASSIST IN FINDING JOBS THAT MATCH YOUR REQUIREMENTS."
            className="title-large text-center"
            accentWords={['PERSONAL', 'RECRUITER']}
            accentColor="var(--primary-blue)"
          />
        </div>

        <div className="benefits-grid">
          {benefits.map((card, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.2 * (idx + 1)} width="100%">
              <div className="benefit-card">
                <div className="benefit-icon">
                  {card.icon}
                </div>
                <h3 className="title-medium text-dark mb-4 whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-dark opacity-80 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
