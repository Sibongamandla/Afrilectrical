import { DefaultTheme } from 'styled-components';

// Define a limited color system with primary, secondary, and functional colors
export const theme: DefaultTheme = {
  colors: {
    // Primary brand color - Enhanced with modern variations
    primary: '#e31e24', // Afrilectrical red
    primaryLight: '#ff4569',
    primaryDark: '#b71c1c',
    primaryAlpha: 'rgba(227, 30, 36, 0.08)', // Softer transparency
    primarySoft: 'rgba(227, 30, 36, 0.04)',  // Very subtle background
    primaryBold: 'rgba(227, 30, 36, 0.15)',  // Stronger accent
    primaryGlow: 'rgba(227, 30, 36, 0.25)',  // For hover effects
    
    // Secondary color - Enhanced with modern variations
    secondary: '#0066cc', // Professional blue
    secondaryLight: '#4285f4',
    secondaryDark: '#1565c0',
    secondaryAlpha: 'rgba(0, 102, 204, 0.08)',
    secondarySoft: 'rgba(0, 102, 204, 0.04)',
    secondaryBold: 'rgba(0, 102, 204, 0.15)',
    secondaryGlow: 'rgba(0, 102, 204, 0.25)',
    
    // Accent color - Modern warm accent
    accent: '#ff7043', // Modern coral-orange
    accentLight: '#ff8a65',
    accentDark: '#e64a19',
    accentAlpha: 'rgba(255, 112, 67, 0.08)',
    accentSoft: 'rgba(255, 112, 67, 0.04)',
    accentBold: 'rgba(255, 112, 67, 0.15)',
    accentGlow: 'rgba(255, 112, 67, 0.25)',
    
    // Modern gradient colors with subtle sophistication
    gradient: {
      primary: 'linear-gradient(135deg, #e31e24 0%, #ff4569 50%, #b71c1c 100%)',
      secondary: 'linear-gradient(135deg, #0066cc 0%, #4285f4 50%, #1565c0 100%)',
      accent: 'linear-gradient(135deg, #ff7043 0%, #ff8a65 50%, #e64a19 100%)',
      hero: 'linear-gradient(135deg, #e31e24 0%, #0066cc 100%)', // Brand combination
      soft: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', // Subtle neutral
      glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', // For dark sections
      warm: 'linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)', // Warm accent
    },
    
    // High-contrast neutral system with sophisticated backgrounds
    white: '#ffffff',
    black: '#000000',
    background: '#f7f7f7', // Bone white with subtle warmth
    backgroundDark: '#eeeeee', // Light grey with more contrast
    backgroundCard: '#ffffff', // Pure white for cards
    backgroundSoft: '#e8e8e8', // More contrasted subtle background
    backgroundAlternate: '#f4f4f4', // Alternative section background
    
    // High-contrast gray scale
    gray50: '#f9f9f9',
    gray100: '#f0f0f0',
    gray200: '#e0e0e0',
    gray300: '#c4c4c4',
    gray400: '#888888',
    gray500: '#5a5a5a',
    gray600: '#404040',
    gray700: '#2a2a2a',
    gray800: '#1a1a1a',
    gray900: '#0d0d0d',
    
    // Legacy gray support (gradually migrate away)
    lightGrey: '#f1f5f9',
    grey: '#94a3b8',
    darkGrey: '#64748b',
    charcoal: '#334155',
    
    // High-contrast text hierarchy
    text: '#1a1a1a', // Much darker for better readability
    textSecondary: '#404040', // Darker medium gray
    textMuted: '#5a5a5a', // Darker light gray
    textInverse: '#ffffff', // White text
    heading: '#0d0d0d', // Almost black for headings
    
    // Functional colors with variations
    success: '#4caf50',
    successLight: '#81c784',
    successDark: '#388e3c',
    successAlpha: 'rgba(76, 175, 80, 0.1)',
    
    warning: '#ff9800',
    warningLight: '#ffb74d',
    warningDark: '#f57c00',
    warningAlpha: 'rgba(255, 152, 0, 0.1)',
    
    error: '#f44336',
    errorLight: '#e57373',
    errorDark: '#d32f2f',
    errorAlpha: 'rgba(244, 67, 54, 0.1)',
    
    info: '#2196f3',
    infoLight: '#64b5f6',
    infoDark: '#1976d2',
    infoAlpha: 'rgba(33, 150, 243, 0.1)',
    
    // Special colors
    highlight: '#f2622a', // Vibrant Orange - Highlight color
    surface: '#ffffff', // Surface color for cards and containers
    surfaceElevated: '#ffffff',
    border: '#e0e0e0', // Border color for UI elements
    borderLight: '#f0f0f0',
    borderDark: '#d0d0d0',
    
    // Glass morphism colors
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      dark: 'rgba(0, 0, 0, 0.1)',
    },
  },
  
  // Responsive breakpoints
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  
  // Spacing system in multiples of 4px
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    xxl: '3rem',   // 48px
  },
  
  // Typography - Modern Corporate Font System
  typography: {
    fontFamily: {
      heading: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
      body: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    fontSize: {
      xs: '0.875rem',   // 14px (increased from 12px)
      sm: '1rem',       // 16px (increased from 14px)
      base: '1.125rem', // 18px (increased from 16px)
      md: '1.25rem',    // 20px (increased from 18px)
      lg: '1.5rem',     // 24px (increased from 20px)
      xl: '1.875rem',   // 30px (increased from 24px)
      xxl: '2.5rem',    // 40px (increased from 32px)
      xxxl: '3rem',     // 48px (increased from 40px)
      display: '3.75rem', // 60px (increased from 48px)
      hero: '4.5rem',   // 72px (new large size for hero)
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      base: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    round: '50%',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 15px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  
  // Transitions
  transitions: {
    fast: '0.15s ease',
    base: '0.3s ease',
    slow: '0.5s ease',
    normal: '0.3s ease', // Adding normal transition
  },
  
  // Z-index
  zIndex: {
    hide: -1,
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
    header: 90,
  },
};

// Add type definitions for the theme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      primaryAlpha: string;
      primarySoft: string;
      primaryBold: string;
      primaryGlow: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      secondaryAlpha: string;
      secondarySoft: string;
      secondaryBold: string;
      secondaryGlow: string;
      accent: string;
      accentLight: string;
      accentDark: string;
      accentAlpha: string;
      accentSoft: string;
      accentBold: string;
      accentGlow: string;
      gradient: {
        primary: string;
        secondary: string;
        accent: string;
        hero: string;
        soft: string;
        glass: string;
        dark: string;
        warm: string;
      };
      white: string;
      black: string;
      background: string;
      backgroundDark: string;
      backgroundCard: string;
      backgroundSoft: string;
      backgroundAlternate: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      lightGrey: string;
      grey: string;
      darkGrey: string;
      charcoal: string;
      text: string;
      textSecondary: string;
      textMuted: string;
      textInverse: string;
      heading: string;
      success: string;
      successLight: string;
      successDark: string;
      successAlpha: string;
      warning: string;
      warningLight: string;
      warningDark: string;
      warningAlpha: string;
      error: string;
      errorLight: string;
      errorDark: string;
      errorAlpha: string;
      info: string;
      infoLight: string;
      infoDark: string;
      infoAlpha: string;
      highlight: string;
      surface: string;
      surfaceElevated: string;
      border: string;
      borderLight: string;
      borderDark: string;
      glass: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    typography: {
      fontFamily: {
        body: string;
        heading: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
        display: string;
        hero: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        tight: number;
        base: number;
        relaxed: number;
      };
      letterSpacing: {
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
      };
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      round: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      inner: string;
    };
    transitions: {
      fast: string;
      base: string;
      slow: string;
      normal: string;
    };
    zIndex: {
      hide: number;
      base: number;
      raised: number;
      dropdown: number;
      sticky: number;
      overlay: number;
      modal: number;
      popover: number;
      tooltip: number;
      header: number;
    };
  }
}

export default theme;