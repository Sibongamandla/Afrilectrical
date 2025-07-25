import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

// Floating animation keyframes
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`;

// Pulse animation for attention
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(227, 30, 36, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(227, 30, 36, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(227, 30, 36, 0);
  }
`;

interface FloatingActionButtonProps {
  icon: string;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'accent';
  tooltip?: string;
  animate?: boolean;
  pulse?: boolean;
  className?: string;
}

const getPositionStyles = (position: string) => {
  switch (position) {
    case 'bottom-left':
      return { bottom: '2rem', left: '2rem' };
    case 'top-right':
      return { top: '2rem', right: '2rem' };
    case 'top-left':
      return { top: '2rem', left: '2rem' };
    default:
      return { bottom: '2rem', right: '2rem' };
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return { width: '48px', height: '48px', iconSize: 20 };
    case 'large':
      return { width: '72px', height: '72px', iconSize: 32 };
    default:
      return { width: '60px', height: '60px', iconSize: 24 };
  }
};

const getVariantStyles = (variant: string, theme: any) => {
  switch (variant) {
    case 'secondary':
      return {
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.secondaryDark} 100%)`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.secondaryLight} 0%, ${theme.colors.secondary} 100%)`,
      };
    case 'accent':
      return {
        background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentDark} 100%)`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.accentLight} 0%, ${theme.colors.accent} 100%)`,
      };
    default:
      return {
        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
        hoverBackground: `linear-gradient(135deg, ${theme.colors.primaryLight} 0%, ${theme.colors.primary} 100%)`,
      };
  }
};

const FABContainer = styled(motion.button)<{
  $position: string;
  $size: string;
  $variant: string;
  $animate: boolean;
  $pulse: boolean;
}>`
  position: fixed;
  ${({ $position }) => getPositionStyles($position)}
  ${({ $size }) => {
    const styles = getSizeStyles($size);
    return `width: ${styles.width}; height: ${styles.height};`;
  }}
  
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.raised};
  
  ${({ $variant, theme }) => {
    const styles = getVariantStyles($variant, theme);
    return `background: ${styles.background};`;
  }}
  
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all ${({ theme }) => theme.transitions.base};
  
  ${({ $animate }) => $animate && `animation: ${float} 3s ease-in-out infinite;`}
  ${({ $pulse }) => $pulse && `animation: ${pulse} 2s infinite;`}
  
  &:hover {
    transform: scale(1.1) translateY(-2px);
    ${({ $variant, theme }) => {
      const styles = getVariantStyles($variant, theme);
      return `background: ${styles.hoverBackground};`;
    }}
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.xl}, 0 0 0 3px rgba(227, 30, 36, 0.3);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $position }) => {
      const isMobile = true;
      if ($position.includes('bottom')) {
        return 'bottom: 1rem;';
      }
      if ($position.includes('top')) {
        return 'top: 1rem;';
      }
    }}
    ${({ $position }) => {
      if ($position.includes('right')) {
        return 'right: 1rem;';
      }
      if ($position.includes('left')) {
        return 'left: 1rem;';
      }
    }}
  }
`;

const TooltipContainer = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  white-space: nowrap;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '10px')});
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 1rem;
    border: 5px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  position = 'bottom-right',
  size = 'medium',
  variant = 'primary',
  tooltip,
  animate = true,
  pulse = false,
  className,
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const sizeStyles = getSizeStyles(size);

  return (
    <FABContainer
      $position={position}
      $size={size}
      $variant={variant}
      $animate={animate}
      $pulse={pulse}
      onClick={onClick}
      className={className}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Icon name={icon} size={sizeStyles.iconSize} />
      {tooltip && (
        <TooltipContainer $visible={showTooltip}>
          {tooltip}
        </TooltipContainer>
      )}
    </FABContainer>
  );
};

export default FloatingActionButton;
export type { FloatingActionButtonProps };