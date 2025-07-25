import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';

// Slide in animation
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Progress bar animation
const progressAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  showProgress?: boolean;
}

interface ToastContainerProps {
  position: string;
}

interface ToastItemProps {
  type: string;
  showProgress: boolean;
  duration: number;
}

const getPositionStyles = (position: string) => {
  switch (position) {
    case 'top-left':
      return { top: '1rem', left: '1rem' };
    case 'bottom-right':
      return { bottom: '1rem', right: '1rem' };
    case 'bottom-left':
      return { bottom: '1rem', left: '1rem' };
    default: // top-right
      return { top: '1rem', right: '1rem' };
  }
};

const getTypeStyles = (type: string, theme: any) => {
  switch (type) {
    case 'success':
      return {
        background: `linear-gradient(135deg, ${theme.colors.success}15 0%, ${theme.colors.success}25 100%)`,
        border: `1px solid ${theme.colors.success}`,
        iconColor: theme.colors.success,
        icon: 'check-circle',
      };
    case 'error':
      return {
        background: `linear-gradient(135deg, ${theme.colors.error}15 0%, ${theme.colors.error}25 100%)`,
        border: `1px solid ${theme.colors.error}`,
        iconColor: theme.colors.error,
        icon: 'x-circle',
      };
    case 'warning':
      return {
        background: `linear-gradient(135deg, ${theme.colors.warning}15 0%, ${theme.colors.warning}25 100%)`,
        border: `1px solid ${theme.colors.warning}`,
        iconColor: theme.colors.warning,
        icon: 'alert-triangle',
      };
    default: // info
      return {
        background: `linear-gradient(135deg, ${theme.colors.info}15 0%, ${theme.colors.info}25 100%)`,
        border: `1px solid ${theme.colors.info}`,
        iconColor: theme.colors.info,
        icon: 'info',
      };
  }
};

const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  ${({ position }) => getPositionStyles(position)}
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 400px;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100vw - 2rem);
    left: 1rem !important;
    right: 1rem !important;
  }
`;

const ToastItem = styled(motion.div)<ToastItemProps>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  
  ${({ type, theme }) => {
    const styles = getTypeStyles(type, theme);
    return `
      background: ${styles.background};
      border: ${styles.border};
    `;
  }}
  
  &:hover {
    transform: translateX(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ToastHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ToastIcon = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  flex-shrink: 0;
  margin-top: 2px;
`;

const ToastContent = styled.div`
  flex: 1;
`;

const ToastTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const ToastMessage = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

const ProgressBar = styled.div<{ type: string; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg};
  
  ${({ type, theme }) => {
    const styles = getTypeStyles(type, theme);
    return `background: ${styles.iconColor};`;
  }}
  
  animation: ${progressAnimation} ${({ duration }) => duration}ms linear;
`;

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  position = 'top-right',
  showProgress = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const typeStyles = getTypeStyles(type, { colors: {} } as any);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <ToastItem
          type={type}
          showProgress={showProgress}
          duration={duration}
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ToastHeader>
            <ToastIcon color={typeStyles.iconColor}>
              <Icon name={typeStyles.icon} size={20} />
            </ToastIcon>
            <ToastContent>
              <ToastTitle>{title}</ToastTitle>
              {message && <ToastMessage>{message}</ToastMessage>}
            </ToastContent>
            <CloseButton onClick={handleClose}>
              <Icon name="x" size={16} />
            </CloseButton>
          </ToastHeader>
          {showProgress && (
            <ProgressBar type={type} duration={duration} />
          )}
        </ToastItem>
      )}
    </AnimatePresence>
  );
};

// Toast Manager Component
export interface ToastManagerProps {
  toasts: ToastProps[];
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const ToastManager: React.FC<ToastManagerProps> = ({
  toasts,
  position = 'top-right',
}) => {
  if (toasts.length === 0) return null;

  return (
    <ToastContainer position={position}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} position={position} />
        ))}
      </AnimatePresence>
    </ToastContainer>
  );
};

// Hook for managing toasts
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      ...toast,
      id,
      onClose: removeToast,
    };
    setToasts((prev) => [...prev, newToast]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const clearAllToasts = () => {
    setToasts([]);
  };

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
  };
};

export default Toast;