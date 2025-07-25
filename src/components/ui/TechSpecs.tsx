import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from './Typography';
import { Icon } from './Icon';

interface SpecItem {
  id: string | number;
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
}

interface TechSpecsProps {
  specs: SpecItem[];
  title?: string;
  defaultOpen?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SpecsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

const SpecsHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const SpecItemContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }
`;

const SpecButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.lightGrey : theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const SpecContent = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ArrowIcon = styled(motion.span)`
  font-size: 1rem;
`;

const ComparisonTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ComparisonItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechSpecs: React.FC<TechSpecsProps> = ({
  specs,
  title = 'Technical Specifications',
  defaultOpen = -1,
  className,
  style,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpen);

  const toggleSpec = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <SpecsContainer className={className} style={style}>
      {title && (
        <SpecsHeader>
          <Typography variant="h4">{title}</Typography>
        </SpecsHeader>
      )}
      
      {specs.map((spec, index) => (
        <SpecItemContainer key={spec.id}>
          <SpecButton 
            isActive={activeIndex === index}
            onClick={() => toggleSpec(index)}
            aria-expanded={activeIndex === index}
          >
            <TitleContainer>
              {spec.icon && <IconContainer>{spec.icon}</IconContainer>}
              <Typography 
                variant="subtitle1" 
                weight={activeIndex === index ? 'medium' : 'regular'}
              >
                {spec.title}
              </Typography>
            </TitleContainer>
            <ArrowIcon
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="chevron-down" size={16} />
            </ArrowIcon>
          </SpecButton>
          
          <AnimatePresence>
            {activeIndex === index && (
              <SpecContent
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {typeof spec.content === 'string' ? (
                  <Typography variant="body2">{spec.content}</Typography>
                ) : (
                  spec.content
                )}
              </SpecContent>
            )}
          </AnimatePresence>
        </SpecItemContainer>
      ))}
    </SpecsContainer>
  );
};

// Additional component for comparing specifications
export const SpecsComparison: React.FC<{
  items: Array<{
    title: string;
    specs: Record<string, string | number | boolean>;
    highlight?: boolean;
  }>;
  className?: string;
  style?: React.CSSProperties;
}> = ({ items, className, style }) => {
  return (
    <ComparisonTable className={className} style={style}>
      {items.map((item, index) => (
        <ComparisonItem 
          key={index}
          style={item.highlight ? { border: '2px solid #e31e24' } : undefined}
        >
          <Typography variant="h5" align="center" gutterBottom>
            {item.title}
          </Typography>
          
          {Object.entries(item.specs).map(([key, value]) => (
            <div key={key}>
              <Typography variant="caption" color="text">
                {key}
              </Typography>
              <Typography variant="body2">
                {typeof value === 'boolean' 
                  ? (value ? <Icon name="check" size={16} color="#4caf50" /> : <Icon name="close" size={16} color="#f44336" />)
                  : value.toString()}
              </Typography>
            </div>
          ))}
        </ComparisonItem>
      ))}
    </ComparisonTable>
  );
};

export default TechSpecs;