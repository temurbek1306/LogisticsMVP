"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedTitle from '@/components/animations/AnimatedTitle';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function DriverReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      text: "January of this year I was looking for employment and I needed a good dependable company to work for. Sam messaged me and referred me to company that is a great company. They never bother me and keep me running. Pay is always on time and never so sitting. If you give Future Solution a chance to put you with a good company you will be disappointed at yourself for not doing it earlier.",
      author: "JOSEPH C",
      type: "Flatbed driver",
      avatar: "/images/work-with-us/driver1.png"
    },
    {
      text: "Joining Future Solution was the best career move I've made. The recruiters actually listen to your needs and find the right fit. I've been with my current fleet for 6 months and couldn't be happier with the mileage and home time.",
      author: "MICHAEL R",
      type: "Reefer driver",
      avatar: "/images/work-with-us/driver2.png"
    }
  ];

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="wwu-reviews-section bg-primary-blue py-24">
      <div className="container">
        <div className="reviews-header text-white mb-16">
          <AnimatedTitle 
            text="CHECK OUT WHAT OUR AWESOME DRIVERS HAVE TO SAY ABOUT OUR SERVICE"
            className="title-large text-center"
            accentWords={['SERVICE', 'AWESOME']}
            accentColor="#8CA4F1"
          />
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="testimonial-card-premium glass-morphism min-h-450 flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="testimonial-content w-full"
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-text">
                  {reviews[currentIndex].text}
                </p>
                <div className="testimonial-author-row">
                  <div className="author-avatar-wrapper">
                    <img src={reviews[currentIndex].avatar} alt={reviews[currentIndex].author} className="author-avatar" />
                    <div className="verified-badge"><Star size={10} fill="currentColor" /></div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{reviews[currentIndex].author}</h4>
                    <div className="author-meta">
                      <span className="author-type">{reviews[currentIndex].type}</span>
                      <span className="meta-sep">•</span>
                      <span className="verified-text">Verified Driver</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="testimonial-controls-premium">
              <button onClick={prevReview} className="control-btn-premium" aria-label="Previous Review">
                <ChevronLeft size={24} />
              </button>
              <div className="pagination-info">
                <span className="current">{currentIndex + 1}</span>
                <span className="total">/ {reviews.length}</span>
              </div>
              <button onClick={nextReview} className="control-btn-premium" aria-label="Next Review">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
