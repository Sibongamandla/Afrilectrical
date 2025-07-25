import React, { useEffect } from 'react';

// Google Fonts for Modern Corporate typography
const GOOGLE_FONTS = [
  'Montserrat:wght@300;400;500;600;700',
  'Open+Sans:wght@300;400;600;700'
];

const FontLoader: React.FC = () => {
  useEffect(() => {
    // Preconnect to Google Fonts for faster loading
    const preconnectLink1 = document.createElement('link');
    preconnectLink1.rel = 'preconnect';
    preconnectLink1.href = 'https://fonts.googleapis.com';
    
    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://fonts.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    
    // Check if preconnect links already exist
    const existingPreconnect1 = document.querySelector('link[href="https://fonts.googleapis.com"]');
    const existingPreconnect2 = document.querySelector('link[href="https://fonts.gstatic.com"]');
    
    if (!existingPreconnect1) {
      document.head.appendChild(preconnectLink1);
    }
    if (!existingPreconnect2) {
      document.head.appendChild(preconnectLink2);
    }

    // Create Google Fonts link with optimized loading
    const fontUrl = `https://fonts.googleapis.com/css2?${GOOGLE_FONTS.map(font => `family=${font}`).join('&')}&display=swap`;
    
    // Check if font link already exists
    const existingLink = document.querySelector(`link[href*="fonts.googleapis.com/css"]`);
    
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fontUrl;
      
      // Use requestIdleCallback for non-critical font loading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          document.head.appendChild(link);
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          document.head.appendChild(link);
        }, 100);
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default FontLoader;