import React, { useState, useRef, forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

// Shake animation for error state
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
`;

// Pulse animation for focus state
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  70% { box-shadow: 0 0 0 4px rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
`;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconClick?: () => void;
  loading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline' | 'filled' | 'ghost' | 'underline';
  state?: 'default' | 'error' | 'success' | 'warning';
  animate?: boolean;
  showCharacterCount?: boolean;
  maxLength?: number;
  prefix?: string;
  suffix?: string;
  containerClassName?: string;
}

const getSizeStyles = (size: string, theme: any) => {
  switch (size) {
    case 'small':
      return {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.sm,
        height: '36px',
        iconSize: 16,
      };
    case 'large':
      return {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.md,
        height: '48px',
        iconSize: 20,
      };
    default: // medium
      return {
        padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
        fontSize: theme.typography.fontSize.sm,
        height: '40px',
        iconSize: 18,
      };
  }
};

const getVariantStyles = (variant: string, state: string, theme: any) => {
  const baseStyles = {
    default: {
      background: theme.colors.white,
      border: `1px solid ${theme.colors.border}`,
      focusBorder: theme.colors.primary,
    },
    outline: {
      background: 'transparent',
      border: `1px solid ${theme.colors.border}`,
      focusBorder: theme.colors.primary,
    },
    filled: {
      background: theme.colors.grey100,
      border: `1px solid transparent`,
      focusBorder: theme.colors.primary,
    },
    ghost: {
      background: 'transparent',
      border: `1px solid transparent`,
      focusBorder: theme.colors.primary,
    },
    underline: {
      background: 'transparent',
      border: 'none',
      borderBottom: `2px solid ${theme.colors.border}`,
      focusBorder: theme.colors.primary,
      borderRadius: '0',
    },
  };

  const stateColors = {
    error: theme.colors.error,
    success: theme.colors.success,
    warning: theme.colors.warning,
    default: baseStyles[variant as keyof typeof baseStyles]?.focusBorder || theme.colors.primary,
  };

  const base = baseStyles[variant as keyof typeof baseStyles] || baseStyles.default;
  const focusColor = stateColors[state as keyof typeof stateColors] || stateColors.default;

  return {
    ...base,
    focusBorder: focusColor,
    borderColor: state !== 'default' ? focusColor : base.border,
  };
};

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Label = styled.label<{ $state: string; $required?: boolean }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $state, theme }) => {
    switch ($state) {
      case 'error':
        return theme.colors.error;
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.text;
    }
  }};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  ${({ $required }) => $required && `
    &::after {
      content: ' *';
      color: #ef4444;
    }
  `}
`;

const InputWrapper = styled.div<{
  $size: string;
  $variant: string;
  $state: string;
  $focused: boolean;
  $disabled?: boolean;
  $animate: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme, $variant }) => 
    $variant === 'underline' ? '0' : theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  ${({ $size, $variant, $state, theme }) => {
    const sizeStyles = getSizeStyles($size, theme);
    const variantStyles = getVariantStyles($variant, $state, theme);
    
    return `
      min-height: ${sizeStyles.height};
      background: ${variantStyles.background};
      border: ${variantStyles.border};
      ${$variant === 'underline' ? `border-bottom: ${variantStyles.border};` : ''}
    `;
  }}
  
  ${({ $focused, $variant, $state, theme }) => {
    if (!$focused) return '';
    const variantStyles = getVariantStyles($variant, $state, theme);
    
    return `
      border-color: ${variantStyles.focusBorder};
      ${$variant === 'underline' ? `border-bottom-color: ${variantStyles.focusBorder};` : ''}
      box-shadow: 0 0 0 2px ${variantStyles.focusBorder}20;
    `;
  }}
  
  ${({ $disabled, theme }) => $disabled && `
    opacity: 0.6;
    background: ${theme.colors.lightGrey};
    cursor: not-allowed;
  `}
  
  ${({ $state, $animate }) => $state === 'error' && $animate && `
    animation: ${shake} 0.5s ease-in-out;
  `}
  
  &:hover:not(:focus-within) {
    ${({ $disabled, $variant, $state, theme }) => {
      if ($disabled) return '';
      const variantStyles = getVariantStyles($variant, $state, theme);
      return `border-color: ${variantStyles.focusBorder};`;
    }}
  }
`;

const StyledInput = styled.input<{
  $size: string;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
  $hasPrefix: boolean;
  $hasSuffix: boolean;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text};
  
  ${({ $size, theme }) => {
    const styles = getSizeStyles($size, theme);
    return `
      font-size: ${styles.fontSize};
      padding: ${styles.padding};
    `;
  }}
  
  ${({ $hasLeftIcon, $hasPrefix, theme }) => {
    const leftPadding = $hasLeftIcon || $hasPrefix ? theme.spacing.xs : '';
    return leftPadding ? `padding-left: ${leftPadding};` : '';
  }}
  
  ${({ $hasRightIcon, $hasSuffix, theme }) => {
    const rightPadding = $hasRightIcon || $hasSuffix ? theme.spacing.xs : '';
    return rightPadding ? `padding-right: ${rightPadding};` : '';
  }}
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 1;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  /* Remove autofill background */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.white} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const IconContainer = styled.div<{ $position: 'left' | 'right'; $clickable?: boolean }>`
  position: absolute;
  ${({ $position }) => $position}: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  transition: color ${({ theme }) => theme.transitions.fast};
  z-index: 1;
  
  ${({ $clickable, theme }) => $clickable && `
    &:hover {
      color: ${theme.colors.text};
    }
  `}
`;

const LoadingSpinner = styled(motion.div)`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ClearButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const PrefixSuffix = styled.span<{ $position: 'prefix' | 'suffix' }>`
  color: ${({ theme }) => theme.colors.textMuted};}]}}
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  padding: ${({ $position, theme }) => 
    $position === 'prefix' 
      ? `0 ${theme.spacing.xs} 0 ${theme.spacing.sm}`
      : `0 ${theme.spacing.sm} 0 ${theme.spacing.xs}`
  };
`;

const MessageContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Message = styled.div<{ $type: 'error' | 'success' | 'hint' | 'warning' }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: 1.4;
  flex: 1;
  
  color: ${({ $type, theme }) => {
    switch ($type) {
      case 'error':
        return theme.colors.error;
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.textMuted;
    }
  }};
`;

const CharacterCount = styled.div<{ $isOverLimit: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ $isOverLimit, theme }) => 
    $isOverLimit ? theme.colors.error : theme.colors.textMuted};
  white-space: nowrap;
`;

const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    label,
    error,
    success,
    hint,
    leftIcon,
    rightIcon,
    onRightIconClick,
    loading = false,
    clearable = false,
    onClear,
    size = 'medium',
    variant = 'default',
    state = 'default',
    animate = true,
    showCharacterCount = false,
    maxLength,
    prefix,
    suffix,
    containerClassName,
    required,
    disabled,
    value,
    onChange,
    onFocus,
    onBlur,
    ...props
  },
  ref
) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Determine the actual state based on props
  const actualState = error ? 'error' : success ? 'success' : state;
  
  // Get size styles for icon sizing
  const sizeStyles = getSizeStyles(size, { spacing: {}, typography: {} } as any);
  
  // Handle value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(e);
  };
  
  // Handle focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };
  
  // Handle blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };
  
  // Handle clear
  const handleClear = () => {
    setInternalValue('');
    onClear?.();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Create synthetic event for onChange
    const syntheticEvent = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };
  
  // Character count logic
  const currentLength = String(value || internalValue || '').length;
  const isOverLimit = maxLength ? currentLength > maxLength : false;
  
  // Determine what to show in right side
  const showClearButton = clearable && (value || internalValue) && !disabled;
  const showRightIcon = rightIcon && !loading && !showClearButton;
  const showLoading = loading && !showClearButton;
  
  return (
    <InputContainer className={containerClassName}>
      {label && (
        <Label $state={actualState} $required={required}>
          {label}
        </Label>
      )}
      
      <InputWrapper
        $size={size}
        $variant={variant}
        $state={actualState}
        $focused={focused}
        $disabled={disabled}
        $animate={animate}
      >
        {leftIcon && (
          <IconContainer $position="left">
            <Icon name={leftIcon} size={sizeStyles.iconSize} />
          </IconContainer>
        )}
        
        {prefix && (
          <PrefixSuffix $position="prefix">{prefix}</PrefixSuffix>
        )}
        
        <StyledInput
          ref={ref || inputRef}
          $size={size}
          $hasLeftIcon={!!leftIcon}
          $hasRightIcon={!!(showRightIcon || showLoading || showClearButton)}
          $hasPrefix={!!prefix}
          $hasSuffix={!!suffix}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          required={required}
          {...props}
        />
        
        {suffix && (
          <PrefixSuffix $position="suffix">{suffix}</PrefixSuffix>
        )}
        
        {showLoading && (
          <IconContainer $position="right">
            <LoadingSpinner />
          </IconContainer>
        )}
        
        {showClearButton && (
          <IconContainer $position="right">
            <ClearButton
              onClick={handleClear}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              <Icon name="x" size={14} />
            </ClearButton>
          </IconContainer>
        )}
        
        {showRightIcon && (
          <IconContainer
            $position="right"
            $clickable={!!onRightIconClick}
            onClick={onRightIconClick}
          >
            <Icon name={rightIcon!} size={sizeStyles.iconSize} />
          </IconContainer>
        )}
      </InputWrapper>
      
      {(error || success || hint || showCharacterCount) && (
        <MessageContainer>
          <div>
            {error && <Message $type="error">{error}</Message>}
            {!error && success && <Message $type="success">{success}</Message>}
            {!error && !success && hint && <Message $type="hint">{hint}</Message>}
          </div>
          
          {showCharacterCount && maxLength && (
            <CharacterCount $isOverLimit={isOverLimit}>
              {currentLength}/{maxLength}
            </CharacterCount>
          )}
        </MessageContainer>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;

// Textarea component with similar styling
export const Textarea = forwardRef<HTMLTextAreaElement, 
  Omit<InputProps, 'leftIcon' | 'rightIcon' | 'onRightIconClick' | 'prefix' | 'suffix'> & {
    rows?: number;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  }
>((
  {
    label,
    error,
    success,
    hint,
    loading = false,
    clearable = false,
    onClear,
    size = 'medium',
    variant = 'default',
    state = 'default',
    animate = true,
    showCharacterCount = false,
    maxLength,
    containerClassName,
    required,
    disabled,
    value,
    onChange,
    onFocus,
    onBlur,
    rows = 4,
    resize = 'vertical',
    ...props
  },
  ref
) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const actualState = error ? 'error' : success ? 'success' : state;
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(e as any);
  };
  
  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(e as any);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(e as any);
  };
  
  const handleClear = () => {
    setInternalValue('');
    onClear?.();
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    const syntheticEvent = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLTextAreaElement>;
    onChange?.(syntheticEvent as any);
  };
  
  const currentLength = String(value || internalValue || '').length;
  const isOverLimit = maxLength ? currentLength > maxLength : false;
  const showClearButton = clearable && (value || internalValue) && !disabled;
  
  const StyledTextarea = styled.textarea<{
    $size: string;
    $resize: string;
  }>`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.text};
    resize: ${({ $resize }) => $resize};
    min-height: ${({ rows }) => `${(rows || 4) * 1.5}em`};
    
    ${({ $size, theme }) => {
      const styles = getSizeStyles($size, theme);
      return `
        font-size: ${styles.fontSize};
        padding: ${styles.padding};
      `;
    }}
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
      opacity: 1;
    }
    
    &:disabled {
      cursor: not-allowed;
    }
  `;
  
  return (
    <InputContainer className={containerClassName}>
      {label && (
        <Label $state={actualState} $required={required}>
          {label}
        </Label>
      )}
      
      <InputWrapper
        $size={size}
        $variant={variant}
        $state={actualState}
        $focused={focused}
        $disabled={disabled}
        $animate={animate}
      >
        <StyledTextarea
          ref={ref || textareaRef}
          $size={size}
          $resize={resize}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={maxLength}
          required={required}
          rows={rows}
          {...props as any}
        />
        
        {showClearButton && (
          <IconContainer $position="right" style={{ top: '12px' }}>
            <ClearButton
              onClick={handleClear}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              <Icon name="x" size={14} />
            </ClearButton>
          </IconContainer>
        )}
      </InputWrapper>
      
      {(error || success || hint || showCharacterCount) && (
        <MessageContainer>
          <div>
            {error && <Message $type="error">{error}</Message>}
            {!error && success && <Message $type="success">{success}</Message>}
            {!error && !success && hint && <Message $type="hint">{hint}</Message>}
          </div>
          
          {showCharacterCount && maxLength && (
            <CharacterCount $isOverLimit={isOverLimit}>
              {currentLength}/{maxLength}
            </CharacterCount>
          )}
        </MessageContainer>
      )}
    </InputContainer>
  );
});

Textarea.displayName = 'Textarea';

// Export types
export type { InputProps };
export type TextareaProps = Omit<InputProps, 'leftIcon' | 'rightIcon' | 'onRightIconClick' | 'prefix' | 'suffix'> & {
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
};