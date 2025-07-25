import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';
import { animationMixins, reducedMotionSupport } from '../../styles/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  className?: string;
  style?: React.CSSProperties;
}

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  backdrop-filter: blur(10px);
  
  /* Subtle gradient overlay for depth */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${({ theme }) => theme.colors.primarySoft} 50%, 
      transparent 100%);
    z-index: 1;
  }
  
  /* Modern glass morphism border */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.glass.light} 0%, 
      transparent 50%, 
      ${({ theme }) => theme.colors.glass.light} 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
    pointer-events: none;
  }
  
  ${animationMixins.cardHover}
  
  &:hover::after {
    opacity: 0.6;
  }
  
  /* Focus state for accessibility */
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  ${reducedMotionSupport}
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gradient.soft};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primarySoft};
  
  /* Subtle gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.colors.primarySoft} 0%, 
      ${({ theme }) => theme.colors.secondarySoft} 100%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
  }
  
  /* Icon sits above the overlay */
  > * {
    position: relative;
    z-index: 1;
    transition: all ${({ theme }) => theme.transitions.base};
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBold};
    transform: scale(1.05);
    
    &::before {
      opacity: 0.8;
    }
    
    > * {
      color: ${({ theme }) => theme.colors.primaryDark};
      transform: scale(1.1);
    }
  }
`;

const FeaturesList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const ExpandButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundSoft};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin-top: auto;
  display: flex;
  align-items: center;
  align-self: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  overflow: hidden;
  
  /* Subtle gradient background on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primarySoft};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }
  
  /* Content above background */
  > * {
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
    
    &::before {
      opacity: 1;
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  className,
  style,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      }
    }
  };

  return (
    <CardContainer 
      className={className} 
      style={style}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      <CardContent>
        <IconContainer
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          {typeof icon === 'string' ? <Icon name={icon as any} size={32} /> : icon}
        </IconContainer>
        
        <Typography 
          variant="h4" 
          color="heading"
          gutterBottom
          animated={false}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="textSecondary"
          style={{ marginBottom: '1rem' }}
          animated={false}
        >
          {description}
        </Typography>
        
        {features.length > 0 && (
          <>
            <AnimatePresence>
              {isExpanded && (
                <FeaturesList
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {features.map((feature, index) => (
                    <FeatureItem 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: 'easeOut'
                      }}
                    >
                      <Typography variant="body2" color="textMuted" animated={false}>
                        {feature}
                      </Typography>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              )}
            </AnimatePresence>
            
            <ExpandButton 
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
              <motion.span
                initial={false}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ marginLeft: '8px', display: 'inline-block' }}
              >
                <Icon name="chevron-down" size={16} />
              </motion.span>
            </ExpandButton>
          </>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default ServiceCard;