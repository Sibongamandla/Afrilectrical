import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  trigger?: 'hover' | 'click' | 'focus' | 'manual';
  delay?: number;
  hideDelay?: number;
  disabled?: boolean;
  arrow?: boolean;
  offset?: number;
  maxWidth?: number;
  variant?: 'default' | 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

interface Position {
  top: number;
  left: number;
  placement: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipContent = styled(motion.div)<{
  variant: string;
  size: string;
  maxWidth: number;
  placement: string;
}>`
  position: absolute;
  z-index: 9999;
  padding: ${({ size }) => {
    switch (size) {
      case 'small': return '6px 8px';
      case 'large': return '12px 16px';
      default: return '8px 12px';
    }
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.xs;
      case 'large': return theme.typography.fontSize.sm;
      default: return theme.typography.fontSize.xs;
    }
  }};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.4;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  max-width: ${({ maxWidth }) => maxWidth}px;
  word-wrap: break-word;
  white-space: pre-wrap;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  backdrop-filter: blur(8px);
  
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'dark': return theme.colors.darkGrey;
      case 'light': return theme.colors.white;
      case 'primary': return theme.colors.primary;
      case 'success': return theme.colors.success;
      case 'warning': return theme.colors.warning;
      case 'error': return theme.colors.error;
      default: return theme.colors.darkGrey;
    }
  }};
  
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'light': return theme.colors.darkGrey;
      default: return theme.colors.white;
    }
  }};
  
  border: ${({ theme, variant }) => {
    switch (variant) {
      case 'light': return `1px solid ${theme.colors.border}`;
      default: return 'none';
    }
  }};
  
  /* Arrow positioning */
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    
    ${({ placement, theme, variant }) => {
      const arrowSize = 6;
      const borderColor = (() => {
        switch (variant) {
          case 'dark': return theme.colors.darkGrey;
          case 'light': return theme.colors.white;
          case 'primary': return theme.colors.primary;
          case 'success': return theme.colors.success;
          case 'warning': return theme.colors.warning;
          case 'error': return theme.colors.error;
          default: return theme.colors.grey;
        }
      })();
      
      switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          return `
            bottom: -${arrowSize}px;
            left: 50%;
            transform: translateX(-50%);
            border-width: ${arrowSize}px ${arrowSize}px 0 ${arrowSize}px;
            border-color: ${borderColor} transparent transparent transparent;
          `;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return `
            top: -${arrowSize}px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 ${arrowSize}px ${arrowSize}px ${arrowSize}px;
            border-color: transparent transparent ${borderColor} transparent;
          `;
        case 'left':
        case 'left-start':
        case 'left-end':
          return `
            right: -${arrowSize}px;
            top: 50%;
            transform: translateY(-50%);
            border-width: ${arrowSize}px 0 ${arrowSize}px ${arrowSize}px;
            border-color: transparent transparent transparent ${borderColor};
          `;
        case 'right':
        case 'right-start':
        case 'right-end':
          return `
            left: -${arrowSize}px;
            top: 50%;
            transform: translateY(-50%);
            border-width: ${arrowSize}px ${arrowSize}px ${arrowSize}px 0;
            border-color: transparent ${borderColor} transparent transparent;
          `;
        default:
          return '';
      }
    }}
  }
`;

const TooltipPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
`;

const TooltipOverlay = styled(motion.div)<{
  interactive: boolean;
}>`
  position: absolute;
  pointer-events: ${({ interactive }) => interactive ? 'auto' : 'none'};
`;

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  delay = 0,
  hideDelay = 0,
  disabled = false,
  arrow = true,
  offset = 8,
  maxWidth = 200,
  variant = 'default',
  size = 'medium',
  interactive = false,
  visible,
  onVisibleChange,
  className,
  style
}) => {
  const [internalVisible, setInternalVisible] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0, placement });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isControlled = visible !== undefined;
  const isVisible = isControlled ? visible : internalVisible;

  const calculatePosition = (): Position => {
    if (!triggerRef.current) return { top: 0, left: 0, placement };

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    const triggerTop = triggerRect.top + scrollY;
    const triggerLeft = triggerRect.left + scrollX;
    const triggerWidth = triggerRect.width;
    const triggerHeight = triggerRect.height;
    
    // Estimate tooltip dimensions (will be refined after render)
    const tooltipWidth = maxWidth;
    const tooltipHeight = 40; // Approximate height
    
    let top = 0;
    let left = 0;
    let finalPlacement: typeof placement = placement;
    
    switch (placement) {
      case 'top':
        top = triggerTop - tooltipHeight - offset;
        left = triggerLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case 'top-start':
        top = triggerTop - tooltipHeight - offset;
        left = triggerLeft;
        break;
      case 'top-end':
        top = triggerTop - tooltipHeight - offset;
        left = triggerLeft + triggerWidth - tooltipWidth;
        break;
      case 'bottom':
        top = triggerTop + triggerHeight + offset;
        left = triggerLeft + triggerWidth / 2 - tooltipWidth / 2;
        break;
      case 'bottom-start':
        top = triggerTop + triggerHeight + offset;
        left = triggerLeft;
        break;
      case 'bottom-end':
        top = triggerTop + triggerHeight + offset;
        left = triggerLeft + triggerWidth - tooltipWidth;
        break;
      case 'left':
        top = triggerTop + triggerHeight / 2 - tooltipHeight / 2;
        left = triggerLeft - tooltipWidth - offset;
        break;
      case 'left-start':
        top = triggerTop;
        left = triggerLeft - tooltipWidth - offset;
        break;
      case 'left-end':
        top = triggerTop + triggerHeight - tooltipHeight;
        left = triggerLeft - tooltipWidth - offset;
        break;
      case 'right':
        top = triggerTop + triggerHeight / 2 - tooltipHeight / 2;
        left = triggerLeft + triggerWidth + offset;
        break;
      case 'right-start':
        top = triggerTop;
        left = triggerLeft + triggerWidth + offset;
        break;
      case 'right-end':
        top = triggerTop + triggerHeight - tooltipHeight;
        left = triggerLeft + triggerWidth + offset;
        break;
    }
    
    // Viewport boundary detection and adjustment
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Horizontal boundary check
    if (left < 0) {
      left = 8;
    } else if (left + tooltipWidth > viewportWidth) {
      left = viewportWidth - tooltipWidth - 8;
    }
    
    // Vertical boundary check
    if (top < scrollTop) {
      // Flip to bottom if there's space
      if (placement.startsWith('top')) {
        top = triggerTop + triggerHeight + offset;
        finalPlacement = placement.replace('top', 'bottom') as typeof placement;
      }
    } else if (top + tooltipHeight > scrollTop + viewportHeight) {
      // Flip to top if there's space
      if (placement.startsWith('bottom')) {
        top = triggerTop - tooltipHeight - offset;
        finalPlacement = placement.replace('bottom', 'top') as typeof placement;
      }
    }
    
    return { top, left, placement: finalPlacement };
  };

  const showTooltip = () => {
    if (disabled) return;
    
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = undefined;
    }
    
    if (delay > 0) {
      showTimeoutRef.current = setTimeout(() => {
        setInternalVisible(true);
        onVisibleChange?.(true);
      }, delay);
    } else {
      setInternalVisible(true);
      onVisibleChange?.(true);
    }
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = undefined;
    }
    
    if (hideDelay > 0) {
      hideTimeoutRef.current = setTimeout(() => {
        setInternalVisible(false);
        onVisibleChange?.(false);
      }, hideDelay);
    } else {
      setInternalVisible(false);
      onVisibleChange?.(false);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      showTooltip();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      hideTooltip();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      showTooltip();
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      hideTooltip();
    }
  };

  const handleTooltipMouseEnter = () => {
    if (interactive && trigger === 'hover') {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = undefined;
      }
    }
  };

  const handleTooltipMouseLeave = () => {
    if (interactive && trigger === 'hover') {
      hideTooltip();
    }
  };

  useEffect(() => {
    if (isVisible) {
      setPosition(calculatePosition());
    }
  }, [isVisible, placement, offset]);

  useEffect(() => {
    const handleResize = () => {
      if (isVisible) {
        setPosition(calculatePosition());
      }
    };

    const handleScroll = () => {
      if (isVisible) {
        setPosition(calculatePosition());
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isVisible]);

  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const triggerProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur
  };

  const tooltipElement = (
    <AnimatePresence>
      {isVisible && (
        <TooltipPortal>
          <TooltipOverlay
            interactive={interactive}
            style={{
              top: position.top,
              left: position.left
            }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          >
            <TooltipContent
              ref={tooltipRef}
              variant={variant}
              size={size}
              maxWidth={maxWidth}
              placement={position.placement}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: placement.startsWith('top') ? 8 : placement.startsWith('bottom') ? -8 : 0,
                x: placement.startsWith('left') ? 8 : placement.startsWith('right') ? -8 : 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: placement.startsWith('top') ? 8 : placement.startsWith('bottom') ? -8 : 0,
                x: placement.startsWith('left') ? 8 : placement.startsWith('right') ? -8 : 0
              }}
              transition={{
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={className}
              style={style}
            >
              {content}
            </TooltipContent>
          </TooltipOverlay>
        </TooltipPortal>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <TooltipWrapper
        ref={triggerRef}
        {...triggerProps}
      >
        {children}
      </TooltipWrapper>
      {typeof document !== 'undefined' && createPortal(tooltipElement, document.body)}
    </>
  );
};

export default Tooltip;
export { Tooltip };
export type { TooltipProps };