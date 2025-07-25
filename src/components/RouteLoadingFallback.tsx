import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 20% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient.hero};
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  margin: 0;
`;

const RouteLoadingFallback: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default RouteLoadingFallback;