import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

// Ripple effect animation
const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

// Shimmer effect for loading state
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large' | 'xl';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  glow?: boolean;
  rippleEffect?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const getVariantStyles = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return {
        background: theme.colors.primary,
        color: theme.colors.white,
        border: `2px solid ${theme.colors.primary}`,
        hoverBackground: theme.colors.primaryDark,
        hoverBorder: theme.colors.primaryDark,
        activeBackground: theme.colors.primaryDark,
      };
    case 'secondary':
      return {
        background: theme.colors.secondary,
        color: theme.colors.white,
        border: `2px solid ${theme.colors.secondary}`,
        hoverBackground: theme.colors.secondaryDark,
        hoverBorder: theme.colors.secondaryDark,
        activeBackground: theme.colors.secondaryDark,
      };
    case 'accent':
      return {
        background: theme.colors.accent,
        color: theme.colors.white,
        border: `2px solid ${theme.colors.accent}`,
        hoverBackground: theme.colors.accentDark,
        hoverBorder: theme.colors.accentDark,
        activeBackground: theme.colors.accentDark,
      };
    case 'outline':
      return {
        background: 'transparent',
        color: theme.colors.primary,
        border: `2px solid ${theme.colors.primary}`,
        hoverBackground: theme.colors.primary,
        hoverColor: theme.colors.white,
        hoverBorder: theme.colors.primary,
        activeBackground: theme.colors.primaryDark,
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: theme.colors.primary,
        border: '2px solid transparent',
        hoverBackground: theme.colors.primaryAlpha,
        hoverBorder: 'transparent',
        activeBackground: theme.colors.primaryAlpha,
      };
    case 'gradient':
      return {
        background: theme.colors.gradient.primary,
        color: theme.colors.white,
        border: '2px solid transparent',
        hoverBackground: theme.colors.gradient.sunset,
        hoverBorder: 'transparent',
        activeBackground: theme.colors.gradient.primary,
      };
    default:
      return {
        background: theme.colors.primary,
        color: theme.colors.white,
        border: `2px solid ${theme.colors.primary}`,
        hoverBackground: theme.colors.primaryDark,
        hoverBorder: theme.colors.primaryDark,
        activeBackground: theme.colors.primaryDark,
      };
  }
};

const getSizeStyles = (size: string, theme: any) => {
  switch (size) {
    case 'small':
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.sm,
        height: '36px',
        iconSize: 16,
      };
    case 'large':
      return {
        padding: `${theme.spacing.md} ${theme.spacing.xl}`,
        fontSize: theme.typography.fontSize.lg,
        height: '56px',
        iconSize: 24,
      };
    case 'xl':
      return {
        padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
        fontSize: theme.typography.fontSize.xl,
        height: '64px',
        iconSize: 28,
      };
    default: // medium
      return {
        padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
        fontSize: theme.typography.fontSize.base,
        height: '44px',
        iconSize: 20,
      };
  }
};

const ButtonContainer = styled(motion.button)<{
  $variant: string;
  $size: string;
  $fullWidth: boolean;
  $rounded: boolean;
  $glow: boolean;
  $loading: boolean;
  $rippleEffect: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  overflow: hidden;
  user-select: none;
  
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border-radius: ${({ $rounded, theme }) => 
    $rounded ? '50px' : theme.borderRadius.md};
  
  ${({ $variant, theme }) => {
    const styles = getVariantStyles($variant, theme);
    return `
      background: ${styles.background};
      color: ${styles.color};
      border: ${styles.border};
    `;
  }}
  
  ${({ $size, theme }) => {
    const styles = getSizeStyles($size, theme);
    return `
      padding: ${styles.padding};
      font-size: ${styles.fontSize};
      min-height: ${styles.height};
    `;
  }}
  
  ${({ $glow, $variant, theme }) => {
    if (!$glow) return '';
    const styles = getVariantStyles($variant, theme);
    return `
      box-shadow: 0 0 20px ${styles.background}40;
    `;
  }}
  
  ${({ $loading }) => $loading && `
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
        rgba(255, 255, 255, 0.3),
        transparent
      );
      animation: ${shimmer} 1.5s infinite;
    }
  `}
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    ${({ $variant, theme }) => {
      const styles = getVariantStyles($variant, theme);
      return `
        background: ${styles.hoverBackground};
        border-color: ${styles.hoverBorder};
        ${styles.hoverColor ? `color: ${styles.hoverColor};` : ''}
      `;
    }}
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    ${({ $variant, theme }) => {
      const styles = getVariantStyles($variant, theme);
      return `background: ${styles.activeBackground};`;
    }}
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ $variant, theme }) => {
      const styles = getVariantStyles($variant, theme);
      return `${styles.background}40`;
    }};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $size, theme }) => {
      if ($size === 'xl' || $size === 'large') {
        const mediumStyles = getSizeStyles('medium', theme);
        return `
          padding: ${mediumStyles.padding};
          font-size: ${mediumStyles.fontSize};
          min-height: ${mediumStyles.height};
        `;
      }
    }}
  }
`;

const ButtonContent = styled.div<{ $loading: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
  transition: opacity ${({ theme }) => theme.transitions.fast};
`;

const LoadingSpinner = styled(motion.div)`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 1s linear infinite;
`;

const RippleEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ${ripple} 0.6s linear;
  pointer-events: none;
`;

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  rounded = false,
  glow = false,
  rippleEffect = true,
  onClick,
  type = 'button',
  className,
}) => {
  const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);
  const sizeStyles = getSizeStyles(size, { spacing: {}, typography: {} } as any);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (rippleEffect) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }

    onClick?.();
  };

  return (
    <ButtonContainer
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $rounded={rounded}
      $glow={glow}
      $loading={loading}
      $rippleEffect={rippleEffect}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      className={className}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {ripples.map(ripple => (
        <RippleEffect
          key={ripple.id}
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      
      <ButtonContent $loading={loading}>
        {loading && <LoadingSpinner />}
        {icon && iconPosition === 'left' && !loading && (
          <Icon name={icon} size={sizeStyles.iconSize} />
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <Icon name={icon} size={sizeStyles.iconSize} />
        )}
      </ButtonContent>
    </ButtonContainer>
  );
};

export default AnimatedButton;
export type { AnimatedButtonProps };