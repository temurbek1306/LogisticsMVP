import React from 'react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function TransparencySection() {
  const paymentData = [
    { route: 'CH-TX', miles: '1,420.00', amount: '$923.00' }, // 0.65 cpm
    { route: 'TX-FL', miles: '1,180.00', amount: '$767.00' },
    { route: 'FL-GA', miles: '1,400.00', amount: '$910.00' },
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
                  <span>Weekly Potential (4000 miles @ 0.65 CPM):</span>
                  <span className="text-blue font-bold">$2,600.00</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Proven Track Record Card */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="driver-img-wrapper">
              <img 
                src="/images/work-with-us/driver1.png" 
                alt="Professional Truck Driver" 
                className="driver-main-img" 
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
