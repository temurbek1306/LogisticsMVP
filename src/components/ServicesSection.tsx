import React from 'react';
import { Search, Truck, User, Users } from 'lucide-react';
import './ServicesSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="services-header">
            <h2 className="title-large no-margin">WE CAN HELP YOU FIND:</h2>
            <div className="search-icon-bg">
              <Search size={24} color="#CBD5E1" />
            </div>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {/* Card 1 */}
          <ScrollReveal direction="up" delay={0.2} width="100%">
            <div className="service-card dark">
              <div className="service-icon">
                <Truck size={40} />
              </div>
              <h3 className="service-title">Owner<br/>Operators</h3>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal direction="up" delay={0.4} width="100%">
            <div className="service-card blue">
              <div className="service-icon">
                <User size={40} />
              </div>
              <h3 className="service-title">Solo CDL-A<br/>Drivers</h3>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal direction="up" delay={0.6} width="100%">
            <div className="service-card light">
              <div className="service-icon-group">
                <div className="service-icon">
                  <User size={30} />
                </div>
                <div className="service-icon">
                  <User size={30} />
                </div>
              </div>
              <h3 className="service-title">Team CDL-A<br/>Drivers</h3>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
