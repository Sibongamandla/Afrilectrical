import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animationMixins, reducedMotionSupport } from '../../styles/animations';

interface CardProps {
  children: React.ReactNode;
  elevation?: 'none' | 'low' | 'medium' | 'high';
  padding?: boolean;
  bordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  hoverEffect?: 'subtle' | 'lift' | 'scale' | 'none';
  delay?: number;
}

const getElevation = (elevation: CardProps['elevation'], theme: any) => {
  switch (elevation) {
    case 'none':
      return 'none';
    case 'low':
      return theme.shadows.sm;
    case 'medium':
      return theme.shadows.md;
    case 'high':
      return theme.shadows.lg;
    default:
      return theme.shadows.sm;
  }
};

const getHoverEffect = (hoverEffect: CardProps['hoverEffect']) => {
  switch (hoverEffect) {
    case 'subtle':
      return animationMixins.subtleHover;
    case 'lift':
      return animationMixins.cardHover;
    case 'scale':
      return animationMixins.gentleHoverScale;
    case 'none':
      return '';
    default:
      return animationMixins.subtleHover;
  }
};

const StyledCard = styled(motion.div)<CardProps>`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ elevation, theme }) => getElevation(elevation, theme)};
  border: ${({ bordered, theme }) => 
    bordered ? `1px solid ${theme.colors.borderLight}` : 'none'};
  padding: ${({ padding, theme }) => padding ? theme.spacing.lg : '0'};
  position: relative;
  
  /* Modern glass morphism effect for subtle elevation */
  ${({ elevation, theme }) => elevation !== 'none' && `
    background: ${theme.colors.backgroundCard};
    backdrop-filter: blur(10px);
    border: 1px solid ${theme.colors.glass.light};
  `}
  
  /* Apply hover effects */
  ${({ hoverEffect }) => getHoverEffect(hoverEffect)}
  
  /* Subtle border gradient for modern look */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.gray200} 0%, 
      ${({ theme }) => theme.colors.gray100} 50%, 
      ${({ theme }) => theme.colors.gray200} 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: ${({ hoverEffect }) => hoverEffect !== 'none' ? 0.5 : 0};
  }
  
  /* Focus states for accessibility */
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  /* Reduced motion support */
  ${reducedMotionSupport}
`;

const Card: React.FC<CardProps> = ({
  children,
  elevation = 'low',
  padding = false,
  bordered = false,
  className,
  style,
  animated = true,
  hoverEffect = 'subtle',
  delay = 0,
  ...props
}) => {
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut" as const,
      }
    }
  };

  return (
    <StyledCard
      elevation={elevation}
      padding={padding}
      bordered={bordered}
      className={className}
      style={style}
      hoverEffect={hoverEffect}
      initial={animated ? "hidden" : false}
      animate={animated ? "visible" : false}
      variants={animated ? animationVariants : undefined}
      whileHover={hoverEffect !== 'none' ? { 
        scale: hoverEffect === 'scale' ? 1.02 : 1,
        y: hoverEffect === 'lift' || hoverEffect === 'subtle' ? -4 : 0,
        transition: { duration: 0.3, ease: 'easeOut' }
      } : undefined}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;