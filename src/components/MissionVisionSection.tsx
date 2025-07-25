import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const SectionContainer = styled.section`
  padding: 140px 0;
  background: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 60px;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContentCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: transparent;
  }
`;

const ContentTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContentText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ValuesContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray50};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
`;

const ValuesTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ValuesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ValueItem = styled.span`
  background: ${({ theme }) => theme.colors.primaryAlpha};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const MissionVisionSection: React.FC = memo(() => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    'Quality', 'Safety', 'Integrity', 'Collaboration', 
    'Sustainability', 'Innovation', 'Client Focus', 
    'Professionalism', 'Community Engagement'
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <Title>Our Foundation</Title>
          <Subtitle>
            Guided by our mission, vision, and core values as we deliver exceptional engineering solutions
          </Subtitle>
        </SectionHeader>
        
        <ContentGrid>
          <ContentCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContentTitle>
              <Icon name="safety" size={24} style={{ marginRight: '8px' }} /> Mission
            </ContentTitle>
            <ContentText>
              Our mission is to offer inventive and lasting solutions in the Electrical, 
              Mechanical & Civil and Construction Industry. Through our consulting service, 
              we strive to establish enduring partnerships by comprehending our clients' 
              objectives, providing insightful guidance, and executing projects with the 
              utmost professionalism.
            </ContentText>
          </ContentCard>

          <ContentCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContentTitle>
              <Icon name="growth" size={24} style={{ marginRight: '8px' }} /> Vision
            </ContentTitle>
            <ContentText>
              Our vision is to pioneer the Electrical, Mechanical & Civil and Construction 
              Industry by delivering innovative and sustainable solutions, forging enduring 
              partnerships through understanding clients' goals, offering guidance, and 
              executing projects with professionalism and excellence.
            </ContentText>
          </ContentCard>
        </ContentGrid>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ValuesContainer>
            <ValuesTitle>Our Core Values</ValuesTitle>
            <ValuesList>
              {values.map((value, index) => (
                <ValueItem key={index}>{value}</ValueItem>
              ))}
            </ValuesList>
          </ValuesContainer>
        </motion.div>
      </Container>
    </SectionContainer>
  );
});

MissionVisionSection.displayName = 'MissionVisionSection';

export default MissionVisionSection;