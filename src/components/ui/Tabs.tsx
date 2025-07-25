import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  badge?: string | number;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills' | 'underline' | 'cards' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const TabsContainer = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'row' : 'column'};
  width: 100%;
  height: ${({ orientation }) => orientation === 'vertical' ? '400px' : 'auto'};
`;

const TabsList = styled.div<{
  variant: string;
  orientation: 'horizontal' | 'vertical';
  fullWidth: boolean;
  centered: boolean;
  scrollable: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ centered, orientation }) => {
    if (orientation === 'vertical') return 'stretch';
    return centered ? 'center' : 'flex-start';
  }};
  justify-content: ${({ centered, fullWidth, orientation }) => {
    if (orientation === 'vertical') return 'flex-start';
    if (fullWidth) return 'stretch';
    return centered ? 'center' : 'flex-start';
  }};
  gap: ${({ variant }) => {
    switch (variant) {
      case 'pills':
      case 'cards': return '8px';
      default: return '0';
    }
  }};
  padding: ${({ variant }) => {
    switch (variant) {
      case 'pills':
      case 'cards': return '4px';
      default: return '0';
    }
  }};
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'pills':
      case 'cards': return theme.colors.borderLight;
      default: return 'transparent';
    }
  }};
  border-radius: ${({ theme, variant }) => {
    switch (variant) {
      case 'pills':
      case 'cards': return theme.borderRadius.lg;
      default: return '0';
    }
  }};
  border-bottom: ${({ theme, variant, orientation }) => {
    if (orientation === 'vertical') return 'none';
    switch (variant) {
      case 'underline':
      case 'default': return `1px solid ${theme.colors.border}`;
      default: return 'none';
    }
  }};
  border-right: ${({ theme, variant, orientation }) => {
    if (orientation === 'horizontal') return 'none';
    switch (variant) {
      case 'underline':
      case 'default': return `1px solid ${theme.colors.border}`;
      default: return 'none';
    }
  }};
  overflow-x: ${({ scrollable, orientation }) => scrollable && orientation === 'horizontal' ? 'auto' : 'visible'};
  overflow-y: ${({ scrollable, orientation }) => scrollable && orientation === 'vertical' ? 'auto' : 'visible'};
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  ${({ orientation }) => orientation === 'vertical' && `
    min-width: 200px;
    max-width: 300px;
    height: 100%;
  `}
`;

const TabButton = styled(motion.button)<{
  isActive: boolean;
  variant: string;
  size: 'small' | 'medium' | 'large';
  orientation: 'horizontal' | 'vertical';
  fullWidth: boolean;
  disabled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ orientation }) => orientation === 'vertical' ? 'flex-start' : 'center'};
  gap: 8px;
  padding: ${({ size, variant }) => {
    const basePadding = {
      small: variant === 'pills' || variant === 'cards' ? '6px 12px' : '8px 12px',
      medium: variant === 'pills' || variant === 'cards' ? '8px 16px' : '12px 16px',
      large: variant === 'pills' || variant === 'cards' ? '10px 20px' : '16px 20px'
    };
    return basePadding[size];
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.sm;
      case 'large': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${({ theme, isActive }) => 
    isActive ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium
  };
  color: ${({ theme, isActive, variant, disabled }) => {
    if (disabled) return theme.colors.textMuted;
    if (isActive) {
      switch (variant) {
        case 'pills':
        case 'cards': return theme.colors.white;
        default: return theme.colors.primaryDark;
      }
    }
    return theme.colors.textMuted;
  }};
  background: ${({ theme, isActive, variant }) => {
    if (!isActive) return 'transparent';
    switch (variant) {
      case 'pills': return theme.colors.primary;
      case 'cards': return theme.colors.white;
      default: return 'transparent';
    }
  }};
  border: none;
  border-radius: ${({ theme, variant }) => {
    switch (variant) {
      case 'pills': return theme.borderRadius.round;
      case 'cards': return theme.borderRadius.md;
      default: return '0';
    }
  }};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  white-space: nowrap;
  flex: ${({ fullWidth, orientation }) => {
    if (orientation === 'vertical') return '0 0 auto';
    return fullWidth ? '1' : '0 0 auto';
  }};
  min-width: ${({ fullWidth, orientation }) => {
    if (orientation === 'vertical') return 'auto';
    return fullWidth ? '0' : 'auto';
  }};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  
  &:hover {
    color: ${({ theme, isActive, variant, disabled }) => {
      if (disabled) return theme.colors.textMuted;
      if (isActive) {
        switch (variant) {
          case 'pills':
          case 'cards': return theme.colors.white;
          default: return theme.colors.primaryDark;
        }
      }
      return theme.colors.text;
    }};
    background: ${({ theme, isActive, variant, disabled }) => {
      if (disabled) return 'transparent';
      if (isActive) {
        switch (variant) {
          case 'pills': return theme.colors.primaryDark;
          case 'cards': return theme.colors.white;
          default: return 'transparent';
        }
      }
      switch (variant) {
        case 'pills': return theme.colors.primaryLight;
        case 'cards': return theme.colors.backgroundDark;
        default: return theme.colors.backgroundDark;
      }
    }};
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-1px)'};
  }
  
  &:active {
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(0)'};
  }
  
  ${({ variant }) => variant === 'cards' && `
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    
    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}
  
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
    border-radius: inherit;
  }
  
  &:hover::before {
    opacity: ${({ isActive, variant }) => {
      if (variant === 'pills' && isActive) return 1;
      return 0;
    }};
  }
`;

const TabIndicator = styled(motion.div)<{
  variant: string;
  orientation: 'horizontal' | 'vertical';
}>`
  position: absolute;
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'underline':
      case 'default': return theme.colors.primary;
      default: return 'transparent';
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  ${({ orientation }) => orientation === 'horizontal' ? `
    bottom: 0;
    height: 2px;
  ` : `
    right: 0;
    width: 2px;
  `}
`;

const TabIcon = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${({ size }) => {
      switch (size) {
        case 'small': return '14px';
        case 'large': return '20px';
        default: return '16px';
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'small': return '14px';
        case 'large': return '20px';
        default: return '16px';
      }
    }};
  }
`;

const TabBadge = styled.span<{
  size: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => {
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
  padding: 0 ${({ size }) => {
    switch (size) {
      case 'small': return '4px';
      case 'large': return '8px';
      default: return '6px';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '10px';
      case 'large': return '14px';
      default: return '12px';
    }
  }};
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  line-height: 1;
`;

const TabContent = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  flex: 1;
  padding: ${({ orientation }) => orientation === 'vertical' ? '0 0 0 24px' : '24px 0 0 0'};
  min-height: ${({ orientation }) => orientation === 'vertical' ? '100%' : 'auto'};
`;

const TabPanel = styled(motion.div)`
  width: 100%;
  height: 100%;
  animation: ${slideIn} 0.3s ease-out;
`;

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  activeTab,
  onChange,
  variant = 'default',
  size = 'medium',
  orientation = 'horizontal',
  fullWidth = false,
  centered = false,
  scrollable = false,
  animated = true,
  className,
  style
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    activeTab || defaultActiveTab || items[0]?.id || ''
  );
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabsListRef = useRef<HTMLDivElement>(null);
  const isControlled = activeTab !== undefined;
  const currentActiveTab = isControlled ? activeTab : internalActiveTab;

  const handleTabChange = (tabId: string) => {
    const tab = items.find(item => item.id === tabId);
    if (tab?.disabled) return;
    
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const updateIndicator = () => {
    if (!tabsListRef.current || variant === 'pills' || variant === 'cards') return;
    
    const activeButton = tabsListRef.current.querySelector(
      `[data-tab-id="${currentActiveTab}"]`
    ) as HTMLElement;
    
    if (activeButton) {
      const listRect = tabsListRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      if (orientation === 'horizontal') {
        setIndicatorStyle({
          left: buttonRect.left - listRect.left,
          width: buttonRect.width,
        });
      } else {
        setIndicatorStyle({
          top: buttonRect.top - listRect.top,
          height: buttonRect.height,
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();
    
    const handleResize = () => updateIndicator();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentActiveTab, items, orientation, variant]);

  const activeItem = items.find(item => item.id === currentActiveTab);

  return (
    <TabsContainer
      orientation={orientation}
      className={className}
      style={style}
    >
      <TabsList
        ref={tabsListRef}
        variant={variant}
        orientation={orientation}
        fullWidth={fullWidth}
        centered={centered}
        scrollable={scrollable}
      >
        {(variant === 'underline' || variant === 'default') && (
          <TabIndicator
            variant={variant}
            orientation={orientation}
            style={indicatorStyle}
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        
        {items.map((item) => (
          <TabButton
            key={item.id}
            data-tab-id={item.id}
            isActive={currentActiveTab === item.id}
            variant={variant}
            size={size}
            orientation={orientation}
            fullWidth={fullWidth}
            disabled={item.disabled || false}
            onClick={() => handleTabChange(item.id)}
            initial={false}
            whileHover={!item.disabled ? { scale: 1.02 } : {}}
            whileTap={!item.disabled ? { scale: 0.98 } : {}}
          >
            {item.icon && (
              <TabIcon size={size}>
                <Icon
                  name={item.icon}
                  size={size === 'small' ? 14 : size === 'large' ? 20 : 16}
                />
              </TabIcon>
            )}
            
            <span>{item.label}</span>
            
            {item.badge && (
              <TabBadge size={size}>
                {item.badge}
              </TabBadge>
            )}
          </TabButton>
        ))}
      </TabsList>
      
      <TabContent orientation={orientation}>
        <AnimatePresence mode="wait">
          {activeItem && (
            <TabPanel
              key={currentActiveTab}
              initial={animated ? { opacity: 0, y: 10 } : undefined}
              animate={animated ? { opacity: 1, y: 0 } : undefined}
              exit={animated ? { opacity: 0, y: -10 } : undefined}
              transition={{ duration: 0.2 }}
            >
              {activeItem.content}
            </TabPanel>
          )}
        </AnimatePresence>
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
export { Tabs };
export type { TabsProps, TabItem };