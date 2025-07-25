import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Typography from './Typography';

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  location?: string;
  year?: string;
  details?: {
    client?: string;
    scope?: string;
    value?: string;
    duration?: string;
    [key: string]: string | undefined;
  };
}

interface ProjectGalleryProps {
  projects: Project[];
  categories?: string[];
  className?: string;
  style?: React.CSSProperties;
}

const GalleryContainer = styled.div`
  width: 100%;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.primary : theme.colors.lightGrey};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transform-origin: center;
`;

const ProjectImage = styled(motion.div)<{ imageUrl: string }>`
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TagsContainer = styled(motion.div)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tag = styled(motion.span)`
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ProjectContent = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const ModalImageContainer = styled(motion.div)`
  flex: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
  }
`;

const ModalImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  object-fit: cover;
`;

const ModalInfo = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs};
`;

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  categories = [],
  className,
  style,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const controls = useAnimation();
  
  // Extract all unique categories if not provided
  const allCategories = categories.length > 0 
    ? categories 
    : Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeCategory));
    
  useEffect(() => {
    // Animate the grid when projects change
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }
    }));
  }, [activeCategory, controls]);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0
    }),
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)"
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)"
    }
  };
  
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };
  
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1
    }),
    hover: {
      backgroundColor: "#e31e24",
      color: "#fff",
      scale: 1.05
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const modalContentVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.9 }
  };
  
  const modalChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <GalleryContainer className={className} style={style}>
      <FiltersContainer>
        <FilterButton 
          as={motion.button}
          isActive={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </FilterButton>
        {allCategories.map((category, index) => (
          <FilterButton
            key={category}
            as={motion.button}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </FiltersContainer>
      
      <ProjectsGrid
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedProject(project)}
              layoutId={`project-card-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.imageUrl}
                variants={imageVariants}
                whileHover="hover"
              >
                <TagsContainer>
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Tag 
                      key={tagIndex}
                      custom={tagIndex}
                      variants={tagVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagsContainer>
              </ProjectImage>
              <ProjectContent>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Typography variant="body2" color="text" noWrap>
                    {project.description}
                  </Typography>
                </motion.div>
                <ProjectMeta>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {project.location && <span>{project.location}</span>}
                    {project.year && <span>{project.year}</span>}
                  </motion.div>
                </ProjectMeta>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
      
      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layoutId={`project-card-${selectedProject.id}`}
            >
              <ModalHeader>
                <motion.div variants={modalChildVariants}>
                  <Typography variant="h3">{selectedProject.title}</Typography>
                  <Typography variant="subtitle2" color="text">
                    {selectedProject.location} {selectedProject.year && `| ${selectedProject.year}`}
                  </Typography>
                </motion.div>
                <CloseButton 
                  onClick={() => setSelectedProject(null)}
                  as={motion.button}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ModalImageContainer variants={modalChildVariants}>
                  <ModalImage 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </ModalImageContainer>
                <ModalInfo variants={modalChildVariants}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Typography variant="body1">
                      {selectedProject.description}
                    </Typography>
                  </motion.div>
                  
                  {selectedProject.details && Object.keys(selectedProject.details).length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Typography variant="h5">Project Details</Typography>
                      <DetailsList>
                        {Object.entries(selectedProject.details).map(([key, value], index) => (
                          <DetailItem 
                            key={key}
                            as={motion.div}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                          >
                            <Typography variant="caption" color="text" style={{ textTransform: 'uppercase' }}>
                              {key}
                            </Typography>
                            <Typography variant="body2">
                              {value}
                            </Typography>
                          </DetailItem>
                        ))}
                      </DetailsList>
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Typography variant="subtitle2" gutterBottom>
                      Tags
                    </Typography>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedProject.tags.map((tag, index) => (
                        <Tag 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (index * 0.05), duration: 0.3 }}
                          whileHover={{ backgroundColor: "#e31e24", color: "#fff", scale: 1.05 }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </motion.div>
                </ModalInfo>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default ProjectGallery;