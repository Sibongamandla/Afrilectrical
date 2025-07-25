import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

// Pulse animation for notification badges
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

// Bounce animation for new badges
const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`;

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded' | 'pill' | 'square';
  icon?: string;
  iconPosition?: 'left' | 'right';
  dot?: boolean;
  pulse?: boolean;
  bounce?: boolean;
  glow?: boolean;
  outline?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
  onClick?: () => void;
}

const getVariantStyles = (variant: string, outline: boolean, theme: any) => {
  const variants = {
    primary: {
      background: outline ? 'transparent' : theme.colors.primary,
      color: outline ? theme.colors.primary : theme.colors.white,
      border: theme.colors.primary,
    },
    secondary: {
      background: outline ? 'transparent' : theme.colors.secondary,
      color: outline ? theme.colors.secondary : theme.colors.white,
      border: theme.colors.secondary,
    },
    accent: {
      background: outline ? 'transparent' : theme.colors.accent,
      color: outline ? theme.colors.accent : theme.colors.white,
      border: theme.colors.accent,
    },
    success: {
      background: outline ? 'transparent' : theme.colors.success,
      color: outline ? theme.colors.success : theme.colors.white,
      border: theme.colors.success,
    },
    warning: {
      background: outline ? 'transparent' : theme.colors.warning,
      color: outline ? theme.colors.warning : theme.colors.white,
      border: theme.colors.warning,
    },
    error: {
      background: outline ? 'transparent' : theme.colors.error,
      color: outline ? theme.colors.error : theme.colors.white,
      border: theme.colors.error,
    },
    info: {
      background: outline ? 'transparent' : theme.colors.info,
      color: outline ? theme.colors.info : theme.colors.white,
      border: theme.colors.info,
    },
    neutral: {
      background: outline ? 'transparent' : theme.colors.grey,
      color: outline ? theme.colors.grey : theme.colors.white,
      border: theme.colors.grey,
    },
    gradient: {
      background: outline ? 'transparent' : theme.colors.gradient.primary,
      color: outline ? theme.colors.primary : theme.colors.white,
      border: theme.colors.primary,
    },
  };

  return variants[variant as keyof typeof variants] || variants.primary;
};

const getSizeStyles = (size: string, theme: any) => {
  switch (size) {
    case 'small':
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.xs,
        height: '20px',
        iconSize: 12,
      };
    case 'large':
      return {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.sm,
        height: '32px',
        iconSize: 16,
      };
    default: // medium
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.xs,
        height: '24px',
        iconSize: 14,
      };
  }
};

const getShapeStyles = (shape: string, theme: any) => {
  switch (shape) {
    case 'pill':
      return { borderRadius: '50px' };
    case 'square':
      return { borderRadius: theme.borderRadius.sm };
    default: // rounded
      return { borderRadius: theme.borderRadius.md };
  }
};

const BadgeContainer = styled(motion.div)<{
  $variant: string;
  $size: string;
  $shape: string;
  $outline: boolean;
  $pulse: boolean;
  $bounce: boolean;
  $glow: boolean;
  $clickable: boolean;
  $dot: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  
  ${({ $size, $dot, theme }) => {
    const styles = getSizeStyles($size, theme);
    return `
      padding: ${$dot ? '0' : styles.padding};
      font-size: ${styles.fontSize};
      min-height: ${styles.height};
      ${$dot ? `width: ${styles.height}; height: ${styles.height};` : ''}
    `;
  }}
  
  ${({ $shape, theme }) => {
    const styles = getShapeStyles($shape, theme);
    return `border-radius: ${styles.borderRadius};`;
  }}
  
  ${({ $variant, $outline, theme }) => {
    const styles = getVariantStyles($variant, $outline, theme);
    return `
      background: ${styles.background};
      color: ${styles.color};
      border: 1px solid ${styles.border};
    `;
  }}
  
  ${({ $glow, $variant, theme }) => {
    if (!$glow) return '';
    const styles = getVariantStyles($variant, false, theme);
    return `box-shadow: 0 0 10px ${styles.background}60;`;
  }}
  
  ${({ $pulse }) => $pulse && `animation: ${pulse} 2s infinite;`}
  ${({ $bounce }) => $bounce && `animation: ${bounce} 1s;`}
  
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  
  ${({ $clickable }) => $clickable && `
    &:hover {
      transform: translateY(-1px);
      filter: brightness(1.1);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ $variant, theme }) => {
      const styles = getVariantStyles($variant, false, theme);
      return `${styles.background}40`;
    }};
  }
`;

const BadgeContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: currentColor;
  cursor: pointer;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  opacity: 0.7;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    opacity: 1;
  }
`;

const NotificationDot = styled.div<{ $variant: string }>`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  
  ${({ $variant, theme }) => {
    const styles = getVariantStyles($variant, false, theme);
    return `background: ${styles.background};`;
  }}
`;

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  dot = false,
  pulse = false,
  bounce = false,
  glow = false,
  outline = false,
  removable = false,
  onRemove,
  className,
  onClick,
}) => {
  const sizeStyles = getSizeStyles(size, { spacing: {}, typography: {} } as any);
  const isClickable = !!onClick;

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    onRemove?.();
  };

  return (
    <BadgeContainer
      $variant={variant}
      $size={size}
      $shape={shape}
      $outline={outline}
      $pulse={pulse}
      $bounce={bounce}
      $glow={glow}
      $clickable={isClickable}
      $dot={dot}
      onClick={onClick}
      className={className}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      whileHover={isClickable ? { scale: 1.05 } : {}}
      whileTap={isClickable ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {dot ? (
        <NotificationDot $variant={variant} />
      ) : (
        <BadgeContent>
          {icon && iconPosition === 'left' && (
            <Icon name={icon} size={sizeStyles.iconSize} />
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <Icon name={icon} size={sizeStyles.iconSize} />
          )}
          {removable && (
            <RemoveButton
              onClick={handleRemove}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Remove badge"
            >
              <Icon name="x" size={12} />
            </RemoveButton>
          )}
        </BadgeContent>
      )}
    </BadgeContainer>
  );
};

// Badge Group Component for displaying multiple badges
export const BadgeGroup: React.FC<{
  children: React.ReactNode;
  spacing?: 'small' | 'medium' | 'large';
  wrap?: boolean;
  className?: string;
}> = ({ children, spacing = 'medium', wrap = true, className }) => {
  const getSpacing = (spacing: string, theme: any) => {
    switch (spacing) {
      case 'small':
        return theme.spacing.xs;
      case 'large':
        return theme.spacing.md;
      default:
        return theme.spacing.sm;
    }
  };

  const BadgeGroupContainer = styled.div<{ $spacing: string; $wrap: boolean }>`
    display: flex;
    gap: ${({ $spacing, theme }) => getSpacing($spacing, theme)};
    flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
    align-items: center;
  `;

  return (
    <BadgeGroupContainer $spacing={spacing} $wrap={wrap} className={className}>
      {children}
    </BadgeGroupContainer>
  );
};

export default Badge;

// Export types
export type { BadgeProps };
export type BadgeGroupProps = React.ComponentProps<typeof BadgeGroup>;