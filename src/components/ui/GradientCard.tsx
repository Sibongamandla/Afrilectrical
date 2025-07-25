import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Shimmer effect for loading states
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Glow effect animation
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(227, 30, 36, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(227, 30, 36, 0.6);
  }
`;

interface GradientCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'glass';
  size?: 'small' | 'medium' | 'large';
  hover?: boolean;
  glow?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: 'small' | 'medium' | 'large' | 'xl';
}

const getVariantStyles = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return {
        background: `linear-gradient(135deg, ${theme.colors.primary}15 0%, ${theme.colors.primaryDark}25 100%)`,
        border: `1px solid ${theme.colors.primary}30`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.primary}25 0%, ${theme.colors.primaryDark}35 100%)`,
      };
    case 'secondary':
      return {
        background: `linear-gradient(135deg, ${theme.colors.secondary}15 0%, ${theme.colors.secondaryDark}25 100%)`,
        border: `1px solid ${theme.colors.secondary}30`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.secondary}25 0%, ${theme.colors.secondaryDark}35 100%)`,
      };
    case 'accent':
      return {
        background: `linear-gradient(135deg, ${theme.colors.accent}15 0%, ${theme.colors.accentDark}25 100%)`,
        border: `1px solid ${theme.colors.accent}30`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.accent}25 0%, ${theme.colors.accentDark}35 100%)`,
      };
    case 'glass':
      return {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        hoverBackground: 'rgba(255, 255, 255, 0.15)',
      };
    default: // neutral
      return {
        background: `linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.lightGrey} 100%)`,
        border: `1px solid ${theme.colors.border}`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.lightGrey} 0%, ${theme.colors.grey}20 100%)`,
      };
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return { minHeight: '120px' };
    case 'large':
      return { minHeight: '300px' };
    default:
      return { minHeight: '200px' };
  }
};

const getPaddingStyles = (padding: string, theme: any) => {
  switch (padding) {
    case 'none':
      return '0';
    case 'small':
      return theme.spacing.md;
    case 'large':
      return theme.spacing.xxl;
    default:
      return theme.spacing.lg;
  }
};

const getBorderRadiusStyles = (borderRadius: string, theme: any) => {
  switch (borderRadius) {
    case 'small':
      return theme.borderRadius.sm;
    case 'large':
      return theme.borderRadius.lg;
    case 'xl':
      return theme.borderRadius.xl;
    default:
      return theme.borderRadius.md;
  }
};

const CardContainer = styled(motion.div)<{
  $variant: string;
  $size: string;
  $hover: boolean;
  $glow: boolean;
  $loading: boolean;
  $clickable: boolean;
  $padding: string;
  $borderRadius: string;
}>`
  position: relative;
  overflow: hidden;
  ${({ $size }) => getSizeStyles($size)}
  padding: ${({ $padding, theme }) => getPaddingStyles($padding, theme)};
  border-radius: ${({ $borderRadius, theme }) => getBorderRadiusStyles($borderRadius, theme)};
  
  ${({ $variant, theme }) => {
    const styles = getVariantStyles($variant, theme);
    return `
      background: ${styles.background};
      border: ${styles.border};
      ${styles.backdropFilter ? `backdrop-filter: ${styles.backdropFilter};` : ''}
    `;
  }}
  
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  
  ${({ $glow }) => $glow && `animation: ${glow} 2s ease-in-out infinite;`}
  
  ${({ $loading }) =>
    $loading &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: ${shimmer} 2s infinite;
    }
  `}
  
  ${({ $hover, $variant, theme }) =>
    $hover &&
    `
    &:hover {
      transform: translateY(-4px);
      ${(() => {
        const styles = getVariantStyles($variant, theme);
        return `background: ${styles.hoverBackground};`;
      })()}
      box-shadow: ${theme.shadows.lg};
    }
  `}
  
  &:active {
    transform: ${({ $clickable }) => ($clickable ? 'translateY(-2px)' : 'none')};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: auto;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GradientOverlay = styled.div<{ $variant: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.base};
  pointer-events: none;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `background: linear-gradient(135deg, ${theme.colors.primary}10 0%, ${theme.colors.primaryLight}20 100%);`;
      case 'secondary':
        return `background: linear-gradient(135deg, ${theme.colors.secondary}10 0%, ${theme.colors.secondaryLight}20 100%);`;
      case 'accent':
        return `background: linear-gradient(135deg, ${theme.colors.accent}10 0%, ${theme.colors.accentLight}20 100%);`;
      default:
        return `background: linear-gradient(135deg, ${theme.colors.grey}05 0%, ${theme.colors.darkGrey}10 100%);`;
    }
  }}
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  variant = 'neutral',
  size = 'medium',
  hover = true,
  glow = false,
  loading = false,
  onClick,
  className,
  padding = 'medium',
  borderRadius = 'medium',
}) => {
  return (
    <CardContainer
      $variant={variant}
      $size={size}
      $hover={hover}
      $glow={glow}
      $loading={loading}
      $clickable={!!onClick}
      $padding={padding}
      $borderRadius={borderRadius}
      onClick={onClick}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
      whileTap={onClick ? { y: -2 } : {}}
    >
      <GradientOverlay $variant={variant} />
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default GradientCard;
export type { GradientCardProps };