import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import AnimatedCounter from './ui/AnimatedCounter';
import Carousel, { HeroSlide } from './ui/Carousel';
import { Icon } from './ui';

// Main container with improved accessibility and responsive design
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw; /* Full viewport width */
  overflow: hidden;
  margin: 0; /* Reset all margins */
  margin-top: -60px; /* Overlap with header */
  margin-left: calc(-50vw + 50%); /* Break out of parent container */
  padding-top: 60px; /* Push content below header */
  padding-bottom: 0; /* No bottom padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: -56px;
    padding-top: 56px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: -52px;
    padding-top: 52px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: -48px;
    padding-top: 48px;
  }
`;

// Full-width carousel container
const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Full width of the HeroContainer */
  height: 100%;
  z-index: 0;
`;

// Stats container with improved layout and accessibility
const StatsContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  position: absolute;
  bottom: 8rem;
  right: 2rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    margin: 2rem auto 0;
    right: auto;
    bottom: auto;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Stat item with improved styling and accessibility
const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

// Stat value with improved typography
const StatValue = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

// Stat label with improved readability
const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
`;

// Scroll indicator with animation
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.7;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ScrollText = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const HeroSection: React.FC = () => {
  // Carousel slides with proper HeroSlide components using our custom electrical infrastructure images
  const carouselItems = [
    <HeroSlide
      key="slide1"
      subtitle="Electrical Consulting Excellence"
      title="Professional Electrical Engineering Solutions"
      description="AFRILECTRICAL Consulting Engineers, based in Pietermaritzburg, delivers professional electrical consulting services including project management, network analysis, and turnkey solutions across South Africa."
      backgroundImage="/media/images/cable_installation_sunset_powerlines.jpg"
      buttonText="Discuss Your Project"
      onButtonClick={() => window.location.href = '/contact'}
    />,
    <HeroSlide
      key="slide2"
      subtitle="Rural Electrification Specialists"
      title="Powering Communities Across South Africa"
      description="From high voltage reticulation to rural electrification projects, we bring reliable power infrastructure to communities throughout KwaZulu-Natal and beyond."
      backgroundImage="/media/images/engineer_rural_substation_mountains.jpg"
      buttonText="View Our Projects"
      onButtonClick={() => window.location.href = '/projects'}
    />,
    <HeroSlide
      key="slide3"
      subtitle="Level 1 BBBEE Contributor"
      title="Black-Owned Engineering Excellence"
      description="As a 100% black-owned consulting engineering firm and Level 1 BBBEE contributor, we combine professional expertise with transformation objectives to deliver exceptional results."
      backgroundImage="/media/images/stakeholder_meeting_substation_site.jpg"
      buttonText="Learn More"
      onButtonClick={() => window.location.href = '/about'}
      overlayImage="https://lukhozi.co.za/wp-content/uploads/2019/01/BBBEE-LOGO.png"
      overlayImageAlt="Level 1 BBBEE Contributor Badge"
    />
  ];

  return (
    <HeroContainer>
      {/* Full-width Carousel with enhanced features */}
      <CarouselContainer>
        <Carousel
          items={carouselItems}
          autoPlay={true}
          interval={6000}
          showArrows={true}
          showDots={true}
          showProgress={true}
          showPlayPause={true}
          infiniteLoop={true}
          pauseOnHover={true}
          enableDrag={true}
          transitionDuration={800}
          easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          preloadImages={true}

          accessibility={{
            role: "region",
            label: "Hero carousel showcasing AFRILECTRICAL's engineering solutions",
            announceSlideChanges: true,
            keyboardNavigation: true
          }}
          onSlideChange={(newIndex, prevIndex) => {
            // Track slide changes for analytics
            console.log(`Slide changed from ${prevIndex} to ${newIndex}`);
          }}
          onLoad={() => {
            console.log('Carousel images loaded');
          }}
          className="w-full h-full"
        />
      </CarouselContainer>

      {/* Static Stats overlay */}
      <ScrollReveal direction="up" delay={0.5} once={true}>
        <StatsContainer>
          <StatItem>
            <StatValue>
              <AnimatedCounter end={8} suffix="+" duration={1.5} />
            </StatValue>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>
              <AnimatedCounter end={5} duration={1.2} />
            </StatValue>
            <StatLabel>Service Areas</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>
              <AnimatedCounter end={3} duration={1.0} />
            </StatValue>
            <StatLabel>Office Locations</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>1</StatValue>
            <StatLabel>BBBEE Level</StatLabel>
          </StatItem>
        </StatsContainer>
      </ScrollReveal>

      {/* Scroll Indicator */}
      <ScrollIndicator
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ScrollText>Scroll</ScrollText>
        <Icon name="arrow" size={24} color="white" className="rotate-90" />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;