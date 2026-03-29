import React from 'react';
import './Logo.css';

export default function Logo() {
  return (
    <div className="logo-container">
      {/* SVG Geometric logo approximation */}
      <svg className="logo-svg" width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        {/* Outer hexagon */}
        <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
        {/* Inner lines forming the 3D-like structure */}
        <line x1="50" y1="5" x2="30" y2="45" />
        <line x1="50" y1="5" x2="70" y2="45" />
        <line x1="5" y1="25" x2="30" y2="45" />
        <line x1="5" y1="25" x2="35" y2="65" />
        <line x1="5" y1="75" x2="35" y2="65" />
        <line x1="5" y1="75" x2="50" y2="95" />
        <line x1="95" y1="25" x2="70" y2="45" />
        <line x1="95" y1="25" x2="65" y2="65" />
        <line x1="95" y1="75" x2="65" y2="65" />
        <line x1="95" y1="75" x2="50" y2="95" />
        <line x1="30" y1="45" x2="70" y2="45" />
        <line x1="30" y1="45" x2="35" y2="65" />
        <line x1="70" y1="45" x2="65" y2="65" />
        <line x1="35" y1="65" x2="50" y2="95" />
        <line x1="65" y1="65" x2="50" y2="95" />
        <line x1="35" y1="65" x2="65" y2="65" />
      </svg>
      
      {/* Vertical divider */}
      <div className="logo-divider"></div>
      
      {/* Text Group */}
      <div className="logo-text-group">
        <span className="logo-title">
          FUTURE<br/>SOLUTION
        </span>
        <span className="logo-subtitle">
          we work you decide
        </span>
      </div>
    </div>
  );
}
