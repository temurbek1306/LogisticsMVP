"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  width = "100%",
  direction = 'up',
  delay = 0,
  duration = 0.8, // Elegant, smooth duration
  className = "",
}: RevealProps) {
  const startX = direction === 'left' ? 80 : direction === 'right' ? -80 : 0;
  const startY = direction === 'up' ? 80 : direction === 'down' ? -80 : 0;

  return (
    <div style={{ width }} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, x: startX, y: startY },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            transition: { 
              duration, 
              delay, 
              ease: [0.22, 1, 0.36, 1] 
            } 
          }
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
