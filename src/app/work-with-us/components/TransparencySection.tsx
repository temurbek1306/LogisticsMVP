import React from 'react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function TransparencySection() {
  const paymentData = [
    { route: 'TX-MO', miles: '527.00', amount: '$1,430.00' },
    { route: 'MO-PA', miles: '1,009.00', amount: '$2,760.00' },
    { route: 'MD-IL', miles: '733.00', amount: '$1,400.00' },
  ];

  return (
    <section className="wwu-transparency-section">
      <div className="container">
        <div className="transparency-grid">
          {/* Transparent Payment Card */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="transparency-card">
              <h3 className="title-medium text-dark mb-4 uppercase">Transparent Payment</h3>
              <p className="text-dark opacity-70 mb-6 text-sm">
                Upon request, we provide company statements with detailed information about the salary structure, ensuring complete transparency in payments.
              </p>
              
              <div className="payment-table shadow-sm">
                <div className="table-header">
                  <span>Route</span>
                  <span>Total Miles</span>
                  <span>Amount</span>
                </div>
                {paymentData.map((row, i) => (
                  <div key={i} className="table-row">
                    <span>{row.route}</span>
                    <span>{row.miles}</span>
                    <span>{row.amount}</span>
                  </div>
                ))}
                <div className="table-footer">
                  <span>Week's paycheck:</span>
                  <span className="text-blue font-bold">$5,590.00</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Proven Track Record Card */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="transparency-card">
              <h3 className="title-medium text-dark mb-4 uppercase">Proven Track Record</h3>
              <p className="text-dark opacity-70 mb-6 text-sm">
                We've successfully helped over 727 drivers secure employment. Don't just take our word for it; explore the <span className="text-blue font-bold cursor-pointer">reviews</span> from satisfied drivers.
              </p>
              
              <div className="stats-badges">
                <div className="stat-badge">
                  <div className="stars">★★★★★</div>
                  <span className="stat-label">Great!</span>
                </div>
                <div className="stat-badge alt">
                  <div className="stars">★★★★★</div>
                  <span className="stat-label">found a job quickly</span>
                </div>
                <div className="stat-badge">
                  <div className="stars">★★★★★</div>
                  <span className="stat-label">convenient schedule</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
