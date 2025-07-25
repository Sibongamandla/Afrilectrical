import { keyframes, css } from 'styled-components';

// Subtle keyframe animations for minimalistic design
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const gentleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const subtlePulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Animation mixins for reusable effects
export const animationMixins = {
  // Subtle entrance animation
  fadeInUp: css`
    animation: ${fadeInUp} 0.6s ease-out forwards;
  `,
  
  // Gentle fade in
  fadeIn: css`
    animation: ${fadeIn} 0.4s ease-out forwards;
  `,
  
  // Slide animations
  slideInLeft: css`
    animation: ${slideInFromLeft} 0.5s ease-out forwards;
  `,
  
  slideInRight: css`
    animation: ${slideInFromRight} 0.5s ease-out forwards;
  `,
  
  // Scale in effect
  scaleIn: css`
    animation: ${scaleIn} 0.3s ease-out forwards;
  `,
  
  // Hover effects for minimalistic design
  subtleHover: css`
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
  `,
  
  // Gentle scale on hover
  gentleHoverScale: css`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
  `,
  
  // Button hover effect
  buttonHover: css`
    transition: all 0.25s ease;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  `,
  
  // Card hover effect
  cardHover: css`
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    }
  `,
  
  // Smooth focus effect
  focusEffect: css`
    transition: all 0.2s ease;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(227, 30, 36, 0.1);
    }
  `,
  
  // Loading shimmer effect
  shimmerEffect: css`
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite;
  `,
  
  // Gentle floating animation
  float: css`
    animation: ${gentleFloat} 6s ease-in-out infinite;
  `,
  
  // Subtle pulse for loading states
  pulse: css`
    animation: ${subtlePulse} 2s ease-in-out infinite;
  `,
};

// Staggered animation delays for lists and grids
export const staggerDelays = {
  item1: '0.1s',
  item2: '0.2s',
  item3: '0.3s',
  item4: '0.4s',
  item5: '0.5s',
  item6: '0.6s',
};

// Responsive animation controls
export const reducedMotionSupport = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;

// Page transition variants for framer-motion
export const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

// Stagger container for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Individual item animation
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};