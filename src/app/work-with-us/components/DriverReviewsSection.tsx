"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function DriverReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "January of this year I was looking for employment and I needed a good dependable company to work for. Sam messaged me and referred me to company that is a great company. They never bother me and keep me running. Pay is always on time and never so sitting. If you give Future Solution a chance to put you with a good company you will be disappointed at yourself for not doing it earlier.",
      author: "JOSEPH C",
      type: "Flatbed driver"
    },
    {
      text: "Joining Future Solution was the best career move I've made. The recruiters actually listen to your needs and find the right fit. I've been with my current fleet for 6 months and couldn't be happier with the mileage and home time.",
      author: "MICHAEL R",
      type: "Reefer driver"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="wwu-reviews-section bg-primary-blue">
      <div className="container">
        <div className="reviews-header text-white mb-12">
          <AnimatedTitle 
            text="CHECK OUT WHAT OUR<br />AWESOME DRIVERS HAVE TO<br />SAY ABOUT OUR SERVICE"
            className="title-large"
            accentWords={['SERVICE']}
            accentColor="#8CA4F1"
          />
          <ScrollReveal direction="left" delay={0.2}>
            <div className="star-icon-circle-white">
              <Star size={24} color="var(--primary-blue)" fill="var(--primary-blue)" />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="testimonial-card glass-morphism">
            <p className="driver-says-eyebrow">Driver says</p>
            <p className="testimonial-text">
              "{reviews[currentIndex].text}"
            </p>
            
            <div className="testimonial-footer">
              <div className="testimonial-controls">
                <button onClick={prevReview} className="control-btn">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextReview} className="control-btn">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="testimonial-author">
                <h4 className="author-name">{reviews[currentIndex].author}</h4>
                <p className="author-type">{reviews[currentIndex].type}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="pagination-dots mt-8">
          {reviews.map((_, i) => (
            <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
