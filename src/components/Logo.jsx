import React from 'react';

export default function Logo({ width = "100%", height = "auto", className = "" }) {
  return (
    <div className={className} style={{ width, height, display: 'flex', justifyContent: 'center' }}>
      {/* 
        This is an SVG approximation of the requested Superstore logo.
        If you want to use the exact image file you provided, you can save it as 
        public/superstore-logo.png and uncomment the img tag below instead.
      */}
      {/* <img src="/superstore-logo.png" alt="Superstore" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> */}
      
      <svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        {/* Cloud graphic positioned beautifully over "erst" */}
        <path 
          d="M 270 50 
             C 270 30, 300 25, 310 45 
             C 330 5, 410 5, 430 45 
             C 450 25, 490 30, 490 50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="11" 
          strokeLinecap="round" 
        />
        {/* Text properly kerned and sized */}
        <text 
          x="10" 
          y="125" 
          fontFamily="Inter, system-ui, sans-serif" 
          fontWeight="900" 
          fontSize="105" 
          fill="currentColor"
          letterSpacing="-4"
        >
          Superstore
        </text>
      </svg>
    </div>
  );
}
