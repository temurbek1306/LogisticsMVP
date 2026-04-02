import React from 'react';
import { Truck } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function JobTypesSection() {
  const jobTypes = ['OTR', 'Regional / Local', 'SAP-Friendly'];
  const trailers = [
    { name: 'Dry van', img: '/images/work-with-us/dry-van.png' },
    { name: 'Reefer', img: '/images/work-with-us/reefer.png' },
    { name: 'Flatbed', img: '/images/work-with-us/flatbed.png' },
    { name: 'Car hauler', img: 'https://images.unsplash.com/photo-1566367576585-051277d52997?q=80&w=800' }
  ];

  return (
    <section id="job-types" className="wwu-jobs-section py-24 bg-primary-blue">
      <div className="container">
        
        {/* Top Header */}
        <div className="jobs-header mb-16 flex justify-between items-center">
          <AnimatedTitle 
            text="JOBS WE CAN HELP YOU FIND:"
            className="title-large text-white m-0"
            accentWords={['JOBS']}
            accentColor="#8CA4F1"
          />
        </div>

        {/* Buttons */}
        <div className="jobs-buttons-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {jobTypes.map((job, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)} width="100%">
              <div className="job-outline-btn-premium p-10 text-center border-2 border-white/20 rounded-[40px] text-white font-bold text-3xl font-['Teko'] uppercase transition-all hover:bg-white hover:text-primary-blue cursor-default">
                {job}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trailers Section */}
        <div className="trailers-header-row flex items-center gap-6 mb-12">
            <h4 className="text-sm uppercase font-extrabold tracking-[0.3em] text-white opacity-40">All Types of Trailers</h4>
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <Truck size={24} color="rgba(255,255,255,0.4)" />
        </div>

        <div className="trailers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trailers.map((trailer, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)} width="100%">
              <div className="trailer-card-premium group">
                <img 
                    src={trailer.img} 
                    alt={trailer.name} 
                    className="trailer-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="trailer-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl font-bold font-['Teko'] uppercase">{trailer.name}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
