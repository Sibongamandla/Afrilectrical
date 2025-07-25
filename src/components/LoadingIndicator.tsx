import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.modal};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.primaryDark} 100%);
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.lg};
  
  &::before {
    content: "A";
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.typography.fontSize.xxl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    font-family: ${props => props.theme.typography.fontFamily.heading};
  }
`;

const LoadingText = styled.h2`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.heading};
  margin-bottom: ${props => props.theme.spacing.xs};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingSubtext = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0;
`;

const ProgressSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${props => props.theme.colors.borderLight};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingIndicator: React.FC = () => {
  return (
    <LoadingContainer>
      <LogoContainer>
        <CompanyLogo />
        <LoadingText>AfriLectrical</LoadingText>
        <LoadingSubtext>Powering Africa's Future</LoadingSubtext>
      </LogoContainer>
      <ProgressSpinner />
    </LoadingContainer>
  );
};

export default LoadingIndicator;