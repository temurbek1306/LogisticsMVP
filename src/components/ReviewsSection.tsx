'use client';
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './ReviewsSection.css';
import ScrollReveal from './animations/ScrollReveal';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        
        <ScrollReveal direction="left" delay={0.1}>
          <div className="reviews-header">
            <h2 className="title-large text-white">
              CHECK OUT WHAT OUR<br/>
              <span style={{color: '#8CA4F1'}}>AWESOME CLIENTS</span> HAVE TO SAY<br/>
              ABOUT WORKING <span style={{color: '#8CA4F1'}}>WITH US</span>
            </h2>
            <div className="star-circle">
              <Star fill="#3A56AF" color="#3A56AF" size={24} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="review-slider">
            <div className="review-card">
              <p className="client-says">Client says</p>
              <p className="review-text">
                Future Solution has been a great partner for us through the years, consistently providing best candidates and delivering high quality drivers. Future Solution's performance has been a huge factor to our success and we appreciate their support and dedication.
              </p>
              <div className="review-bottom">
                <div className="slider-controls">
                  <button className="slider-btn"><ChevronLeft size={24} /></button>
                  <button className="slider-btn"><ChevronRight size={24} /></button>
                </div>
                <div className="client-info">
                  <h4 className="client-company">JP LOGISTICS</h4>
                  <p className="client-role">President</p>
                </div>
              </div>
            </div>
            <div className="slider-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
