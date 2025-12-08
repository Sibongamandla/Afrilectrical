import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from './ui';

// Services data matching the Services page
const services = [
  {
    id: 1,
    icon: 'lightning',
    title: 'Electrical Consulting',
    description: 'Power system design, substation engineering, network analysis, and load studies for residential, commercial, and industrial projects.',
    video: '/media/images/substation_switchgear_inspection.mp4',
    poster: '/media/images/engineers_inspecting_siemens_switchgear.jpg'
  },
  {
    id: 2,
    icon: 'building',
    title: 'Civil & Structural',
    description: 'Structural analysis, foundation design, site development, and construction supervision for infrastructure projects.',
    video: '/media/images/crane_lifting_construction_materials.mp4',
    poster: '/media/images/construction_site_sunset_cranes.jpg'
  },
  {
    id: 3,
    icon: 'gear',
    title: 'Mechanical Engineering',
    description: 'HVAC systems, mechanical installations, equipment specification, and system optimization for various building types.',
    video: '/media/images/site_inspection_workers_documents.mp4',
    poster: '/media/images/engineer_control_panel_inspection.jpg'
  },
  {
    id: 4,
    icon: 'globe',
    title: 'Town & Regional Planning',
    description: 'Land use planning, urban development, environmental assessments, and municipal infrastructure planning.',
    video: '/media/images/aerial_construction_site_view.mp4',
    poster: '/media/images/rural_electrification_powerlines_wide.jpg'
  },
  {
    id: 5,
    icon: 'shield',
    title: 'Security Systems',
    description: 'Access control, CCTV surveillance, perimeter security, and integrated security system design and installation.',
    video: '/media/images/stadium_lighting_dusk_light_trails.mp4',
    poster: '/media/images/switchgear_room_installation_inspection.jpg'
  }
];

const SectionContainer = styled.section`
  padding: 0;
  background: #111827;
  position: relative;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  max-height: 900px;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: 500px;
  }
`;

const VideoBackground = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(17, 24, 39, 0.95) 0%,
    rgba(17, 24, 39, 0.7) 50%,
    rgba(17, 24, 39, 0.4) 100%
  );

  @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      rgba(17, 24, 39, 0.6) 0%,
      rgba(17, 24, 39, 0.9) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 24px;
    justify-content: flex-end;
    padding-bottom: 120px;
  }
`;

const SectionLabel = styled(motion.div)`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  max-width: 500px;
`;

const Description = styled(motion.p)`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const ServiceTab = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${({ $isActive }) => $isActive ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  border: 1px solid ${({ $isActive }) => $isActive ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 100px;
  color: ${({ $isActive }) => $isActive ? '#111827' : 'white'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${({ $isActive }) => $isActive ? 'white' : 'rgba(255, 255, 255, 0.2)'};
    border-color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 13px;
  }
`;

const ViewAllButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: white;
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: white;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: baseline;
  gap: 4px;
  color: white;
  font-family: monospace;

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
  }
`;

const CurrentNumber = styled.span`
  font-size: 48px;
  font-weight: 700;
`;

const TotalNumber = styled.span`
  font-size: 18px;
  opacity: 0.5;
`;

const ServicesSection: React.FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  // Auto-rotate every 6 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer>
      <VideoContainer>
        <AnimatePresence mode="wait">
          <VideoBackground
            key={activeService.id}
            autoPlay
            muted
            loop
            playsInline
            poster={activeService.poster}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <source src={activeService.video} type="video/mp4" />
          </VideoBackground>
        </AnimatePresence>

        <Overlay />

        <ContentWrapper>
          <SectionLabel
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionLabel>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Title>{activeService.title}</Title>
              <Description>{activeService.description}</Description>
            </motion.div>
          </AnimatePresence>

          <ServiceNav>
            {services.map((service, index) => (
              <ServiceTab
                key={service.id}
                $isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon name={service.icon as any} size={16} />
                {service.title}
              </ServiceTab>
            ))}
          </ServiceNav>

          <ViewAllButton
            to="/services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <Icon name="arrowRight" size={18} />
          </ViewAllButton>

          <Counter>
            <CurrentNumber>{String(activeIndex + 1).padStart(2, '0')}</CurrentNumber>
            <TotalNumber>/ {String(services.length).padStart(2, '0')}</TotalNumber>
          </Counter>
        </ContentWrapper>

        <ProgressBar>
          <ProgressFill
            key={activeIndex}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: 'linear' }}
          />
        </ProgressBar>
      </VideoContainer>
    </SectionContainer>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
