import React from 'react';
import { Search, Truck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function JobTypesSection() {
  const jobTypes = ['OTR', 'Regional / Local', 'SAP-Friendly'];
  const trailers = [
    { name: 'Flatbed', img: 'https://images.unsplash.com/photo-1586864387789-0630b7f6c321?auto=format&fit=crop&q=80&w=400' },
    { name: 'Reefer', img: 'https://images.unsplash.com/photo-1621360091873-1991d0d931ea?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tanker', img: 'https://images.unsplash.com/photo-1591768487224-b1eb2ce61e49?auto=format&fit=crop&q=80&w=400' },
    { name: 'Auto Hauler', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section className="wwu-jobs-section bg-primary-blue">
      <div className="container">
        
        {/* Top Header */}
        <div className="jobs-header">
          <AnimatedTitle 
            text="JOBS WE CAN HELP YOU FIND:"
            className="title-large text-white m-0"
          />
          <ScrollReveal direction="left" delay={0.2}>
            <div className="search-icon-circle-white">
              <Search size={24} color="var(--primary-blue)" />
            </div>
          </ScrollReveal>
        </div>

        {/* Buttons */}
        <div className="jobs-buttons-grid mt-6">
          {jobTypes.map((job, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)} width="100%">
              <div className="job-outline-btn">
                {job}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trailers Section */}
        <div className="trailers-header mt-16">
          <AnimatedTitle 
            text="ALL TYPES OF TRAILERS"
            className="title-medium text-white m-0 uppercase"
          />
          <ScrollReveal direction="left" delay={0.2}>
            <div className="search-icon-circle-white">
              <Truck size={24} color="var(--primary-blue)" />
            </div>
          </ScrollReveal>
        </div>

        <div className="trailers-grid mt-6">
          {trailers.map((trailer, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)} width="100%">
              <div className="trailer-card">
                <img src={trailer.img} alt={trailer.name} className="trailer-img" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
