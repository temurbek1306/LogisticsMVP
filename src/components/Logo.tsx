import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'default';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  // Use CSS variables for colors to allow easy switching
  const primaryColor = variant === 'light' ? '#ffffff' : '#1c325c';
  const subtitleColor = variant === 'light' ? '#ffffff' : '#ba3e29'; // Pure white for better contrast
  const dividerColor = variant === 'light' ? 'rgba(255,255,255,0.4)' : '#1c325c';

  return (
    <div 
      className={`logo-container ${variant === 'light' ? 'on-dark' : 'on-light'}`} 
      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px' }}
    >
      <svg 
        width="58" 
        height="58" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke={primaryColor} 
        strokeWidth="4.5" 
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ transition: 'stroke 0.4s ease' }}
      >
        <polygon points="27,10 73,10 96,50 73,90 27,90 4,50" />
        <polygon points="42,29 81,50 42,71" />
        <line x1="4" y1="50" x2="42" y2="29" />
        <line x1="4" y1="50" x2="42" y2="71" />
        <line x1="27" y1="10" x2="42" y2="29" />
        <line x1="27" y1="90" x2="42" y2="71" />
        <line x1="73" y1="10" x2="42" y2="29" />
        <line x1="73" y1="10" x2="81" y2="50" />
        <line x1="73" y1="90" x2="42" y2="71" />
        <line x1="73" y1="90" x2="81" y2="50" />
        <line x1="96" y1="50" x2="81" y2="50" />
      </svg>
      
      <div style={{ 
        width: '2px', 
        height: '46px', 
        backgroundColor: dividerColor,
        borderRadius: '2px',
        transition: 'background-color 0.4s ease'
      }}></div>
      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ 
          color: primaryColor, 
          fontWeight: 900, 
          fontSize: '26px', 
          lineHeight: '0.9',
          letterSpacing: '-0.2px',
          fontFamily: 'Montserrat, system-ui, sans-serif',
          transition: 'color 0.4s ease'
        }}>
          FUTURE<br/>
          SOLUTION
        </span>
        <span style={{ 
          color: subtitleColor, 
          fontWeight: 700, 
          fontSize: '10px', 
          lineHeight: '1',
          marginTop: '4px',
          fontFamily: 'Montserrat, system-ui, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'color 0.4s ease'
        }}>
          we work you decide
        </span>
      </div>
    </div>
  );
}
