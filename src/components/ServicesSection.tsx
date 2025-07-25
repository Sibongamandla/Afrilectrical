import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './ui';

const SectionContainer = styled.section`
  padding: 140px 0;
  background: ${({ theme }) => theme.colors.backgroundDark};
  
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: transparent;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primaryAlpha};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const services = [
  {
    id: 1,
    icon: 'zap',
    title: 'Electrical Consulting',
    description: 'Comprehensive electrical engineering services including conceptual designs, basic engineering, turnkey solutions, network analysis, and rural electrification projects.'
  },
  {
    id: 2,
    icon: 'cpu',
    title: 'Civil & Structural Engineering',
    description: 'Roads transportation engineering, water and waste-water bulk services, construction project management, and structural engineering solutions.'
  },
  {
    id: 3,
    icon: 'settings',
    title: 'Mechanical Engineering',
    description: 'HVAC systems, fire and security designs and installation, steel fabrication, and railway risk assessments and incident reports.'
  },
  {
    id: 4,
    icon: 'map',
    title: 'Town & Regional Planning',
    description: 'Spatial development frameworks, land use schemes, rezoning, integrated development plans, and comprehensive sector planning.'
  },
  {
    id: 5,
    icon: 'shield',
    title: 'Security Design & Installation',
    description: 'Complete security solutions including NVR systems, IP cameras, access control, intruder alarms, and fire suppression systems.'
  }
];

const ServicesSection: React.FC = memo(() => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <Title>Our Services</Title>
          <Subtitle>
            Engineering excellence across all aspects of electrical infrastructure
          </Subtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>
                <Icon name={service.icon as any} size={28} color="white" />
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </SectionContainer>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;