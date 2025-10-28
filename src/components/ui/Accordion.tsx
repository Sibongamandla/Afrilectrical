import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  badge?: string | number;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenItems?: string[];
  openItems?: string[];
  onChange?: (openItems: string[]) => void;
  allowMultiple?: boolean;
  variant?: 'default' | 'bordered' | 'filled' | 'minimal' | 'card';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  collapsible?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const AccordionContainer = styled.div<{
  variant: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => {
    switch (variant) {
      case 'card': return '16px';
      case 'bordered': return '1px';
      default: return '0';
    }
  }};
`;

const AccordionItemContainer = styled.div<{
  variant: string;
  isOpen: boolean;
  disabled: boolean;
}>`
  position: relative;
  background: ${({ theme, variant, isOpen }) => {
    switch (variant) {
      case 'filled': return isOpen ? theme.colors.primaryLight : theme.colors.lightGrey;
      case 'card': return theme.colors.white;
      default: return 'transparent';
    }
  }};
  border: ${({ theme, variant }) => {
    switch (variant) {
      case 'bordered':
      case 'card': return `1px solid ${theme.colors.border}`;
      default: return 'none';
    }
  }};
  border-radius: ${({ theme, variant }) => {
    switch (variant) {
      case 'card': return theme.borderRadius.lg;
      case 'bordered': return theme.borderRadius.md;
      default: return '0';
    }
  }};
  overflow: hidden;
  transition: all 0.2s ease;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  
  ${({ variant }) => variant === 'card' && `
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
    }
  `}
  
  ${({ variant }) => variant === 'bordered' && `
    &:not(:last-child) {
      border-bottom: none;
    }
    
    &:first-child {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    
    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `}
  
  ${({ variant }) => variant === 'minimal' && `
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
      border-bottom: none;
    }
  `}
`;

const AccordionHeader = styled(motion.button)<{
  variant: string;
  size: 'small' | 'medium' | 'large';
  isOpen: boolean;
  disabled: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ size, variant }) => {
    const basePadding = {
      small: '12px 16px',
      medium: '16px 20px',
      large: '20px 24px'
    };
    if (variant === 'minimal') {
      return {
        small: '12px 0',
        medium: '16px 0',
        large: '20px 0'
      }[size];
    }
    return basePadding[size];
  }};
  background: ${({ theme, variant, isOpen }) => {
    switch (variant) {
      case 'filled': return isOpen ? theme.colors.primaryLight : theme.colors.lightGrey;
      default: return 'transparent';
    }
  }};
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background: ${({ theme, variant, disabled, isOpen }) => {
      if (disabled) return 'transparent';
      switch (variant) {
        case 'filled': return isOpen ? theme.colors.primaryLight : theme.colors.lightGrey;
        case 'minimal': return theme.colors.lightGrey;
        default: return theme.colors.lightGrey;
      }
    }};
  }
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme, disabled }) => disabled ? 'none' : `0 0 0 2px ${theme.colors.primary[500]}20`};
  }
  
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:hover::before {
    opacity: ${({ isOpen, variant }) => {
      if (variant === 'filled' && isOpen) return 1;
      return 0;
    }};
  }
`;

const AccordionHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const AccordionTitle = styled.h3<{
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  margin: 0;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.sm;
      case 'large': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme, disabled }) => disabled ? theme.colors.textMuted : theme.colors.text};
  line-height: 1.2;
`;

const AccordionIcon = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  
  svg {
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
  }
`;

const AccordionBadge = styled.span<{
  size: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => {
    switch (size) {
      case 'small': return '18px';
      case 'large': return '26px';
      default: return '22px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '18px';
      case 'large': return '26px';
      default: return '22px';
    }
  }};
  padding: 0 ${({ size }) => {
    switch (size) {
      case 'small': return '6px';
      case 'large': return '10px';
      default: return '8px';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '11px';
      case 'large': return '14px';
      default: return '12px';
    }
  }};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  line-height: 1;
`;

const AccordionChevron = styled(motion.div)<{
  size: 'small' | 'medium' | 'large';
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;
  
  svg {
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
  }
`;

const AccordionContent = styled(motion.div)<{
  variant: string;
  size: 'small' | 'medium' | 'large';
}>`
  overflow: hidden;
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'filled': return theme.colors.white;
      default: return 'transparent';
    }
  }};
`;

const AccordionContentInner = styled.div<{
  variant: string;
  size: 'small' | 'medium' | 'large';
}>`
  padding: ${({ size, variant }) => {
    const basePadding = {
      small: '12px 16px 16px 16px',
      medium: '16px 20px 20px 20px',
      large: '20px 24px 24px 24px'
    };
    if (variant === 'minimal') {
      return {
        small: '12px 0 16px 0',
        medium: '16px 0 20px 0',
        large: '20px 0 24px 0'
      }[size];
    }
    return basePadding[size];
  }};
  color: ${({ theme }) => theme.colors.text};}]}}
  line-height: 1.6;
`;

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenItems = [],
  openItems,
  onChange,
  allowMultiple = false,
  variant = 'default',
  size = 'medium',
  animated = true,
  collapsible = true,
  className,
  style
}) => {
  const [internalOpenItems, setInternalOpenItems] = useState<string[]>(openItems || defaultOpenItems);
  const isControlled = openItems !== undefined;
  const currentOpenItems = isControlled ? openItems : internalOpenItems;

  const handleItemToggle = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    if (item?.disabled) return;

    let newOpenItems: string[];

    if (allowMultiple) {
      if (currentOpenItems.includes(itemId)) {
        // Close item if it's open and collapsible is true
        if (collapsible) {
          newOpenItems = currentOpenItems.filter(id => id !== itemId);
        } else {
          newOpenItems = currentOpenItems;
        }
      } else {
        // Open item
        newOpenItems = [...currentOpenItems, itemId];
      }
    } else {
      if (currentOpenItems.includes(itemId)) {
        // Close item if it's open and collapsible is true
        newOpenItems = collapsible ? [] : currentOpenItems;
      } else {
        // Open item and close others
        newOpenItems = [itemId];
      }
    }

    if (!isControlled) {
      setInternalOpenItems(newOpenItems);
    }
    onChange?.(newOpenItems);
  };

  return (
    <AccordionContainer
      variant={variant}
      className={className}
      style={style}
    >
      {items.map((item) => {
        const isOpen = currentOpenItems.includes(item.id);
        
        return (
          <AccordionItemContainer
            key={item.id}
            variant={variant}
            isOpen={isOpen}
            disabled={item.disabled || false}
          >
            <AccordionHeader
              variant={variant}
              size={size}
              isOpen={isOpen}
              disabled={item.disabled || false}
              onClick={() => handleItemToggle(item.id)}
              initial={false}
              whileHover={!item.disabled ? { scale: 1.01 } : {}}
              whileTap={!item.disabled ? { scale: 0.99 } : {}}
            >
              <AccordionHeaderContent>
                {item.icon && (
                  <AccordionIcon size={size}>
                    <Icon
                      name={item.icon}
                      size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                    />
                  </AccordionIcon>
                )}
                
                <AccordionTitle
                  size={size}
                  disabled={item.disabled || false}
                >
                  {item.title}
                </AccordionTitle>
                
                {item.badge && (
                  <AccordionBadge size={size}>
                    {item.badge}
                  </AccordionBadge>
                )}
              </AccordionHeaderContent>
              
              <AccordionChevron
                size={size}
                isOpen={isOpen}
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  name="arrow"
                  size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                />
              </AccordionChevron>
            </AccordionHeader>
            
            <AnimatePresence>
              {isOpen && (
                <AccordionContent
                  variant={variant}
                  size={size}
                  initial={animated ? { height: 0, opacity: 0 } : undefined}
              animate={animated ? { height: 'auto', opacity: 1 } : undefined}
              exit={animated ? { height: 0, opacity: 0 } : undefined}
                  transition={{
                    duration: 0.3,
                    ease: [0.04, 0.62, 0.23, 0.98]
                  }}
                >
                  <AccordionContentInner
                    variant={variant}
                    size={size}
                  >
                    {item.content}
                  </AccordionContentInner>
                </AccordionContent>
              )}
            </AnimatePresence>
          </AccordionItemContainer>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
export { Accordion };
export type { AccordionProps, AccordionItem };