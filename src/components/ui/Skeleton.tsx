import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface SkeletonGroupProps {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface SkeletonCardProps {
  avatar?: boolean;
  title?: boolean;
  subtitle?: boolean;
  content?: number; // number of content lines
  actions?: boolean;
  image?: boolean;
  imageHeight?: string | number;
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

interface SkeletonListProps {
  items?: number;
  avatar?: boolean;
  title?: boolean;
  subtitle?: boolean;
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
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

const SkeletonBase = styled(motion.div)<{
  width?: string | number;
  height?: string | number;
  variant: string;
  animation: string;
}>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.border};
  width: ${({ width }) => {
    if (typeof width === 'number') return `${width}px`;
    return width || '100%';
  }};
  height: ${({ height, variant }) => {
    if (height) {
      if (typeof height === 'number') return `${height}px`;
      return height;
    }
    switch (variant) {
      case 'text': return '1em';
      case 'circular': return '40px';
      default: return '20px';
    }
  }};
  border-radius: ${({ theme, variant, width, height }) => {
    switch (variant) {
      case 'circular': return theme.borderRadius.round;
      case 'rounded': return theme.borderRadius.lg;
      case 'text': return theme.borderRadius.sm;
      default: return theme.borderRadius.md;
    }
  }};
  
  ${({ animation }) => {
    switch (animation) {
      case 'pulse':
        return `animation: ${pulse} 1.5s ease-in-out infinite;`;
      case 'wave':
        return `
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            animation: ${wave} 1.6s linear infinite;
          }
        `;
      case 'shimmer':
        return `
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200px 100%;
          animation: ${shimmer} 1.2s ease-in-out infinite;
        `;
      default:
        return '';
    }
  }}
  
  /* Ensure circular skeletons maintain aspect ratio */
  ${({ variant, width, height }) => {
    if (variant === 'circular' && !height && width) {
      const size = typeof width === 'number' ? `${width}px` : width;
      return `
        width: ${size};
        height: ${size};
      `;
    }
    return '';
  }}
`;

const SkeletonTextContainer = styled.div<{
  lines: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonTextLine = styled(SkeletonBase)<{
  isLast: boolean;
}>`
  width: ${({ isLast }) => isLast ? '75%' : '100%'};
  height: 1em;
`;

const SkeletonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.white};
`;

const SkeletonCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkeletonCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonCardActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const SkeletonListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkeletonListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const SkeletonListContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1,
  className,
  style
}) => {
  if (variant === 'text' && lines > 1) {
    return (
      <SkeletonTextContainer
        lines={lines}
        className={className}
        style={style}
      >
        {Array.from({ length: lines }, (_, index) => (
          <SkeletonTextLine
            key={index}
            width={width}
            height={height}
            variant={variant}
            animation={animation}
            isLast={index === lines - 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </SkeletonTextContainer>
    );
  }

  return (
    <SkeletonBase
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
  children,
  loading = true,
  className,
  style
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  avatar = true,
  title = true,
  subtitle = true,
  content = 3,
  actions = true,
  image = false,
  imageHeight = 200,
  animation = 'pulse',
  className,
  style
}) => {
  return (
    <SkeletonCardContainer className={className} style={style}>
      {image && (
        <Skeleton
          width="100%"
          height={imageHeight}
          variant="rectangular"
          animation={animation}
        />
      )}
      
      {(avatar || title || subtitle) && (
        <SkeletonCardHeader>
          {avatar && (
            <Skeleton
              width={40}
              height={40}
              variant="circular"
              animation={animation}
            />
          )}
          
          <div style={{ flex: 1 }}>
            {title && (
              <Skeleton
                width="60%"
                height={20}
                variant="text"
                animation={animation}
                style={{ marginBottom: subtitle ? 6 : 0 }}
              />
            )}
            
            {subtitle && (
              <Skeleton
                width="40%"
                height={16}
                variant="text"
                animation={animation}
              />
            )}
          </div>
        </SkeletonCardHeader>
      )}
      
      {content > 0 && (
        <SkeletonCardContent>
          {Array.from({ length: content }, (_, index) => (
            <Skeleton
              key={index}
              width={index === content - 1 ? '75%' : '100%'}
              height={16}
              variant="text"
              animation={animation}
            />
          ))}
        </SkeletonCardContent>
      )}
      
      {actions && (
        <SkeletonCardActions>
          <Skeleton
            width={80}
            height={32}
            variant="rounded"
            animation={animation}
          />
          <Skeleton
            width={80}
            height={32}
            variant="rounded"
            animation={animation}
          />
        </SkeletonCardActions>
      )}
    </SkeletonCardContainer>
  );
};

const SkeletonList: React.FC<SkeletonListProps> = ({
  items = 5,
  avatar = true,
  title = true,
  subtitle = true,
  animation = 'pulse',
  className,
  style
}) => {
  return (
    <SkeletonListContainer className={className} style={style}>
      {Array.from({ length: items }, (_, index) => (
        <SkeletonListItem key={index}>
          {avatar && (
            <Skeleton
              width={40}
              height={40}
              variant="circular"
              animation={animation}
            />
          )}
          
          <SkeletonListContent>
            {title && (
              <Skeleton
                width="70%"
                height={18}
                variant="text"
                animation={animation}
              />
            )}
            
            {subtitle && (
              <Skeleton
                width="50%"
                height={14}
                variant="text"
                animation={animation}
              />
            )}
          </SkeletonListContent>
        </SkeletonListItem>
      ))}
    </SkeletonListContainer>
  );
};

// Preset skeleton components for common use cases
const SkeletonButton: React.FC<{ animation?: 'pulse' | 'wave' | 'shimmer' | 'none' }> = ({ animation = 'pulse' }) => (
  <Skeleton width={100} height={40} variant="rounded" animation={animation} />
);

const SkeletonAvatar: React.FC<{ size?: number; animation?: 'pulse' | 'wave' | 'shimmer' | 'none' }> = ({ 
  size = 40, 
  animation = 'pulse' 
}) => (
  <Skeleton width={size} height={size} variant="circular" animation={animation} />
);

const SkeletonImage: React.FC<{ 
  width?: string | number; 
  height?: string | number; 
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none' 
}> = ({ 
  width = '100%', 
  height = 200, 
  animation = 'pulse' 
}) => (
  <Skeleton width={width} height={height} variant="rectangular" animation={animation} />
);

const SkeletonText: React.FC<{ 
  lines?: number; 
  animation?: 'pulse' | 'wave' | 'shimmer' | 'none' 
}> = ({ 
  lines = 3, 
  animation = 'pulse' 
}) => (
  <Skeleton variant="text" lines={lines} animation={animation} />
);

export default Skeleton;
export {
  Skeleton,
  SkeletonGroup,
  SkeletonCard,
  SkeletonList,
  SkeletonButton,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonText
};
export type {
  SkeletonProps,
  SkeletonGroupProps,
  SkeletonCardProps,
  SkeletonListProps
};