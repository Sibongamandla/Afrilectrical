import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import { Icon } from './ui';
import SectionHeader from './shared/SectionHeader';

// Main container with improved spacing and accessibility
const WhyUsSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

// Content wrapper with improved spacing
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  }
`;

// Features grid with improved layout
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Feature card with improved styling and accessibility
const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

// Feature icon container with improved styling
const FeatureIconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

// Feature title with improved typography
const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Feature description with improved readability
const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  flex-grow: 1;
`;

// Feature list with improved accessibility
const FeatureList = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-left: ${({ theme }) => theme.spacing.lg};
  list-style-type: none;
`;

// Feature list item with improved styling and accessibility
const FeatureListItem = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  
  &:before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing.md};
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Testimonials section with improved styling
const TestimonialsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// Testimonial card with improved styling and accessibility
const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

// Quote mark with improved styling
const QuoteMark = styled.div`
  position: absolute;
  top: -20px;
  left: ${({ theme }) => theme.spacing.xl};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

// Testimonial text with improved typography
const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// Testimonial author with improved styling
const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

// Author avatar with improved styling
const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-right: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Author info with improved typography
const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Author name with improved typography
const AuthorName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Author company with improved typography
const AuthorCompany = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const WhyUsSection: React.FC = () => {
  return (
    <WhyUsSectionContainer>
      <ContentWrapper>
        <SectionHeader
          title="Why Choose Afrilectrical"
          description="We combine technical expertise, local knowledge, and sustainable practices to deliver exceptional electrical engineering solutions across Africa."
        />
        
        <ScrollReveal>
          <FeaturesGrid>
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="award" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Technical Excellence</FeatureTitle>
              <FeatureDescription>
                Our team of highly qualified engineers brings decades of combined experience in electrical engineering across diverse sectors.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>IEC and IEEE standards compliance</FeatureListItem>
                <FeatureListItem>Advanced simulation and modeling</FeatureListItem>
                <FeatureListItem>Continuous professional development</FeatureListItem>
              </FeatureList>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="map" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Local Knowledge</FeatureTitle>
              <FeatureDescription>
                We understand Africa's unique challenges and opportunities, allowing us to design solutions that work in local contexts.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Extensive experience across African markets</FeatureListItem>
                <FeatureListItem>Compliance with regional regulations</FeatureListItem>
                <FeatureListItem>Strong local partnerships and supply chains</FeatureListItem>
              </FeatureList>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="leaf" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Sustainability Focus</FeatureTitle>
              <FeatureDescription>
                We integrate environmental considerations into every project, promoting energy efficiency and renewable solutions.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Carbon footprint reduction strategies</FeatureListItem>
                <FeatureListItem>Renewable energy integration expertise</FeatureListItem>
                <FeatureListItem>Energy efficiency optimization</FeatureListItem>
              </FeatureList>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="users" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Client Partnership</FeatureTitle>
              <FeatureDescription>
                We work collaboratively with clients, ensuring clear communication and alignment throughout the project lifecycle.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Dedicated project managers</FeatureListItem>
                <FeatureListItem>Regular progress updates and reporting</FeatureListItem>
                <FeatureListItem>Post-implementation support</FeatureListItem>
              </FeatureList>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="shield" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Quality Assurance</FeatureTitle>
              <FeatureDescription>
                Our rigorous quality control processes ensure that every project meets the highest standards of safety and performance.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>ISO 9001 certified processes</FeatureListItem>
                <FeatureListItem>Comprehensive testing protocols</FeatureListItem>
                <FeatureListItem>Independent verification and validation</FeatureListItem>
              </FeatureList>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FeatureIconContainer>
                <Icon name="trending-up" size={32} color="white" />
              </FeatureIconContainer>
              <FeatureTitle>Innovation</FeatureTitle>
              <FeatureDescription>
                We stay at the forefront of technological advancements, bringing innovative solutions to complex engineering challenges.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Smart grid and IoT integration</FeatureListItem>
                <FeatureListItem>Advanced energy storage solutions</FeatureListItem>
                <FeatureListItem>Digital twin modeling and simulation</FeatureListItem>
              </FeatureList>
            </FeatureCard>
          </FeaturesGrid>
        </ScrollReveal>
        
        <TestimonialsSection>
          <SectionHeader
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what some of our clients have to say about working with Afrilectrical."
          />
          
          <ScrollReveal>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <QuoteMark>"</QuoteMark>
              <TestimonialText>
                Afrilectrical's team demonstrated exceptional technical expertise in designing our industrial power distribution system. Their understanding of local regulations and conditions in Kenya was invaluable, and they delivered the project on time and within budget. We've seen significant improvements in efficiency and reliability since implementation.
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Mwangi" />
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>David Mwangi</AuthorName>
                  <AuthorCompany>Operations Director, Nairobi Manufacturing Ltd</AuthorCompany>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <QuoteMark>"</QuoteMark>
              <TestimonialText>
                The renewable energy integration project that Afrilectrical designed for our commercial building has exceeded our expectations. Their innovative approach to combining solar power with our existing systems has reduced our energy costs by 40% while improving reliability. Their team was professional, responsive, and clearly committed to sustainable solutions.
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Amina Diallo" />
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>Amina Diallo</AuthorName>
                  <AuthorCompany>Sustainability Manager, West African Properties</AuthorCompany>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </ScrollReveal>
        </TestimonialsSection>
      </ContentWrapper>
    </WhyUsSectionContainer>
  );
};

export default WhyUsSection;