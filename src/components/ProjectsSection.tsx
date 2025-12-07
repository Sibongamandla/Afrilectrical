import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 140px 0;
  background: ${({ theme }) => theme.colors.backgroundAlternate};
  
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid transparent;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 240px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(227, 30, 36, 0.8) 0%, rgba(0, 102, 204, 0.8) 100%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const ProjectCategory = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateX(4px);
  }
  
  &::after {
    content: '→';
    margin-left: ${({ theme }) => theme.spacing.sm};
    transition: transform ${({ theme }) => theme.transitions.base};
  }
  
  &:hover::after {
    transform: translateX(2px);
  }
`;

const projects = [
  {
    id: 1,
    category: 'Electrical Consulting',
    title: 'KwaZulu-Natal Rural Electrification',
    description: 'Comprehensive rural electrification project bringing reliable power to 8,500 households across 15 communities in KwaZulu-Natal province.',
    image: '/media/images/night_road_construction_paving.jpg',
    link: '/projects'
  },
  {
    id: 2,
    category: 'Civil & Structural Engineering',
    title: 'Durban Commercial Complex',
    description: 'Integrated electrical and security systems for a 20-story commercial development featuring smart building technology.',
    image: '/media/images/aerial_construction_site_view.jpg',
    link: '/projects'
  },
  {
    id: 3,
    category: 'Mechanical Engineering',
    title: 'Midlands Medical Centre',
    description: 'Mission-critical electrical systems including emergency power supplies and specialized lighting for surgical suites.',
    image: '/media/images/stadium_lighting_dusk_light_trails.jpg',
    link: '/projects'
  }
];

const ProjectsSection: React.FC = memo(() => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer>
      <Container>
        <SectionHeader>
          <Title>Featured Projects</Title>
          <Subtitle>
            Showcasing our expertise in delivering professional engineering solutions across KwaZulu-Natal
          </Subtitle>
        </SectionHeader>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectImage bgImage={project.image} />
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink to={project.link}>View Project</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </SectionContainer>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;