import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from './ui/OptimizedImage';
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

// Slide container for carousel items
const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// Background image for slides
const SlideBackground = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`;

// Video background with overlay
const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



// Content container with improved spacing and accessibility
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;



// Hero title with improved typography and accessibility
const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 20ch;
  color: ${({ theme }) => theme.colors.white};
`;

// Hero subtitle with improved readability
const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 60ch;
  opacity: 0.9;
`;

// CTA button with improved accessibility and hover states
const CtaButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: fit-content;
  
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
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
  
  // Video fallback for mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carousel slides with proper HeroSlide components using our custom electrical infrastructure images
  const carouselItems = [
    <HeroSlide
      key="slide1"
      subtitle="Electrical Consulting Excellence"
      title="Professional Electrical Engineering Solutions"
      description="AFRILECTRICAL Consulting Engineers, based in Pietermaritzburg, delivers professional electrical consulting services including project management, network analysis, and turnkey solutions across South Africa."
      backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
      buttonText="Discuss Your Project"
      onButtonClick={() => window.location.href = '/contact'}
    />,
    <HeroSlide
      key="slide2"
      subtitle="Civil & Structural Engineering"
      title="Comprehensive Infrastructure Development"
      description="From roads and transportation engineering to water and waste-water bulk services, we provide complete civil and structural engineering solutions for sustainable development."
      backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276"
      buttonText="Explore Solutions"
      onButtonClick={() => window.location.href = '/solutions'}
    />,
    <HeroSlide
      key="slide3"
      subtitle="Level 1 BBBEE Contributor"
      title="Black-Owned Engineering Excellence"
      description="As a 100% black-owned consulting engineering firm and Level 1 BBBEE contributor, we combine professional expertise with transformation objectives to deliver exceptional results."
      backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      buttonText="Learn More"
      onButtonClick={() => window.location.href = '/about'}
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