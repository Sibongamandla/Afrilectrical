import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';
import ScrollReveal from './ui/ScrollReveal';
import { Icon } from './ui';
import SectionHeader from './shared/SectionHeader';

// Main container with improved styling and accessibility
const MetricsSectionContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 1;
  }
`;

// Content wrapper with improved spacing
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  }
`;

// Metrics grid with improved layout
const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Metric card with improved styling and accessibility
const MetricCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

// Metric icon container with improved styling
const MetricIconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

// Metric value with improved typography
const MetricValue = styled.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Metric label with improved typography
const MetricLabel = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Metric description with improved readability
const MetricDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.8);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  flex-grow: 1;
`;

// Achievement list with improved styling
const AchievementsList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Achievement item with improved styling and accessibility
const AchievementItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

// Achievement icon container with improved styling
const AchievementIconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
`;

// Achievement content with improved styling
const AchievementContent = styled.div`
  flex: 1;
`;

// Achievement title with improved typography
const AchievementTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Achievement description with improved readability
const AchievementDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.8);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const MetricsSection: React.FC = () => {
  return (
    <MetricsSectionContainer>
      <ContentWrapper>
        <SectionHeader
          title="Our Impact in Numbers"
          description="Over the years, we've achieved significant milestones across Africa, delivering reliable and sustainable electrical engineering solutions."
        />
        
        <ScrollReveal>
          <MetricsGrid>
            <MetricCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MetricIconContainer>
                <Icon name="check-circle" size={32} color="white" />
              </MetricIconContainer>
              <MetricValue>
                <AnimatedCounter 
                  end={250} 
                  duration={2.5} 
                  suffix="+" 
                />
              </MetricValue>
              <MetricLabel>Projects Completed</MetricLabel>
              <MetricDescription>
                Successfully delivered electrical engineering projects across residential, commercial, and industrial sectors.
              </MetricDescription>
            </MetricCard>
            
            <MetricCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MetricIconContainer>
                <Icon name="location" size={32} color="white" />
              </MetricIconContainer>
              <MetricValue>
                <AnimatedCounter 
                  end={18} 
                  duration={2.5} 
                />
              </MetricValue>
              <MetricLabel>African Countries</MetricLabel>
              <MetricDescription>
                Expanding our footprint across the continent, bringing reliable electrical solutions to diverse markets.
              </MetricDescription>
            </MetricCard>
            
            <MetricCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MetricIconContainer>
                <Icon name="people" size={32} color="white" />
              </MetricIconContainer>
              <MetricValue>
                <AnimatedCounter 
                  end={45} 
                  duration={2.5} 
                />
              </MetricValue>
              <MetricLabel>Expert Engineers</MetricLabel>
              <MetricDescription>
                Our team of certified electrical engineers brings diverse expertise and local knowledge to every project.
              </MetricDescription>
            </MetricCard>
            
            <MetricCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MetricIconContainer>
                <Icon name="solar" size={32} color="white" />
              </MetricIconContainer>
              <MetricValue>
                <AnimatedCounter 
                  end={120} 
                  duration={2.5} 
                  suffix="MW" 
                />
              </MetricValue>
              <MetricLabel>Renewable Capacity</MetricLabel>
              <MetricDescription>
                Total renewable energy capacity installed and integrated across our projects, contributing to a sustainable future.
              </MetricDescription>
            </MetricCard>
          </MetricsGrid>
        </ScrollReveal>
        
        <ScrollReveal>
          <AchievementsList>
            <AchievementItem>
              <AchievementIconContainer>
                <Icon name="award" size={24} color="white" />
              </AchievementIconContainer>
              <AchievementContent>
                <AchievementTitle>ISO 9001:2015 Certified</AchievementTitle>
                <AchievementDescription>
                  Our quality management systems meet international standards, ensuring consistent delivery of high-quality services.
                </AchievementDescription>
              </AchievementContent>
            </AchievementItem>
            
            <AchievementItem>
              <AchievementIconContainer>
                <Icon name="shield" size={24} color="white" />
              </AchievementIconContainer>
              <AchievementContent>
                <AchievementTitle>Zero Serious Incidents</AchievementTitle>
                <AchievementDescription>
                  Maintaining an exemplary safety record across all our projects through rigorous safety protocols and training.
                </AchievementDescription>
              </AchievementContent>
            </AchievementItem>
            
            <AchievementItem>
              <AchievementIconContainer>
                <Icon name="growth" size={24} color="white" />
              </AchievementIconContainer>
              <AchievementContent>
                <AchievementTitle>30% Annual Growth</AchievementTitle>
                <AchievementDescription>
                  Consistent growth in project volume and complexity, reflecting our expanding capabilities and client trust.
                </AchievementDescription>
              </AchievementContent>
            </AchievementItem>
          </AchievementsList>
        </ScrollReveal>
      </ContentWrapper>
    </MetricsSectionContainer>
  );
};

export default MetricsSection;