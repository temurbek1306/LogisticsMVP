import React from 'react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AmenitiesAndSafetySection() {
  return (
    <section className="wwu-amenities-section">
      <div className="container">
        
        {/* Amenities Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="amenities-card bg-dark text-white p-12 rounded-3xl mb-12">
            <AnimatedTitle 
              text="MODERN TRUCKS WITH AMENITIES."
              className="title-large"
            />
            <p className="mt-4 opacity-80 max-w-2xl">
              Our partner companies offer top-of-the-line trucks with automatic transmissions, manufactured between 2020 and 2023, that are fully equipped with everything you need for comfortable work and rest on the road.
            </p>
          </div>
        </ScrollReveal>

        {/* Interior Image */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="interior-img-wrapper rounded-3xl overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1591768793355-74d7c8691f1a?auto=format&fit=crop&q=80&w=1200" 
              alt="Truck interior amenities" 
              className="interior-img"
            />
          </div>
        </ScrollReveal>

        {/* Safety Section */}
        <div className="safety-grid">
          <div className="safety-content">
            <AnimatedTitle 
              text="SAFETY RATING SCREENING."
              className="title-large text-dark"
            />
            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-4 opacity-70 max-w-lg">
                We review the safety rating of each company we work with, ensuring that they have a track record of successful inspections in the majority of cases. We value your safety and work with companies that prioritize safety standards.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="left" delay={0.4}>
            <div className="safety-card-mockup bg-dark rounded-2xl p-8 relative overflow-hidden">
               <div className="mockup-header flex justify-between items-center mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Pegasus Express, Inc.</h4>
                      <div className="flex gap-1 text-yellow-500 text-xs">★★★★★ <span className="text-gray-400">(57)</span></div>
                    </div>
                  </div>
                  <span className="text-green-500 text-xs font-bold">Open</span>
               </div>
               <p className="text-gray-400 text-xs mb-4">Transportation service in Lemont, Illinois</p>
               <div className="rejected-stamp">REJECTED</div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
