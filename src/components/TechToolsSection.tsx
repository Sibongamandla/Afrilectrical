import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon } from './ui';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './shared/SectionHeader';

// Main container with improved spacing and accessibility
const TechToolsSectionContainer = styled.div`
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

// Tools grid with improved layout
const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

// Tool card with improved styling and accessibility
const ToolCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

// Tool icon container with improved styling
const ToolIconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

// Tool title with improved typography
const ToolTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

// Tool description with improved readability
const ToolDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
`;

// Tool button with improved styling and accessibility
const ToolButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
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
`;

// Calculator modal with improved styling and accessibility
const CalculatorModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.xl};
`;

// Calculator content with improved styling
const CalculatorContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

// Calculator header with improved styling
const CalculatorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// Calculator title with improved typography
const CalculatorTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.heading};
  margin: 0;
`;

// Close button with improved styling and accessibility
const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`;

// Form group with improved styling
const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// Form label with improved typography and accessibility
const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

// Form input with improved styling and accessibility
const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    outline: none;
  }
`;

// Form select with improved styling and accessibility
const FormSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryLight};
    outline: none;
  }
`;

// Result container with improved styling
const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

// Result title with improved typography
const ResultTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Result value with improved typography
const ResultValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

// Power Calculator component
const PowerCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [power, setPower] = useState<number | null>(null);

  const calculatePower = () => {
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    
    if (!isNaN(v) && !isNaN(i)) {
      setPower(v * i);
    }
  };

  return (
    <CalculatorContent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <CalculatorHeader>
        <CalculatorTitle>Power Calculator</CalculatorTitle>
        <CloseButton onClick={onClose} aria-label="Close calculator">
          ×
        </CloseButton>
      </CalculatorHeader>
      
      <FormGroup>
        <FormLabel htmlFor="voltage">Voltage (V)</FormLabel>
        <FormInput
          id="voltage"
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          placeholder="Enter voltage"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="current">Current (A)</FormLabel>
        <FormInput
          id="current"
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          placeholder="Enter current"
        />
      </FormGroup>
      
      <ToolButton onClick={calculatePower}>
        Calculate Power
      </ToolButton>
      
      {power !== null && (
        <ResultContainer>
          <ResultTitle>Power (W)</ResultTitle>
          <ResultValue>{power.toFixed(2)} W</ResultValue>
        </ResultContainer>
      )}
    </CalculatorContent>
  );
};

// Cable Size Calculator component
const CableSizeCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [current, setCurrent] = useState('');
  const [distance, setDistance] = useState('');
  const [voltageType, setVoltageType] = useState('single');
  const [cableSize, setCableSize] = useState<string | null>(null);

  const calculateCableSize = () => {
    const i = parseFloat(current);
    const d = parseFloat(distance);
    
    if (!isNaN(i) && !isNaN(d)) {
      // Simplified cable size calculation logic
      let size: string;
      
      if (voltageType === 'single') {
        if (i <= 10) size = '1.5 mm²';
        else if (i <= 16) size = '2.5 mm²';
        else if (i <= 25) size = '4 mm²';
        else if (i <= 32) size = '6 mm²';
        else if (i <= 40) size = '10 mm²';
        else if (i <= 63) size = '16 mm²';
        else size = '25 mm² or larger';
      } else {
        if (i <= 10) size = '2.5 mm²';
        else if (i <= 16) size = '4 mm²';
        else if (i <= 25) size = '6 mm²';
        else if (i <= 32) size = '10 mm²';
        else if (i <= 40) size = '16 mm²';
        else if (i <= 63) size = '25 mm²';
        else size = '35 mm² or larger';
      }
      
      // Adjust for distance
      if (d > 50) {
        if (size === '1.5 mm²') size = '2.5 mm²';
        else if (size === '2.5 mm²') size = '4 mm²';
        else if (size === '4 mm²') size = '6 mm²';
        else if (size === '6 mm²') size = '10 mm²';
        else if (size === '10 mm²') size = '16 mm²';
        else if (size === '16 mm²') size = '25 mm²';
      }
      
      setCableSize(size);
    }
  };

  return (
    <CalculatorContent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <CalculatorHeader>
        <CalculatorTitle>Cable Size Calculator</CalculatorTitle>
        <CloseButton onClick={onClose} aria-label="Close calculator">
          ×
        </CloseButton>
      </CalculatorHeader>
      
      <FormGroup>
        <FormLabel htmlFor="current">Current (A)</FormLabel>
        <FormInput
          id="current"
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          placeholder="Enter current"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="distance">Cable Length (m)</FormLabel>
        <FormInput
          id="distance"
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Enter distance"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="voltageType">Voltage Type</FormLabel>
        <FormSelect
          id="voltageType"
          value={voltageType}
          onChange={(e) => setVoltageType(e.target.value)}
        >
          <option value="single">Single Phase</option>
          <option value="three">Three Phase</option>
        </FormSelect>
      </FormGroup>
      
      <ToolButton onClick={calculateCableSize}>
        Calculate Cable Size
      </ToolButton>
      
      {cableSize !== null && (
        <ResultContainer>
          <ResultTitle>Recommended Cable Size</ResultTitle>
          <ResultValue>{cableSize}</ResultValue>
        </ResultContainer>
      )}
    </CalculatorContent>
  );
};

// Energy Savings Calculator component
const EnergySavingsCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentUsage, setCurrentUsage] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [hours, setHours] = useState('');
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    const usage = parseFloat(currentUsage);
    const eff = parseFloat(efficiency);
    const hrs = parseFloat(hours);
    
    if (!isNaN(usage) && !isNaN(eff) && !isNaN(hrs)) {
      // Calculate annual savings in kWh
      const dailySavings = usage * (eff / 100) * (hrs / 24);
      const annualSavings = dailySavings * 365;
      setSavings(annualSavings);
    }
  };

  return (
    <CalculatorContent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <CalculatorHeader>
        <CalculatorTitle>Energy Savings Calculator</CalculatorTitle>
        <CloseButton onClick={onClose} aria-label="Close calculator">
          ×
        </CloseButton>
      </CalculatorHeader>
      
      <FormGroup>
        <FormLabel htmlFor="currentUsage">Current Daily Energy Usage (kWh)</FormLabel>
        <FormInput
          id="currentUsage"
          type="number"
          value={currentUsage}
          onChange={(e) => setCurrentUsage(e.target.value)}
          placeholder="Enter current usage"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="efficiency">Expected Efficiency Improvement (%)</FormLabel>
        <FormInput
          id="efficiency"
          type="number"
          value={efficiency}
          onChange={(e) => setEfficiency(e.target.value)}
          placeholder="Enter efficiency percentage"
          max="100"
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="hours">Hours of Operation per Day</FormLabel>
        <FormInput
          id="hours"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Enter hours"
          max="24"
        />
      </FormGroup>
      
      <ToolButton onClick={calculateSavings}>
        Calculate Savings
      </ToolButton>
      
      {savings !== null && (
        <ResultContainer>
          <ResultTitle>Annual Energy Savings</ResultTitle>
          <ResultValue>{savings.toFixed(2)} kWh</ResultValue>
        </ResultContainer>
      )}
    </CalculatorContent>
  );
};

const TechToolsSection: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const openCalculator = (calculator: string) => {
    setActiveCalculator(calculator);
  };

  const closeCalculator = () => {
    setActiveCalculator(null);
  };

  return (
    <TechToolsSectionContainer>
      <ContentWrapper>
        <SectionHeader
          title="Engineering Tools"
          description="Use our interactive engineering tools to help with calculations, planning, and decision-making for your electrical projects."
        />
        
        <ScrollReveal>
          <ToolsGrid>
            <ToolCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ToolIconContainer>
                <Icon name="lightning" size={32} color="white" />
              </ToolIconContainer>
              <ToolTitle>Power Calculator</ToolTitle>
              <ToolDescription>
                Calculate electrical power based on voltage and current inputs. Essential for determining power requirements for electrical systems and components.
              </ToolDescription>
              <ToolButton onClick={() => openCalculator('power')}>
                Open Calculator
                <Icon name="arrow-right" size={16} color="white" />
              </ToolButton>
            </ToolCard>
            
            <ToolCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ToolIconContainer>
                <Icon name="cable" size={32} color="white" />
              </ToolIconContainer>
              <ToolTitle>Cable Size Calculator</ToolTitle>
              <ToolDescription>
                Determine the appropriate cable size based on current load and distance. Ensures safety and efficiency in electrical installations.
              </ToolDescription>
              <ToolButton onClick={() => openCalculator('cable')}>
                Open Calculator
                <Icon name="arrow-right" size={16} color="white" />
              </ToolButton>
            </ToolCard>
            
            <ToolCard
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ToolIconContainer>
                <Icon name="leaf" size={32} color="white" />
              </ToolIconContainer>
              <ToolTitle>Energy Savings Calculator</ToolTitle>
              <ToolDescription>
                Estimate potential energy savings from efficiency improvements. Helps quantify the benefits of upgrading to more efficient electrical systems.
              </ToolDescription>
              <ToolButton onClick={() => openCalculator('energy')}>
                Open Calculator
                <Icon name="arrow-right" size={16} color="white" />
              </ToolButton>
            </ToolCard>
          </ToolsGrid>
        </ScrollReveal>
      </ContentWrapper>
      
      {activeCalculator && (
        <CalculatorModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeCalculator();
          }}
        >
          {activeCalculator === 'power' && <PowerCalculator onClose={closeCalculator} />}
          {activeCalculator === 'cable' && <CableSizeCalculator onClose={closeCalculator} />}
          {activeCalculator === 'energy' && <EnergySavingsCalculator onClose={closeCalculator} />}
        </CalculatorModal>
      )}
    </TechToolsSectionContainer>
  );
};

export default TechToolsSection;