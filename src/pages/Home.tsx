import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import SimpleCallToAction from '../components/SimpleCallToAction';
import SimpleFooter from '../components/SimpleFooter';
import MissionVisionSection from '../components/MissionVisionSection';
import ScrollReveal from '../components/ui/ScrollReveal';

// Minimalistic container with clean design
const HomeContainer = styled(motion.main)`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;


const Home: React.FC = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <HomeContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. Hero Section - Primary Impact */}
      <HeroSection />
      
      {/* 2. Client Trust - Quick Social Proof */}
      <ScrollReveal direction="up" delay={0.1} once={true}>
        <ClientsSection />
      </ScrollReveal>
      
      {/* 3. Core Services - Clean & Simple */}
      <ScrollReveal direction="up" delay={0.1} once={true}>
        <ServicesSection />
      </ScrollReveal>
      
      {/* 4. Featured Projects - Minimal Grid */}
      <ScrollReveal direction="up" delay={0.1} once={true}>
        <ProjectsSection />
      </ScrollReveal>
      
      {/* 5. Mission, Vision & Values */}
      <ScrollReveal direction="up" delay={0.1} once={true}>
        <MissionVisionSection />
      </ScrollReveal>
      
      {/* 6. Simple Call to Action */}
      <ScrollReveal direction="up" delay={0.1} once={true}>
        <SimpleCallToAction />
      </ScrollReveal>
      
      {/* 7. Clean Footer */}
      <SimpleFooter />
    </HomeContainer>
  );
};

export default Home;