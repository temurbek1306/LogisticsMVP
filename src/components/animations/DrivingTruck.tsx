'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './DrivingTruck.css';

export default function DrivingTruck() {
  return (
    <div className="driving-truck-container">
      {/* Perspective Container */}
      <div style={{ perspective: "1500px", width: "100%" }}>
        <motion.div
          initial={{ 
            x: -200, 
            rotateY: 20, 
            scale: 0.9, 
            opacity: 0
          }}
          whileInView={{ 
            x: 0, 
            rotateY: 0, 
            scale: 1, 
            opacity: 1
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 2.5,
            type: "spring",
            stiffness: 30,
            damping: 20,
            mass: 3
          }}
          className="truck-assembly"
        >
          {/* Main Truck Image */}
          <div className="truck-body-wrapper">
             <img 
               src="/images/modern-white-truck.png" 
               alt="Driving Truck" 
               className="quote-truck-img" 
               style={{ mixBlendMode: 'multiply', filter: 'brightness(1)' }}
             />
          </div>

          {/* Ground Shadow */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.3 }}
            whileInView={{ opacity: 0.15, scaleX: 1 }}
            transition={{ duration: 2 }}
            className="truck-shadow"
          />
        </motion.div>
      </div>
    </div>
  );
}
