import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Shimmer animation for loading bars
const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Spin animation for circular progress
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface ProgressIndicatorProps {
  value?: number; // 0-100 for determinate progress
  variant?: 'linear' | 'circular' | 'dots' | 'wave';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  indeterminate?: boolean;
  showLabel?: boolean;
  label?: string;
  thickness?: number;
  className?: string;
}

const getColorStyles = (color: string, theme: any) => {
  switch (color) {
    case 'secondary':
      return {
        primary: theme.colors.secondary,
        light: theme.colors.secondaryLight,
        dark: theme.colors.secondaryDark,
      };
    case 'accent':
      return {
        primary: theme.colors.accent,
        light: theme.colors.accentLight,
        dark: theme.colors.accentDark,
      };
    case 'success':
      return {
        primary: theme.colors.success,
        light: '#81c784',
        dark: '#388e3c',
      };
    case 'warning':
      return {
        primary: theme.colors.warning,
        light: theme.colors.accentLight,
        dark: theme.colors.accentDark,
      };
    case 'error':
      return {
        primary: theme.colors.error,
        light: '#e57373',
        dark: '#d32f2f',
      };
    default: // primary
      return {
        primary: theme.colors.primary,
        light: theme.colors.primaryLight,
        dark: theme.colors.primaryDark,
      };
  }
};

const getSizeStyles = (size: string, variant: string) => {
  if (variant === 'circular') {
    switch (size) {
      case 'small':
        return { width: '24px', height: '24px', strokeWidth: 2 };
      case 'large':
        return { width: '64px', height: '64px', strokeWidth: 4 };
      default:
        return { width: '40px', height: '40px', strokeWidth: 3 };
    }
  }
  
  switch (size) {
    case 'small':
      return { height: '4px' };
    case 'large':
      return { height: '12px' };
    default:
      return { height: '8px' };
  }
};

// Linear Progress Components
const LinearContainer = styled.div<{ $size: string }>`
  width: 100%;
  ${({ $size }) => getSizeStyles($size, 'linear')}
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  position: relative;
`;

const LinearProgress = styled(motion.div)<{ 
  $color: string; 
  $indeterminate: boolean;
  $thickness?: number;
}>`
  height: 100%;
  border-radius: inherit;
  position: relative;
  overflow: hidden;
  
  ${({ $color, theme }) => {
    const colors = getColorStyles($color, theme);
    return `background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.light} 50%, ${colors.primary} 100%);`;
  }}
  
  ${({ $indeterminate }) => $indeterminate && `
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
`;

// Circular Progress Components
const CircularContainer = styled.div<{ $size: string }>`
  ${({ $size }) => getSizeStyles($size, 'circular')}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CircularSvg = styled.svg<{ $indeterminate: boolean }>`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  
  ${({ $indeterminate }) => $indeterminate && `
    animation: ${spin} 1.5s linear infinite;
  `}
`;

const CircularTrack = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.lightGrey};
`;

const CircularProgress = styled.circle<{ $color: string }>`
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset ${({ theme }) => theme.transitions.base};
  
  ${({ $color, theme }) => {
    const colors = getColorStyles($color, theme);
    return `stroke: ${colors.primary};`;
  }}
`;

// Dots Progress Components
const DotsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
`;

const Dot = styled(motion.div)<{ $color: string; $size: string }>`
  border-radius: 50%;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'width: 6px; height: 6px;';
      case 'large':
        return 'width: 12px; height: 12px;';
      default:
        return 'width: 8px; height: 8px;';
    }
  }}
  
  ${({ $color, theme }) => {
    const colors = getColorStyles($color, theme);
    return `background: ${colors.primary};`;
  }}
`;

// Wave Progress Components
const WaveContainer = styled.div<{ $size: string }>`
  display: flex;
  gap: 2px;
  align-items: center;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'height: 20px;';
      case 'large':
        return 'height: 40px;';
      default:
        return 'height: 30px;';
    }
  }}
`;

const WaveBar = styled(motion.div)<{ $color: string; $size: string }>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'width: 3px;';
      case 'large':
        return 'width: 6px;';
      default:
        return 'width: 4px;';
    }
  }}
  
  ${({ $color, theme }) => {
    const colors = getColorStyles($color, theme);
    return `background: ${colors.primary};`;
  }}
`;

// Label Components
const ProgressLabel = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const CircularLabel = styled.div`
  position: absolute;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
`;

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value = 0,
  variant = 'linear',
  size = 'medium',
  color = 'primary',
  indeterminate = false,
  showLabel = false,
  label,
  thickness,
  className,
}) => {
  const sizeStyles = getSizeStyles(size, variant);
  const progressValue = Math.min(Math.max(value, 0), 100);

  const renderLinearProgress = () => (
    <div className={className}>
      <LinearContainer $size={size}>
        <LinearProgress
          $color={color}
          $indeterminate={indeterminate}
          $thickness={thickness}
          initial={{ width: 0 }}
          animate={{ width: indeterminate ? '100%' : `${progressValue}%` }}
          transition={{ duration: indeterminate ? 0 : 0.5, ease: 'easeOut' }}
        />
      </LinearContainer>
      {showLabel && (
        <ProgressLabel>
          {label || (indeterminate ? 'Loading...' : `${Math.round(progressValue)}%`)}
        </ProgressLabel>
      )}
    </div>
  );

  const renderCircularProgress = () => {
    const radius = (sizeStyles.width as any).replace('px', '') / 2 - (thickness ?? sizeStyles.strokeWidth ?? 3);
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = indeterminate ? circumference * 0.25 : circumference - (progressValue / 100) * circumference;

    return (
      <div className={className}>
        <CircularContainer $size={size}>
          <CircularSvg $indeterminate={indeterminate}>
            <CircularTrack
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={thickness || sizeStyles.strokeWidth}
            />
            <CircularProgress
              $color={color}
              cx="50%"
              cy="50%"
              r={radius}
              strokeWidth={thickness || sizeStyles.strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: indeterminate ? 'none' : 'stroke-dashoffset 0.5s ease-out',
              }}
            />
          </CircularSvg>
          {showLabel && (
            <CircularLabel>
              {label || (indeterminate ? '...' : `${Math.round(progressValue)}%`)}
            </CircularLabel>
          )}
        </CircularContainer>
      </div>
    );
  };

  const renderDotsProgress = () => (
    <div className={className}>
      <DotsContainer>
        {[...Array(5)].map((_, index) => (
          <Dot
            key={index}
            $color={color}
            $size={size}
            animate={{
              scale: indeterminate ? [1, 1.5, 1] : 1,
              opacity: indeterminate ? [0.3, 1, 0.3] : (index < (progressValue / 20) ? 1 : 0.3),
            }}
            transition={{
              duration: indeterminate ? 1.5 : 0.5,
              repeat: indeterminate ? Infinity : 0,
              delay: indeterminate ? index * 0.2 : 0,
            }}
          />
        ))}
      </DotsContainer>
      {showLabel && (
        <ProgressLabel>
          {label || (indeterminate ? 'Loading...' : `${Math.round(progressValue)}%`)}
        </ProgressLabel>
      )}
    </div>
  );

  const renderWaveProgress = () => (
    <div className={className}>
      <WaveContainer $size={size}>
        {[...Array(8)].map((_, index) => (
          <WaveBar
            key={index}
            $color={color}
            $size={size}
            animate={{
              height: indeterminate 
                ? ['20%', '100%', '20%']
                : `${Math.max(20, (progressValue / 100) * 100)}%`,
            }}
            transition={{
              duration: indeterminate ? 1.2 : 0.5,
              repeat: indeterminate ? Infinity : 0,
              delay: indeterminate ? index * 0.1 : 0,
              ease: 'easeInOut',
            }}
          />
        ))}
      </WaveContainer>
      {showLabel && (
        <ProgressLabel>
          {label || (indeterminate ? 'Loading...' : `${Math.round(progressValue)}%`)}
        </ProgressLabel>
      )}
    </div>
  );

  switch (variant) {
    case 'circular':
      return renderCircularProgress();
    case 'dots':
      return renderDotsProgress();
    case 'wave':
      return renderWaveProgress();
    default:
      return renderLinearProgress();
  }
};

export default ProgressIndicator;

// Export types
export type { ProgressIndicatorProps };