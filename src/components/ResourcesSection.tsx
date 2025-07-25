import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import { Icon } from './ui';
import SectionHeader from './shared/SectionHeader';

// Main container with improved spacing and accessibility
const ResourcesSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
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

// Tabs container with improved styling and accessibility
const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

// Tabs navigation with improved styling and accessibility
const TabsNav = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;

// Tab button with improved styling and accessibility
const TabButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme, active }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: color 0.3s ease, border-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`;

// Tab content with improved styling
const TabContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Resource card with improved styling and accessibility
const ResourceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

// Resource image container with improved styling
const ResourceImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ResourceCard}:hover & img {
    transform: scale(1.05);
  }
`;

// Resource category with improved styling
const ResourceCategory = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  z-index: 1;
`;

// Resource content with improved styling
const ResourceContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// Resource title with improved typography
const ResourceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Resource description with improved readability
const ResourceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
`;

// Resource footer with improved styling
const ResourceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

// Resource link with improved styling and accessibility
const ResourceLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: underline;
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`;

// Resource date with improved typography
const ResourceDate = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey};
`;

// Newsletter section with improved styling
const NewsletterSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

// Newsletter title with improved typography
const NewsletterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  text-align: center;
`;

// Newsletter description with improved readability
const NewsletterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
`;

// Newsletter form with improved styling
const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

// Newsletter input with improved styling and accessibility
const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    outline: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

// Newsletter button with improved styling and accessibility
const NewsletterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

// Success message with improved styling
const SuccessMessage = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ResourcesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('guides');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, this would send the email to a backend service
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Resources data
  const resources = {
    guides: [
      {
        id: 1,
        title: 'Electrical Safety in Industrial Settings',
        description: 'A comprehensive guide to implementing electrical safety protocols in industrial environments, covering risk assessment, protective measures, and compliance with international standards.',
        category: 'Safety',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
        date: 'Apr 15, 2023',
        link: '#'
      },
      {
        id: 2,
        title: 'Renewable Energy Integration Guide',
        description: 'Learn how to effectively integrate renewable energy sources into existing electrical systems, with practical tips for solar, wind, and battery storage solutions.',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
        date: 'Mar 22, 2023',
        link: '#'
      },
      {
        id: 3,
        title: 'Power Quality Improvement Techniques',
        description: 'Explore methods to identify and resolve power quality issues in electrical systems, including harmonics mitigation, voltage regulation, and power factor correction.',
        category: 'Technical',
        image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21',
        date: 'Feb 10, 2023',
        link: '#'
      }
    ],
    case_studies: [
      {
        id: 1,
        title: 'Solar-Powered Manufacturing Facility',
        description: 'How we helped a manufacturing company in Kenya reduce energy costs by 40% through the implementation of a 1.2MW solar installation with battery backup.',
        category: 'Renewable Energy',
        image: 'https://images.unsplash.com/photo-1566093097221-ac2335b09e70',
        date: 'May 5, 2023',
        link: '#'
      },
      {
        id: 2,
        title: 'Hospital Power Reliability Upgrade',
        description: 'A case study on improving power reliability for a critical healthcare facility in Nigeria, featuring redundant systems and advanced monitoring solutions.',
        category: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
        date: 'Apr 2, 2023',
        link: '#'
      },
      {
        id: 3,
        title: 'Smart Grid Implementation for Urban Area',
        description: 'Exploring the challenges and solutions in implementing smart grid technology for a rapidly growing urban area in South Africa.',
        category: 'Smart Technology',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
        date: 'Mar 18, 2023',
        link: '#'
      }
    ],
    webinars: [
      {
        id: 1,
        title: 'Future of Microgrids in Africa',
        description: 'Join our expert panel as they discuss the potential of microgrids to address energy access challenges across rural and urban Africa.',
        category: 'Upcoming',
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c',
        date: 'Jun 20, 2023',
        link: '#'
      },
      {
        id: 2,
        title: 'Energy Efficiency in Commercial Buildings',
        description: 'Learn practical strategies for improving energy efficiency in commercial buildings through electrical system optimization and smart controls.',
        category: 'On-Demand',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        date: 'May 12, 2023',
        link: '#'
      },
      {
        id: 3,
        title: 'Electrical Safety Standards Update',
        description: 'Stay current with the latest updates to international electrical safety standards and their implications for projects in African markets.',
        category: 'On-Demand',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
        date: 'Apr 30, 2023',
        link: '#'
      }
    ]
  };

  return (
    <ResourcesSectionContainer>
      <ContentWrapper>
        <SectionHeader
          title="Resources & Insights"
          description="Access our library of guides, case studies, and webinars to stay informed about the latest developments in electrical engineering and sustainable energy solutions."
        />
        
        <TabsContainer>
          <TabsNav>
            <TabButton 
              active={activeTab === 'guides'} 
              onClick={() => handleTabChange('guides')}
              aria-selected={activeTab === 'guides'}
              role="tab"
            >
              Technical Guides
            </TabButton>
            <TabButton 
              active={activeTab === 'case_studies'} 
              onClick={() => handleTabChange('case_studies')}
              aria-selected={activeTab === 'case_studies'}
              role="tab"
            >
              Case Studies
            </TabButton>
            <TabButton 
              active={activeTab === 'webinars'} 
              onClick={() => handleTabChange('webinars')}
              aria-selected={activeTab === 'webinars'}
              role="tab"
            >
              Webinars & Events
            </TabButton>
          </TabsNav>
          
          <ScrollReveal>
            <TabContent
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              role="tabpanel"
            >
              {resources[activeTab as keyof typeof resources].map((resource) => (
                <ResourceCard key={resource.id}>
                  <ResourceImageContainer>
                    <ResourceCategory>{resource.category}</ResourceCategory>
                    <img src={resource.image} alt={resource.title} />
                  </ResourceImageContainer>
                  <ResourceContent>
                    <ResourceTitle>{resource.title}</ResourceTitle>
                    <ResourceDescription>{resource.description}</ResourceDescription>
                    <ResourceFooter>
                      <ResourceLink href={resource.link} aria-label={`Read more about ${resource.title}`}>
                        Read More
                        <Icon name="arrow-right" size={16} />
                      </ResourceLink>
                      <ResourceDate>{resource.date}</ResourceDate>
                    </ResourceFooter>
                  </ResourceContent>
                </ResourceCard>
              ))}
            </TabContent>
          </ScrollReveal>
        </TabsContainer>
        
        <ScrollReveal>
          <NewsletterSection>
            <NewsletterTitle>Stay Updated</NewsletterTitle>
            <NewsletterDescription>
              Subscribe to our newsletter to receive the latest insights, guides, and industry updates directly to your inbox.
            </NewsletterDescription>
            <NewsletterForm onSubmit={handleSubscribe}>
              <NewsletterInput 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <NewsletterButton type="submit">
                Subscribe
                <Icon name="send" size={16} color="white" />
              </NewsletterButton>
            </NewsletterForm>
            {subscribed && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Icon name="check" size={20} color="white" />
                Thank you for subscribing! You'll receive our next newsletter soon.
              </SuccessMessage>
            )}
          </NewsletterSection>
        </ScrollReveal>
      </ContentWrapper>
    </ResourcesSectionContainer>
  );
};

export default ResourcesSection;