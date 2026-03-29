'use client';
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ReviewsSection.css';
import ScrollReveal from './animations/ScrollReveal';

const reviews = [
  {
    text: "Future Solution has been a great partner for us through the years, consistently providing best candidates and delivering high quality drivers. Future Solution's performance has been a huge factor to our success and we appreciate their support and dedication.",
    company: 'JP LOGISTICS',
    role: 'President',
    rating: 5,
  },
  {
    text: "Working with Future Solution transformed our hiring process completely. We went from struggling to find qualified CDL-A drivers to having a consistent pipeline of vetted, professional candidates ready to work.",
    company: 'MIDWEST FREIGHT',
    role: 'Operations Manager',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">

        {/* Header */}
        <ScrollReveal direction="left" delay={0.1}>
          <div className="reviews-header">
            <div>
              <p className="reviews-eyebrow">CLIENT TESTIMONIALS</p>
              <h2 className="title-large text-white m-0">
                WHAT OUR <span className="text-reviews-accent">CLIENTS</span><br/>
                SAY ABOUT <span className="text-reviews-accent">US</span>
              </h2>
            </div>
            <div className="reviews-stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#FFD700" color="#FFD700" size={20} />
              ))}
              <span className="reviews-rating-label">5.0 / 5.0</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Card Slider */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="review-slider-wrap">

            {/* Large quote mark */}
            <div className="review-quote-icon">
              <Quote size={80} color="rgba(255,255,255,0.04)" fill="rgba(255,255,255,0.04)" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="review-card"
              >
                {/* Stars */}
                <div className="review-stars">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} fill="#FFD700" color="#FFD700" size={18} />
                  ))}
                </div>

                {/* Text */}
                <p className="review-text">"{reviews[current].text}"</p>

                {/* Bottom */}
                <div className="review-bottom">
                  <div className="client-avatar-wrap">
                    <div className="client-avatar">
                      {reviews[current].company.charAt(0)}
                    </div>
                    <div>
                      <h4 className="client-company">{reviews[current].company}</h4>
                      <p className="client-role">{reviews[current].role}</p>
                    </div>
                  </div>

                  <div className="slider-controls">
                    <button className="slider-btn" onClick={prev} aria-label="Previous">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="slide-counter">{current + 1} / {reviews.length}</span>
                    <button className="slider-btn" onClick={next} aria-label="Next">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="slider-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
