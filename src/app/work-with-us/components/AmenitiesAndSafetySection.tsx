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

        {/* Safety Section */}
        <div className="safety-grid mt-20">
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
            <div className="vetting-dashboard relative">
               <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-blue-50 flex-center rounded-2xl text-blue font-bold shadow-sm">PE</div>
                    <div>
                      <h4 className="text-dark font-bold text-lg leading-tight">Pegasus Express, Inc.</h4>
                      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1">USDOT 3123849</p>
                    </div>
                  </div>
                   {/* Removed Rejected status */}

               </div>
               
               <div className="space-y-4">
                 <div className="report-item">
                    <span className="report-label">Safety Rating</span>
                    <span className="status-failed report-status">Unsatisfactory</span>
                 </div>
                 <div className="report-item">
                    <span className="report-label">Vehicle Maintenance</span>
                    <span className="status-failed report-status">Alert</span>
                 </div>
                 <div className="report-item">
                    <span className="report-label">Driver Fitness</span>
                    <span className="status-passed report-status">Satisfactory</span>
                 </div>
                 <div className="report-item">
                    <span className="report-label">Successful Inspections</span>
                    <span className="font-bold text-dark">42%</span>
                 </div>
               </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
