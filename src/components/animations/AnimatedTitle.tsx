'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
  accentWords?: string[];
  accentClass?: string;
  accentColor?: string;
}

export default function AnimatedTitle({ text, className = '', delay = 0, accentWords = [], accentClass, accentColor }: AnimatedTitleProps) {
  // Support simple <br/> splitting
  const lines = text.split('<br/>');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { 
        type: 'spring' as const, 
        damping: 14, 
        stiffness: 100 
      } 
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      style={{ perspective: '800px' }}
    >
      {lines.map((line, lineIndex) => {
        // preserve regular spaces for accurate word wrapping
        const words = line.split(' ');
        return (
          <React.Fragment key={lineIndex}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {words.map((word, wordIndex) => {
                const isAccent = accentWords.some(w => word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === w.toLowerCase());
                return (
                  <motion.span
                    key={wordIndex}
                    variants={child}
                    className={isAccent ? accentClass : ''}
                    style={{ 
                      display: 'inline-block', 
                      marginRight: wordIndex !== words.length - 1 ? '0.25em' : '0',
                      color: isAccent && accentColor ? accentColor : undefined
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
            {lineIndex !== lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
