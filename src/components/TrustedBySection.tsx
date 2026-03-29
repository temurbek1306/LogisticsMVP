"use client";
import React from 'react';
import './TrustedBySection.css';
import AnimatedTitle from './animations/AnimatedTitle';

const partners = [
  { name: 'DTM Trucking Inc', src: '/images/partners/1.png' },
  { name: 'I-Team Trucking', src: '/images/partners/2.png' },
  { name: 'IFM Logistics Inc', src: '/images/partners/3.png' },
  { name: 'Ontop Trucking LLC', src: '/images/partners/4.png' },
  { name: 'Prime Cargo Logistics Inc', src: '/images/partners/5.png' },
  { name: 'Triumph Logistics Inc', src: '/images/partners/6.png' },
  { name: 'UZB SAM INC', src: '/images/partners/7.png' },
  { name: 'TOP ROAD EXPRESS INC', src: '/images/partners/8.png' },
  { name: 'IMRAN', src: '/images/partners/9.png' },
  { name: 'Evergreen Road LLC', src: '/images/partners/10.png' },
  { name: 'MKA USA INC', src: '/images/partners/11.png' },
  { name: 'GRAY CARGO LLC', src: '/images/partners/12.png' },
  { name: 'D.B INTERNATIONAL GROUP LLC', src: '/images/partners/13.png' },
  { name: 'FREIGHT HUB LLC', src: '/images/partners/14.png' },
  { name: 'MACA Transportation LLC', src: '/images/partners/15.png' },
];

// Carouselni to'xtovsiz aylantirish uchun elementlarni ikki marta takrorlaymiz
const scrollingPartners = [...partners, ...partners];

export default function TrustedBySection() {
  return (
    <section className="trusted-section section">
      <div className="container overflow-hidden">
        <AnimatedTitle text="TRUSTED BY" className="trusted-title text-center" />
        
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {scrollingPartners.map((partner, index) => (
              <div key={index} className="trusted-card">
                <img 
                  src={partner.src} 
                  alt={partner.name} 
                  className="trusted-logo" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
