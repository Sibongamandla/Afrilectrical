import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onChangeCommitted?: (value: number) => void;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
  showTicks?: boolean;
  marks?: Array<{ value: number; label?: string }>;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

interface RangeSliderProps extends Omit<SliderProps, 'value' | 'defaultValue' | 'onChange' | 'onChangeCommitted'> {
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  onChangeCommitted?: (value: [number, number]) => void;
}

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
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

const SliderContainer = styled.div<{
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ orientation, size }) => {
    if (orientation === 'vertical') return size === 'small' ? '24px' : size === 'medium' ? '32px' : '40px';
    return '100%';
  }};
  height: ${({ orientation, size }) => {
    if (orientation === 'horizontal') return size === 'small' ? '24px' : size === 'medium' ? '32px' : '40px';
    return '200px';
  }};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: all 0.2s ease;

  &:hover {
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  }
`;

const SliderTrack = styled.div<{
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
  variant: string;
}>`
  position: relative;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  width: ${({ orientation, size }) => {
    if (orientation === 'vertical') return size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px';
    return '100%';
  }};
  height: ${({ orientation, size }) => {
    if (orientation === 'horizontal') return size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px';
    return '100%';
  }};
  transition: all 0.2s ease;
  overflow: hidden;

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
    opacity: 1;
  }
`;

const SliderFill = styled(motion.div)<{
  orientation: 'horizontal' | 'vertical';
  variant: string;
}>`
  position: absolute;
  border-radius: inherit;
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'accent': return theme.colors.accent;
      case 'gradient': return theme.colors.gradient.primary;
      default: return theme.colors.primary;
    }
  }};
  transition: all 0.2s ease;
  
  ${({ orientation }) => orientation === 'horizontal' ? `
    top: 0;
    left: 0;
    height: 100%;
  ` : `
    bottom: 0;
    left: 0;
    width: 100%;
  `}
`;

const SliderThumb = styled(motion.div)<{
  size: 'small' | 'medium' | 'large';
  variant: string;
  isDragging: boolean;
}>`
  position: absolute;
  width: ${({ size }) => size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
  height: ${({ size }) => size === 'small' ? '16px' : size === 'medium' ? '20px' : '24px'};
  background: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary': return theme.colors.primary;
      case 'secondary': return theme.colors.secondary;
      case 'accent': return theme.colors.accent;
      case 'gradient': return theme.colors.gradient.primary;
      default: return theme.colors.primary;
    }
  }};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  cursor: grab;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.2s ease;
  transform: translate(-50%, -50%);
  z-index: 2;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
  }

  ${({ isDragging }) => isDragging && `
    animation: ${pulse} 1s infinite;
  `}
`;

const ValueDisplay = styled(motion.div)<{
  size: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ size }) => size === 'small' ? '4px 8px' : size === 'medium' ? '6px 10px' : '8px 12px'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme, size }) => 
    size === 'small' ? theme.typography.fontSize.xs : 
    size === 'medium' ? theme.typography.fontSize.sm : 
    theme.typography.fontSize.base
  };
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.text};
  }
`;

const TickMark = styled.div<{
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  background: ${({ theme }) => theme.colors.textMuted};
  
  ${({ orientation, size }) => orientation === 'horizontal' ? `
    width: 1px;
    height: ${size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px'};
    top: 50%;
    transform: translate(-50%, -50%);
  ` : `
    height: 1px;
    width: ${size === 'small' ? '8px' : size === 'medium' ? '10px' : '12px'};
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const TickLabel = styled.div<{
  orientation: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
}>`
  position: absolute;
  font-size: ${({ theme, size }) => 
    size === 'small' ? theme.typography.fontSize.xs : 
    size === 'medium' ? theme.typography.fontSize.sm : 
    theme.typography.fontSize.base
  };
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
  
  ${({ orientation }) => orientation === 'horizontal' ? `
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
  ` : `
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
  `}
`;

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = min,
  onChange,
  onChangeCommitted,
  disabled = false,
  variant = 'default',
  size = 'medium',
  showValue = false,
  showTicks = false,
  marks = [],
  orientation = 'horizontal',
  className,
  style
}) => {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const [showValueDisplay, setShowValueDisplay] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const getValueFromPosition = useCallback((clientX: number, clientY: number) => {
    if (!sliderRef.current) return currentValue;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let percentage;
    
    if (orientation === 'horizontal') {
      percentage = (clientX - rect.left) / rect.width;
    } else {
      percentage = 1 - (clientY - rect.top) / rect.height;
    }
    
    percentage = Math.max(0, Math.min(1, percentage));
    const newValue = min + percentage * (max - min);
    return Math.round(newValue / step) * step;
  }, [min, max, step, orientation, currentValue]);

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    if (disabled) return;
    
    event.preventDefault();
    setIsDragging(true);
    setShowValueDisplay(true);
    
    const newValue = getValueFromPosition(event.clientX, event.clientY);
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [disabled, getValueFromPosition, isControlled, onChange]);

  useEffect(() => {
    if (!isDragging) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      const newValue = getValueFromPosition(event.clientX, event.clientY);
      
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      setShowValueDisplay(false);
      onChangeCommitted?.(currentValue);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, getValueFromPosition, isControlled, onChange, onChangeCommitted, currentValue]);

  const percentage = ((currentValue - min) / (max - min)) * 100;
  
  const thumbPosition = orientation === 'horizontal' 
    ? { left: `${percentage}%`, top: '50%' }
    : { left: '50%', bottom: `${percentage}%` };

  const fillStyle = orientation === 'horizontal'
    ? { width: `${percentage}%` }
    : { height: `${percentage}%` };

  return (
    <SliderContainer
      ref={sliderRef}
      orientation={orientation}
      size={size}
      disabled={disabled}
      className={className}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => showValue && setShowValueDisplay(true)}
      onMouseLeave={() => !isDragging && setShowValueDisplay(false)}
    >
      <SliderTrack orientation={orientation} size={size} variant={variant}>
        <SliderFill
          orientation={orientation}
          variant={variant}
          style={fillStyle}
          initial={false}
          animate={fillStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        {showTicks && marks.map((mark) => {
          const markPercentage = ((mark.value - min) / (max - min)) * 100;
          const markPosition = orientation === 'horizontal'
            ? { left: `${markPercentage}%` }
            : { bottom: `${markPercentage}%` };
          
          return (
            <React.Fragment key={mark.value}>
              <TickMark
                orientation={orientation}
                size={size}
                style={markPosition}
              />
              {mark.label && (
                <TickLabel
                  orientation={orientation}
                  size={size}
                  style={markPosition}
                >
                  {mark.label}
                </TickLabel>
              )}
            </React.Fragment>
          );
        })}
      </SliderTrack>
      
      <SliderThumb
        size={size}
        variant={variant}
        isDragging={isDragging}
        style={thumbPosition}
        initial={false}
        animate={thumbPosition}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
      >
        {(showValue || showValueDisplay) && (
          <ValueDisplay
            size={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {currentValue}
          </ValueDisplay>
        )}
      </SliderThumb>
    </SliderContainer>
  );
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = [min, max],
  onChange,
  onChangeCommitted,
  disabled = false,
  variant = 'default',
  size = 'medium',
  showValue = false,
  showTicks = false,
  marks = [],
  orientation = 'horizontal',
  className,
  style
}) => {
  const [internalValue, setInternalValue] = useState<[number, number]>(value ?? defaultValue);
  const [isDragging, setIsDragging] = useState<'start' | 'end' | null>(null);
  const [showValueDisplay, setShowValueDisplay] = useState<'start' | 'end' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const getValueFromPosition = useCallback((clientX: number, clientY: number) => {
    if (!sliderRef.current) return currentValue[0];
    
    const rect = sliderRef.current.getBoundingClientRect();
    let percentage;
    
    if (orientation === 'horizontal') {
      percentage = (clientX - rect.left) / rect.width;
    } else {
      percentage = 1 - (clientY - rect.top) / rect.height;
    }
    
    percentage = Math.max(0, Math.min(1, percentage));
    const newValue = min + percentage * (max - min);
    return Math.round(newValue / step) * step;
  }, [min, max, step, orientation, currentValue]);

  const handleThumbMouseDown = useCallback((thumb: 'start' | 'end') => (event: React.MouseEvent) => {
    if (disabled) return;
    
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(thumb);
    setShowValueDisplay(thumb);
  }, [disabled]);

  useEffect(() => {
    if (!isDragging) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      const newValue = getValueFromPosition(event.clientX, event.clientY);
      let newRange: [number, number];
      
      if (isDragging === 'start') {
        newRange = [Math.min(newValue, currentValue[1]), currentValue[1]];
      } else {
        newRange = [currentValue[0], Math.max(newValue, currentValue[0])];
      }
      
      if (!isControlled) {
        setInternalValue(newRange);
      }
      onChange?.(newRange);
    };
    
    const handleMouseUp = () => {
      setIsDragging(null);
      setShowValueDisplay(null);
      onChangeCommitted?.(currentValue);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, getValueFromPosition, isControlled, onChange, onChangeCommitted, currentValue]);

  const startPercentage = ((currentValue[0] - min) / (max - min)) * 100;
  const endPercentage = ((currentValue[1] - min) / (max - min)) * 100;
  
  const startThumbPosition = orientation === 'horizontal' 
    ? { left: `${startPercentage}%`, top: '50%' }
    : { left: '50%', bottom: `${startPercentage}%` };
    
  const endThumbPosition = orientation === 'horizontal' 
    ? { left: `${endPercentage}%`, top: '50%' }
    : { left: '50%', bottom: `${endPercentage}%` };

  const fillStyle = orientation === 'horizontal'
    ? { left: `${startPercentage}%`, width: `${endPercentage - startPercentage}%` }
    : { bottom: `${startPercentage}%`, height: `${endPercentage - startPercentage}%` };

  return (
    <SliderContainer
      ref={sliderRef}
      orientation={orientation}
      size={size}
      disabled={disabled}
      className={className}
      style={style}
      onMouseEnter={() => showValue && setShowValueDisplay('start')}
      onMouseLeave={() => !isDragging && setShowValueDisplay(null)}
    >
      <SliderTrack orientation={orientation} size={size} variant={variant}>
        <SliderFill
          orientation={orientation}
          variant={variant}
          style={fillStyle}
          initial={false}
          animate={fillStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        {showTicks && marks.map((mark) => {
          const markPercentage = ((mark.value - min) / (max - min)) * 100;
          const markPosition = orientation === 'horizontal'
            ? { left: `${markPercentage}%` }
            : { bottom: `${markPercentage}%` };
          
          return (
            <React.Fragment key={mark.value}>
              <TickMark
                orientation={orientation}
                size={size}
                style={markPosition}
              />
              {mark.label && (
                <TickLabel
                  orientation={orientation}
                  size={size}
                  style={markPosition}
                >
                  {mark.label}
                </TickLabel>
              )}
            </React.Fragment>
          );
        })}
      </SliderTrack>
      
      <SliderThumb
        size={size}
        variant={variant}
        isDragging={isDragging === 'start'}
        style={startThumbPosition}
        onMouseDown={handleThumbMouseDown('start')}
        initial={false}
        animate={startThumbPosition}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
      >
        {(showValue || showValueDisplay === 'start') && (
          <ValueDisplay
            size={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {currentValue[0]}
          </ValueDisplay>
        )}
      </SliderThumb>
      
      <SliderThumb
        size={size}
        variant={variant}
        isDragging={isDragging === 'end'}
        style={endThumbPosition}
        onMouseDown={handleThumbMouseDown('end')}
        initial={false}
        animate={endThumbPosition}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
      >
        {(showValue || showValueDisplay === 'end') && (
          <ValueDisplay
            size={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {currentValue[1]}
          </ValueDisplay>
        )}
      </SliderThumb>
    </SliderContainer>
  );
};

export default Slider;
export { Slider, RangeSlider };
export type { SliderProps, RangeSliderProps };