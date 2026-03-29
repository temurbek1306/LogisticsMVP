import React from 'react';
import { Search, Truck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function JobTypesSection() {
  const jobTypes = ['OTR', 'Regional / Local', 'SAP-Friendly'];
  const trailers = [
    { name: 'Flatbed', img: 'https://images.unsplash.com/photo-1621360091873-1991d0d931ea?q=80&w=600' },
    { name: 'Reefer', img: 'https://images.unsplash.com/photo-1586191582056-174898863f82?q=80&w=600' },
    { name: 'Tanker', img: 'https://images.unsplash.com/photo-1591764868154-1eb31e145f59?q=80&w=600' },
    { name: 'Auto Hauler', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600' }
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
