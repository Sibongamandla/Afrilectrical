import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Icon from './Icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  variant?: 'default' | 'outlined' | 'minimal' | 'rounded' | 'pills';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showPageInfo?: boolean;
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface PageInfoProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  itemsPerPage?: number;
  variant?: 'simple' | 'detailed';
  size?: 'small' | 'medium' | 'large';
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
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

const PaginationContainer = styled.div<{
  variant: string;
  size: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ variant, size }) => {
    if (variant === 'minimal') return '2px';
    switch (size) {
      case 'small': return '4px';
      case 'large': return '8px';
      default: return '6px';
    }
  }};
  flex-wrap: wrap;
`;

const PaginationButton = styled(motion.button)<{
  variant: string;
  size: string;
  color: string;
  isActive?: boolean;
  isDisabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => {
    switch (size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'small': return '0 8px';
      case 'large': return '0 16px';
      default: return '0 12px';
    }
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
  border: ${({ theme, variant, color, isActive }) => {
    if (variant === 'outlined' || (variant === 'default' && !isActive)) {
      const borderColor = isActive
        ? theme.colors.primary
        : theme.colors.border;
      return `1px solid ${borderColor}`;
    }
    return 'none';
  }};
  border-radius: ${({ theme, variant }) => {
    switch (variant) {
      case 'rounded': return theme.borderRadius.round;
      case 'pills': return theme.borderRadius.round;
      case 'minimal': return '0';
      default: return theme.borderRadius.md;
    }
  }};
  background: ${({ theme, variant, color, isActive, isDisabled }) => {
    if (isDisabled) return theme.colors.lightGrey;
    if (isActive) {
      switch (variant) {
        case 'outlined':
        case 'minimal':
          return theme.colors.primaryLight;
        default:
          return theme.colors.primary;
      }
    }
    switch (variant) {
      case 'minimal': return 'transparent';
      default: return theme.colors.white;
    }
  }};
  color: ${({ theme, variant, color, isActive, isDisabled }) => {
    if (isDisabled) return theme.colors.textMuted;
    if (isActive) {
      switch (variant) {
        case 'outlined':
        case 'minimal':
          return theme.colors.primary;
        default:
          return theme.colors.white;
      }
    }
    return theme.colors.text;
  }};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  user-select: none;
  
  &:hover {
    ${({ theme, variant, color, isActive, isDisabled }) => {
      if (isDisabled) return '';
      if (isActive) {
        switch (variant) {
          case 'outlined':
          case 'minimal':
            return `
              background: ${theme.colors.primaryLight};
              border-color: ${theme.colors.primary};
            `;
          default:
            return `
              background: ${theme.colors.primary};
              transform: translateY(-1px);
              box-shadow: ${theme.shadows.md};
            `;
        }
      } else {
        switch (variant) {
          case 'minimal':
            return `
              background: ${theme.colors.lightGrey};
              color: ${theme.colors.text};
            `;
          default:
            return `
              background: ${theme.colors.lightGrey};
              border-color: ${theme.colors.border};
              transform: translateY(-1px);
              box-shadow: ${theme.shadows.sm};
            `;
        }
      }
    }}
  }
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme, color, isDisabled }) => 
      isDisabled ? 'none' : `0 0 0 2px ${theme.colors.primary}20`
    };
  }
  
  &:active {
    transform: ${({ isDisabled }) => isDisabled ? 'none' : 'translateY(0) scale(0.98)'};
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
    border-radius: inherit;
    animation: ${shimmer} 2s infinite;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:hover::before {
    opacity: ${({ isActive, variant }) => {
      if (variant === 'default' && isActive) return 1;
      return 0;
    }};
  }
`;

const PaginationEllipsis = styled.span<{
  size: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => {
    switch (size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.sm;
      case 'large': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  color: ${({ theme }) => theme.colors.textMuted};
  user-select: none;
`;

const PageInfo = styled.div<{
  size: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 16px;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.typography.fontSize.xs;
      case 'large': return theme.typography.fontSize.base;
      default: return theme.typography.fontSize.sm;
    }
  }};
  color: ${({ theme }) => theme.colors.text};}]}}
  white-space: nowrap;
`;

const PageInfoComponent: React.FC<PageInfoProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  variant = 'simple',
  size = 'medium'
}) => {
  if (variant === 'detailed' && totalItems && itemsPerPage) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    return (
      <PageInfo size={size}>
        Showing {startItem}-{endItem} of {totalItems} items
      </PageInfo>
    );
  }
  
  return (
    <PageInfo size={size}>
      Page {currentPage} of {totalPages}
    </PageInfo>
  );
};

const usePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  boundaryCount = 1
}: {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  boundaryCount?: number;
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => start + idx);
  };

  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages
  );

  const siblingsStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      currentPage + siblingCount,
      boundaryCount + siblingCount * 2 + 2
    ),
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
  );

  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < totalPages - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < totalPages - boundaryCount - 1
      ? ['end-ellipsis']
      : totalPages - boundaryCount > boundaryCount
      ? [totalPages - boundaryCount]
      : []),
    ...endPages
  ];

  return itemList.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  showFirstLast = true,
  showPrevNext = true,
  showPageInfo = false,
  disabled = false,
  hideOnSinglePage = false,
  className,
  style
}) => {
  const items = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount
  });

  if (hideOnSinglePage && totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const canGoPrevious = currentPage > 1 && !disabled;
  const canGoNext = currentPage < totalPages && !disabled;

  return (
    <PaginationContainer
      variant={variant}
      size={size}
      className={className}
      style={style}
    >
      {showFirstLast && (
        <PaginationButton
          variant={variant}
          size={size}
          color={color}
          isDisabled={!canGoPrevious}
          onClick={() => handlePageChange(1)}
          whileHover={canGoPrevious ? { scale: 1.05 } : {}}
          whileTap={canGoPrevious ? { scale: 0.95 } : {}}
          title="First page"
        >
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
            style={{ transform: 'rotate(180deg) translateX(2px)' }}
          />
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
            style={{ transform: 'rotate(180deg) translateX(-2px)' }}
          />
        </PaginationButton>
      )}

      {showPrevNext && (
        <PaginationButton
          variant={variant}
          size={size}
          color={color}
          isDisabled={!canGoPrevious}
          onClick={() => handlePageChange(currentPage - 1)}
          whileHover={canGoPrevious ? { scale: 1.05 } : {}}
          whileTap={canGoPrevious ? { scale: 0.95 } : {}}
          title="Previous page"
        >
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
            style={{ transform: 'rotate(180deg)' }}
          />
        </PaginationButton>
      )}

      {items.map((item, index) => {
        if (typeof item === 'number') {
          const isActive = item === currentPage;
          return (
            <PaginationButton
              key={item}
              variant={variant}
              size={size}
              color={color}
              isActive={isActive}
              isDisabled={disabled}
              onClick={() => handlePageChange(item)}
              whileHover={!disabled ? { scale: 1.05 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              title={`Page ${item}`}
            >
              {item}
            </PaginationButton>
          );
        }

        return (
          <PaginationEllipsis
            key={`ellipsis-${index}`}
            size={size}
          >
            •••
          </PaginationEllipsis>
        );
      })}

      {showPrevNext && (
        <PaginationButton
          variant={variant}
          size={size}
          color={color}
          isDisabled={!canGoNext}
          onClick={() => handlePageChange(currentPage + 1)}
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          title="Next page"
        >
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
          />
        </PaginationButton>
      )}

      {showFirstLast && (
        <PaginationButton
          variant={variant}
          size={size}
          color={color}
          isDisabled={!canGoNext}
          onClick={() => handlePageChange(totalPages)}
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          title="Last page"
        >
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
            style={{ transform: 'translateX(-2px)' }}
          />
          <Icon
            name="arrow"
            size={size === 'small' ? 14 : size === 'large' ? 18 : 16}
            style={{ transform: 'translateX(2px)' }}
          />
        </PaginationButton>
      )}

      {showPageInfo && (
        <PageInfoComponent
          currentPage={currentPage}
          totalPages={totalPages}
          size={size}
        />
      )}
    </PaginationContainer>
  );
};

export default Pagination;
export { Pagination, PageInfoComponent };
export type { PaginationProps, PageInfoProps };