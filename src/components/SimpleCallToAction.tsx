import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 140px 0;
  background: ${({ theme }) => theme.colors.backgroundSoft};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: -0.02em;
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;  
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  min-width: 160px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(227, 30, 36, 0.2);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  min-width: 160px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
    border-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.heading};
    transform: translateY(-2px);
  }
`;

const SimpleCallToAction: React.FC = memo(() => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            Ready to Start Your Project?
          </Title>
          <Description variants={itemVariants}>
            Let's discuss how we can bring your electrical engineering vision to life with our expertise and innovative solutions.
          </Description>
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton to="/contact">
              Get Started
            </PrimaryButton>
            <SecondaryButton to="/portfolio">
              View Portfolio
            </SecondaryButton>
          </ButtonGroup>
        </motion.div>
      </Container>
    </SectionContainer>
  );
});

SimpleCallToAction.displayName = 'SimpleCallToAction';

export default SimpleCallToAction;