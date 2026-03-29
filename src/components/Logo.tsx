import React from 'react';

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* SVG Geometric logo approximation */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#001859" strokeWidth="2.5" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
      <div style={{ width: '3px', height: '42px', backgroundColor: '#001859' }}></div>
      
      {/* Text Group */}
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2px' }}>
        <span style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: '22px', 
          fontWeight: 900, 
          color: '#001859', 
          lineHeight: '0.95',
          letterSpacing: '-0.3px'
        }}>
          FUTURE<br/>SOLUTION
        </span>
        <span style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: '11px', 
          fontWeight: 500, 
          color: '#CA4F29', 
          marginTop: '3px',
          textTransform: 'lowercase',
          letterSpacing: '0.2px'
        }}>
          we work you decide
        </span>
      </div>
    </div>
  );
}
