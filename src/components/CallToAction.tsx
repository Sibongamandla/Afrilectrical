import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './ui';

// Main container with full width
const CallToActionContainer = styled.section`
  width: 100vw; /* Full viewport width */
  margin-left: calc(-50vw + 50%); /* Break out of parent container */
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  overflow: hidden;
`;

// Content wrapper with improved spacing
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  }
`;

// Title with improved typography
const Title = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  max-width: 60%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

// Contact button with improved styling and accessibility
const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-decoration: none;
  transition: color 0.3s ease;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
`;

// Arrow icon with improved styling
const ArrowContainer = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  ${ContactButton}:hover & {
    transform: translateX(4px);
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

const CallToAction: React.FC = () => {
  return (
    <CallToActionContainer>
      <Container>
        <Title>Ready to start your next engineering project?</Title>
        <ContactButton 
          href="mailto:info@afrilectrical.co.za"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Contact us via email"
        >
          <ArrowContainer>
            <Icon name="arrow-right" size={24} color="white" />
          </ArrowContainer>
          <span>Contact us today</span>
        </ContactButton>
      </Container>
    </CallToActionContainer>
  );
};

export default CallToAction;