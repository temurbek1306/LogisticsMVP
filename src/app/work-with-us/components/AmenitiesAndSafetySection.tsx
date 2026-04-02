import React from 'react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AmenitiesAndSafetySection() {
  return (
    <section className="wwu-amenities-section">
      <div className="container">
        
        {/* Amenities Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="amenities-card">
            <AnimatedTitle 
              text="MODERN TRUCKS WITH AMENITIES."
              className="title-large text-white"
            />
            <p className="mt-4 text-white opacity-80 max-w-2xl">
              Our partner companies offer top-of-the-line trucks with automatic transmissions, manufactured between 2020 and 2023, that are fully equipped with everything you need for comfortable work and rest on the road.
            </p>

            <div className="interior-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&q=80&w=1200" 
                alt="Truck interior amenities" 
                className="interior-img"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
