import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Icon } from './Icon';

// Backdrop blur animation
const backdropBlur = keyframes`
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(10px);
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'xl' | 'fullscreen';
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  zIndex?: number;
}

interface ModalContentProps {
  $size: string;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'small':
      return {
        width: '400px',
        maxWidth: '90vw',
        maxHeight: '80vh',
      };
    case 'large':
      return {
        width: '800px',
        maxWidth: '90vw',
        maxHeight: '90vh',
      };
    case 'xl':
      return {
        width: '1200px',
        maxWidth: '95vw',
        maxHeight: '95vh',
      };
    case 'fullscreen':
      return {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        borderRadius: '0',
      };
    default: // medium
      return {
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '85vh',
      };
  }
};

const ModalOverlay = styled(motion.div)<{ $zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ $zIndex }) => $zIndex};
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
    align-items: flex-end;
  }
`;

const ModalContent = styled(motion.div)<ModalContentProps>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme, $size }) => 
    $size === 'fullscreen' ? '0' : theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  
  ${({ $size }) => {
    const styles = getSizeStyles($size);
    return `
      width: ${styles.width};
      max-width: ${styles.maxWidth};
      max-height: ${styles.maxHeight};
      ${styles.height ? `height: ${styles.height};` : ''}
      ${styles.borderRadius ? `border-radius: ${styles.borderRadius};` : ''}
    `;
  }}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-height: 90vh;
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.border},
      transparent
    );
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
    
    &:hover {
      background: ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundDark};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    
    button {
      width: 100%;
    }
  }
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  zIndex = 1300,
}) => {
  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          $zIndex={zIndex}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ModalContent
            $size={size}
            className={className}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              duration: 0.3 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {(title || showCloseButton) && (
              <ModalHeader>
                {title && <ModalTitle>{title}</ModalTitle>}
                {showCloseButton && (
                  <CloseButton
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close modal"
                  >
                    <Icon name="x" size={20} />
                  </CloseButton>
                )}
              </ModalHeader>
            )}
            
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );

  // Render modal in portal
  return createPortal(modalContent, document.body);
};

// Modal Footer Component
export const ModalFooterComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ModalFooter>{children}</ModalFooter>
);

// Hook for modal state management
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);
  const toggleModal = React.useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default Modal;

// Export types
export type { ModalProps };