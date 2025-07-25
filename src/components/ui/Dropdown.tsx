import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';

// Slide down animation for dropdown
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface DropdownOption {
  value: string | number;
  label: string;
  icon?: string;
  disabled?: boolean;
  description?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string | number;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  loading?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline' | 'filled' | 'ghost';
  position?: 'bottom' | 'top' | 'auto';
  maxHeight?: number;
  onSelect?: (value: string | number | (string | number)[]) => void;
  onSearch?: (query: string) => void;
  className?: string;
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

const getVariantStyles = (variant: string, theme: any) => {
  switch (variant) {
    case 'outline':
      return {
        background: 'transparent',
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
      };
    case 'filled':
      return {
        background: theme.colors.grey100,
        border: `1px solid transparent`,
        color: theme.colors.text,
      };
    case 'ghost':
      return {
        background: 'transparent',
        border: `1px solid transparent`,
        color: theme.colors.text,
      };
    default: // default
      return {
        background: theme.colors.white,
        border: `1px solid ${theme.colors.border}`,
        color: theme.colors.text,
      };
  }
};

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label<{ $error?: boolean }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $error, theme }) => ($error ? theme.colors.error : theme.colors.text)};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

const DropdownTrigger = styled(motion.button)<{
  $size: string;
  $variant: string;
  $error?: boolean;
  $disabled?: boolean;
  $isOpen: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  
  ${({ $size, theme }) => {
    const styles = getSizeStyles($size, theme);
    return `
      padding: ${styles.padding};
      font-size: ${styles.fontSize};
      min-height: ${styles.height};
    `;
  }}
  
  ${({ $variant, theme }) => {
    const styles = getVariantStyles($variant, theme);
    return `
      background: ${styles.background};
      border: ${styles.border};
      color: ${styles.color};
    `;
  }}
  
  ${({ $error, theme }) => $error && `
    border-color: ${theme.colors.error};
    box-shadow: 0 0 0 1px ${theme.colors.error}20;
  `}
  
  ${({ $disabled, theme }) => $disabled && `
    opacity: 0.6;
    background: ${theme.colors.lightGrey};
  `}
  
  ${({ $isOpen, theme }) => $isOpen && `
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
  `}
  
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

const DropdownContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex: 1;
  min-width: 0;
`;

const DropdownText = styled.span<{ $placeholder?: boolean }>`
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${({ $placeholder }) => ($placeholder ? 0.6 : 1)};
`;

const DropdownIcon = styled(motion.div)<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform ${({ theme }) => theme.transitions.fast};
`;

const DropdownMenu = styled(motion.div)<{
  $position: string;
  $maxHeight: number;
}>`
  position: absolute;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  
  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return 'bottom: 100%; margin-bottom: 4px;';
      case 'bottom':
      default:
        return 'top: 100%; margin-top: 4px;';
    }
  }}
  
  max-height: ${({ $maxHeight }) => $maxHeight}px;
  overflow-y: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.borderDark};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  background: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const DropdownOption = styled(motion.div)<{
  $disabled?: boolean;
  $selected?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  ${({ $selected, theme }) => $selected && `
    background: ${theme.colors.primary}10;
    color: ${theme.colors.primary};
    font-weight: ${theme.typography.fontWeight.medium};
  `}
  
  ${({ $disabled, theme }) => $disabled && `
    opacity: 0.5;
    color: ${theme.colors.textMuted};
  `}
  
  &:hover:not([data-disabled="true"]) {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const OptionContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const OptionLabel = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ErrorMessage = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;

const LoadingSpinner = styled(motion.div)`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.border};}]}}
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

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option...',
  label,
  error,
  disabled = false,
  loading = false,
  searchable = false,
  multiple = false,
  clearable = false,
  size = 'medium',
  variant = 'default',
  position = 'auto',
  maxHeight = 200,
  onSelect,
  onSearch,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>(
    multiple ? (Array.isArray(value) ? value : value ? [value] : []) : []
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const sizeStyles = getSizeStyles(size, { spacing: {}, typography: {} } as any);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // Filter options based on search query
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setSearchQuery('');
    }
  };

  const handleOptionSelect = (optionValue: string | number) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      onSelect?.(newValues);
    } else {
      setSelectedValues([optionValue]);
      onSelect?.(optionValue);
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedValues([]);
    onSelect?.(multiple ? [] : '');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const getDisplayText = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || placeholder;
      }
      return `${selectedValues.length} items selected`;
    } else {
      const selectedValue = value || selectedValues[0];
      const option = options.find(opt => opt.value === selectedValue);
      return option?.label || placeholder;
    }
  };

  const hasValue = multiple ? selectedValues.length > 0 : (value || selectedValues[0]);

  return (
    <DropdownContainer ref={dropdownRef} className={className}>
      {label && <Label $error={!!error}>{label}</Label>}
      
      <DropdownTrigger
        $size={size}
        $variant={variant}
        $error={!!error}
        $disabled={disabled}
        $isOpen={isOpen}
        onClick={handleToggle}
        whileHover={!disabled ? { scale: 1.01 } : {}}
        whileTap={!disabled ? { scale: 0.99 } : {}}
      >
        <DropdownContent>
          <DropdownText $placeholder={!hasValue}>
            {getDisplayText()}
          </DropdownText>
        </DropdownContent>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {loading && <LoadingSpinner />}
          {clearable && hasValue && !loading && (
            <ClearButton
              onClick={handleClear}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name="x" size={12} />
            </ClearButton>
          )}
          <DropdownIcon $isOpen={isOpen}>
            <Icon name="chevron-down" size={sizeStyles.iconSize} />
          </DropdownIcon>
        </div>
      </DropdownTrigger>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenu
            $position={position}
            $maxHeight={maxHeight}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {searchable && (
              <SearchInput
                ref={searchInputRef}
                type="text"
                placeholder="Search options..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            )}
            
            {filteredOptions.length === 0 ? (
              <DropdownOption $disabled>
                <OptionContent>
                  <OptionLabel>No options found</OptionLabel>
                </OptionContent>
              </DropdownOption>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = multiple
                  ? selectedValues.includes(option.value)
                  : (value || selectedValues[0]) === option.value;
                
                return (
                  <DropdownOption
                    key={option.value}
                    $disabled={option.disabled}
                    $selected={isSelected}
                    onClick={() => !option.disabled && handleOptionSelect(option.value)}
                    data-disabled={option.disabled}
                    whileHover={!option.disabled ? { x: 4 } : {}}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    {option.icon && (
                      <Icon name={option.icon} size={sizeStyles.iconSize} />
                    )}
                    <OptionContent>
                      <OptionLabel>{option.label}</OptionLabel>
                      {option.description && (
                        <OptionDescription>{option.description}</OptionDescription>
                      )}
                    </OptionContent>
                    {multiple && isSelected && (
                      <Icon name="check" size={16} />
                    )}
                  </DropdownOption>
                );
              })
            )}
          </DropdownMenu>
        )}
      </AnimatePresence>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </DropdownContainer>
  );
};

export default Dropdown;

// Export types
export type { DropdownProps, DropdownOption };