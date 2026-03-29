'use client';
import React from 'react';
import { motion } from 'framer-motion';

type TruckRevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function TruckReveal({ children, delay = 0.4 }: TruckRevealProps) {
  return (
    <div style={{ perspective: "1500px", width: "100%" }}>
      <motion.div
        initial={{ 
          x: 400, 
          rotateY: -35, 
          scale: 0.85, 
          opacity: 0,
          z: -100 
        }}
        whileInView={{ 
          x: 0, 
          rotateY: 0, 
          scale: 1, 
          opacity: 1,
          z: 0 
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1.8,
          delay,
          // Custom spring for a 'heavy vehicle' feel
          type: "spring",
          stiffness: 35,
          damping: 12,
          mass: 2
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
        
        {/* Dynamic Shadow that scales with the truck */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 0.2, scaleX: 1 }}
          transition={{ duration: 1.5, delay: delay + 0.2 }}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '10%',
            right: '10%',
            height: '25px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(8px)',
            zIndex: -1
          }}
        />
      </motion.div>
    </div>
  );
}
