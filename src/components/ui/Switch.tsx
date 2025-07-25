import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Icon from './Icon';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  description?: string;
  icon?: string;
  checkedIcon?: string;
  uncheckedIcon?: string;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SwitchContainer = styled.div<{
  disabled: boolean;
  hasLabel: boolean;
}>`
  display: flex;
  align-items: ${({ hasLabel }) => hasLabel ? 'flex-start' : 'center'};
  gap: 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: opacity 0.2s ease;
`;

const SwitchTrack = styled(motion.div)<{
  checked: boolean;
  variant: string;
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  loading: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '36px';
      case 'large': return '56px';
      default: return '44px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '20px';
      case 'large': return '28px';
      default: return '24px';
    }
  }};
  background: ${({ theme, checked, variant, disabled }) => {
    if (disabled) return theme.colors.border;
    if (!checked) return theme.colors.textMuted;
    
    switch (variant) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'accent': return theme.colors.accent;
      case 'success': return theme.colors.success;
      case 'warning': return theme.colors.warning;
      case 'error': return theme.colors.error;
      default: return theme.colors.primary;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    box-shadow: ${({ theme, disabled }) => disabled ? theme.shadows.sm : theme.shadows.md};
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-1px)'};
  }
  
  &:active {
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(0)'};
  }
  
  ${({ loading }) => loading && `
    animation: ${pulse} 2s infinite;
  `}
`;

const SwitchThumb = styled(motion.div)<{
  checked: boolean;
  size: 'small' | 'medium' | 'large';
  hasIcon: boolean;
  loading: boolean;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  left: ${({ checked, size }) => {
    if (!checked) return '2px';
    switch (size) {
      case 'small': return '18px';
      case 'large': return '30px';
      default: return '22px';
    }
  }};
  
  ${({ loading }) => loading && `
    &::after {
      content: '';
      position: absolute;
      width: 60%;
      height: 60%;
      border: 2px solid transparent;
      border-top: 2px solid #666;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
  `}
`;

const SwitchIcon = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textMuted};
  
  svg {
    width: ${({ size }) => {
      switch (size) {
        case 'small': return '10px';
        case 'large': return '14px';
        default: return '12px';
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'small': return '10px';
        case 'large': return '14px';
        default: return '12px';
      }
    }};
  }
`;

const SwitchContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SwitchLabel = styled.label<{
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.sm;
      case 'large': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, disabled }) => disabled ? theme.colors.textMuted : theme.colors.text};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: color 0.2s ease;
  line-height: 1.2;
`;

const SwitchDescription = styled.p<{
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.xs;
      case 'large': return theme.typography.fontSize.sm;
      default: return theme.typography.fontSize.sm;
    }
  }};
  color: ${({ theme, disabled }) => disabled ? theme.colors.textMuted : theme.colors.textMuted};
  margin: 0;
  line-height: 1.3;
`;

const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  variant = 'default',
  size = 'medium',
  label,
  description,
  icon,
  checkedIcon,
  uncheckedIcon,
  loading = false,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked);
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled || loading) return;
    
    const newChecked = !currentChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const getCurrentIcon = () => {
    if (loading) return null;
    if (currentChecked && checkedIcon) return checkedIcon;
    if (!currentChecked && uncheckedIcon) return uncheckedIcon;
    if (icon) return icon;
    return null;
  };

  const currentIcon = getCurrentIcon();
  const hasIcon = currentIcon || loading;

  return (
    <SwitchContainer
      disabled={disabled}
      hasLabel={!!(label || description)}
      className={className}
      style={style}
      onClick={handleToggle}
    >
      <SwitchTrack
        checked={currentChecked}
        variant={variant}
        size={size}
        disabled={disabled}
        loading={loading}
        initial={false}
        animate={{
          backgroundColor: currentChecked
            ? variant === 'primary' ? '#3b82f6'
            : variant === 'secondary' ? '#6b7280'
            : variant === 'accent' ? '#8b5cf6'
            : variant === 'success' ? '#10b981'
            : variant === 'warning' ? '#f59e0b'
            : variant === 'error' ? '#ef4444'
            : '#3b82f6'
            : '#d1d5db'
        }}
        transition={{ duration: 0.3 }}
      >
        <SwitchThumb
          checked={currentChecked}
          size={size}
          hasIcon={!!hasIcon}
          loading={loading}
          initial={false}
          animate={{
            x: currentChecked
              ? size === 'small' ? 16
              : size === 'large' ? 28
              : 20
              : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          whileHover={!disabled ? { scale: 1.05 } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
        >
          {hasIcon && (
            <SwitchIcon size={size}>
              {!loading && currentIcon && (
                <Icon
                  name={currentIcon}
                  size={size === 'small' ? 10 : size === 'large' ? 14 : 12}
                />
              )}
            </SwitchIcon>
          )}
        </SwitchThumb>
      </SwitchTrack>
      
      {(label || description) && (
        <SwitchContent>
          {label && (
            <SwitchLabel
              size={size}
              disabled={disabled}
            >
              {label}
            </SwitchLabel>
          )}
          {description && (
            <SwitchDescription
              size={size}
              disabled={disabled}
            >
              {description}
            </SwitchDescription>
          )}
        </SwitchContent>
      )}
    </SwitchContainer>
  );
};

// Checkbox variant of Switch
interface CheckboxProps extends Omit<SwitchProps, 'variant'> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  indeterminate?: boolean;
}

const CheckboxContainer = styled.div<{
  disabled: boolean;
  hasLabel: boolean;
}>`
  display: flex;
  align-items: ${({ hasLabel }) => hasLabel ? 'flex-start' : 'center'};
  gap: 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: opacity 0.2s ease;
`;

const CheckboxInput = styled(motion.div)<{
  checked: boolean;
  indeterminate: boolean;
  variant: string;
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  background: ${({ theme, checked, indeterminate, variant, disabled }) => {
    if (disabled) return theme.colors.border;
    if (!checked && !indeterminate) return theme.colors.white;
    
    switch (variant) {
      case 'primary': return theme.colors.primary;
        case 'secondary': return theme.colors.secondary;
        case 'accent': return theme.colors.accent;
        case 'success': return theme.colors.success;
        case 'warning': return theme.colors.warning;
        case 'error': return theme.colors.error;
        default: return theme.colors.primary;
    }
  }};
  border: 2px solid ${({ theme, checked, indeterminate, variant, disabled }) => {
    if (disabled) return theme.colors.textMuted;
      if (!checked && !indeterminate) return theme.colors.border;
    
    switch (variant) {
      case 'primary': return theme.colors.primary;
        case 'secondary': return theme.colors.secondary;
        case 'accent': return theme.colors.accent;
        case 'success': return theme.colors.success;
        case 'warning': return theme.colors.warning;
        case 'error': return theme.colors.error;
        default: return theme.colors.primary;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  
  &:hover {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(1.05)'};
    box-shadow: ${({ theme, disabled }) => disabled ? 'none' : theme.shadows.md};
  }
  
  &:active {
    transform: ${({ disabled }) => disabled ? 'none' : 'scale(0.95)'};
  }
`;

const CheckboxIcon = styled(motion.div)<{
  size: 'small' | 'medium' | 'large';
}>`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${({ size }) => {
      switch (size) {
        case 'small': return '10px';
        case 'large': return '16px';
        default: return '12px';
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'small': return '10px';
        case 'large': return '16px';
        default: return '12px';
      }
    }};
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  variant = 'default',
  size = 'medium',
  label,
  description,
  indeterminate = false,
  loading = false,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked);
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled || loading) return;
    
    const newChecked = !currentChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const getIcon = () => {
    if (loading) return 'gear';
    if (indeterminate) return 'minus';
    if (currentChecked) return 'check';
    return null;
  };

  const iconName = getIcon();

  return (
    <CheckboxContainer
      disabled={disabled}
      hasLabel={!!(label || description)}
      className={className}
      style={style}
      onClick={handleToggle}
    >
      <CheckboxInput
        checked={currentChecked}
        indeterminate={indeterminate}
        variant={variant}
        size={size}
        disabled={disabled}
        initial={false}
        animate={{
          scale: currentChecked || indeterminate ? 1 : 1,
          backgroundColor: currentChecked || indeterminate
            ? variant === 'primary' ? '#3b82f6'
            : variant === 'secondary' ? '#6b7280'
            : variant === 'accent' ? '#8b5cf6'
            : variant === 'success' ? '#10b981'
            : variant === 'warning' ? '#f59e0b'
            : variant === 'error' ? '#ef4444'
            : '#3b82f6'
            : '#ffffff'
        }}
        transition={{ duration: 0.2 }}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
      >
        {iconName && (
          <CheckboxIcon
            size={size}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              name={iconName}
              size={size === 'small' ? 10 : size === 'large' ? 16 : 12}
            />
          </CheckboxIcon>
        )}
      </CheckboxInput>
      
      {(label || description) && (
        <SwitchContent>
          {label && (
            <SwitchLabel
              size={size}
              disabled={disabled}
            >
              {label}
            </SwitchLabel>
          )}
          {description && (
            <SwitchDescription
              size={size}
              disabled={disabled}
            >
              {description}
            </SwitchDescription>
          )}
        </SwitchContent>
      )}
    </CheckboxContainer>
  );
};

export default Switch;
export { Switch, Checkbox };
export type { SwitchProps, CheckboxProps };