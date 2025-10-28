import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const GlobalStyles = createGlobalStyle`
  /* Modern CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 12.8px;
    scroll-behavior: smooth;
    scroll-padding-top: 60px; /* Account for fixed header */
    height: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
  }

  /* Enhanced Typography System */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: ${theme.colors.heading};
    letter-spacing: -0.02em;
    font-feature-settings: 'kern' 1, 'liga' 1;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1.75rem;
    letter-spacing: -0.025em;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.25rem;
  }

  h5 {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }

  /* Enhanced Text Elements */
  p {
    margin-bottom: 1.5rem;
    max-width: 65ch; /* Optimal line length for readability */
    line-height: 1.7;
    font-size: 1rem;
    color: ${theme.colors.text};
    
    &.lead {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.6;
      color: ${theme.colors.textSecondary};
      margin-bottom: 2rem;
    }
    
    &.small {
      font-size: 0.875rem;
      line-height: 1.5;
    }
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Enhanced Button System */
  button, .button {
    cursor: pointer;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: ${theme.borderRadius.lg};
    border: none;
    background: ${theme.colors.gradient.primary};
    color: white;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-transform: none;
    letter-spacing: 0.025em;
    box-shadow: ${theme.shadows.md};
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.lg};
      
      &::before {
        left: 100%;
      }
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primaryAlpha};
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    
    &.secondary {
      background: ${theme.colors.gradient.secondary};
    }
    
    &.outline {
      background: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      
      &:hover {
        background: ${theme.colors.primary};
        color: white;
      }
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  /* Modern Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundDark};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkGrey};
  }
  
  ::-webkit-scrollbar-corner {
    background: ${theme.colors.backgroundDark};
  }
  
  /* Accessibility focus styles */
  :focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
  
  /* Enhanced Grid System */
  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.xl};
    
    @media (max-width: ${theme.breakpoints.xl}) {
      padding: 0 ${theme.spacing.lg};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.md};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing.sm};
    }
  }
  
  .container-fluid {
    width: 100%;
    padding: 0 ${theme.spacing.md};
  }
  
  .container-narrow {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }
  
  /* Enhanced Utility Classes */
  .text-center {
    text-align: center;
  }
  
  .text-left {
    text-align: left;
  }
  
  .text-right {
    text-align: right;
  }
  
  /* Spacing utilities */
  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: ${theme.spacing.xs}; }
  .mb-2 { margin-bottom: ${theme.spacing.sm}; }
  .mb-3 { margin-bottom: ${theme.spacing.md}; }
  .mb-4 { margin-bottom: ${theme.spacing.lg}; }
  .mb-5 { margin-bottom: ${theme.spacing.xl}; }
  .mb-6 { margin-bottom: ${theme.spacing.xxl}; }
  
  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: ${theme.spacing.xs}; }
  .mt-2 { margin-top: ${theme.spacing.sm}; }
  .mt-3 { margin-top: ${theme.spacing.md}; }
  .mt-4 { margin-top: ${theme.spacing.lg}; }
  .mt-5 { margin-top: ${theme.spacing.xl}; }
  .mt-6 { margin-top: ${theme.spacing.xxl}; }
  
  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-1 { padding-top: ${theme.spacing.xs}; padding-bottom: ${theme.spacing.xs}; }
  .py-2 { padding-top: ${theme.spacing.sm}; padding-bottom: ${theme.spacing.sm}; }
  .py-3 { padding-top: ${theme.spacing.md}; padding-bottom: ${theme.spacing.md}; }
  .py-4 { padding-top: ${theme.spacing.lg}; padding-bottom: ${theme.spacing.lg}; }
  .py-5 { padding-top: ${theme.spacing.xl}; padding-bottom: ${theme.spacing.xl}; }
  .py-6 { padding-top: ${theme.spacing.xxl}; padding-bottom: ${theme.spacing.xxl}; }
  
  /* Display utilities */
  .d-none { display: none; }
  .d-block { display: block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }
  
  /* Flex utilities */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .flex-column {
    flex-direction: column;
  }
  
  /* Modern card component */
  .card {
    background: ${theme.colors.surface};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.md};
    padding: ${theme.spacing.xl};
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
    }
  }
  
  /* Glass morphism effect */
  .glass {
    background: ${theme.colors.glass.medium};
    backdrop-filter: blur(10px);
    border: 1px solid ${theme.colors.glass.light};
  }
  
  /* Animation utilities */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .slide-up {
    animation: slideUp 0.6s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Focus management */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${theme.colors.primary};
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    
    &:focus {
      top: 6px;
    }
  }
  
  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }
    margin-bottom: ${theme.spacing.xs};
  }
  
  .mb-2 {
    margin-bottom: ${theme.spacing.sm};
  }
  
  .mb-3 {
    margin-bottom: ${theme.spacing.md};
  }
  
  .mb-4 {
    margin-bottom: ${theme.spacing.lg};
  }
  
  .mb-5 {
    margin-bottom: ${theme.spacing.xl};
  }
  
  .mt-0 {
    margin-top: 0;
  }
  
  .mt-1 {
    margin-top: ${theme.spacing.xs};
  }
  
  .mt-2 {
    margin-top: ${theme.spacing.sm};
  }
  
  .mt-3 {
    margin-top: ${theme.spacing.md};
  }
  
  .mt-4 {
    margin-top: ${theme.spacing.lg};
  }
  
  .mt-5 {
    margin-top: ${theme.spacing.xl};
  }
`;

export default GlobalStyles;