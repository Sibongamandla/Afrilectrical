import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DemoContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 24px;
  z-index: 1000;
  border: 1px solid #e2e8f0;
`;

const DemoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
`;

const FontOption = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 8px;
  border: 2px solid ${props => props.isActive ? '#e31e24' : '#e2e8f0'};
  border-radius: 8px;
  background: ${props => props.isActive ? '#fef2f2' : 'white'};
  color: ${props => props.isActive ? '#e31e24' : '#64748b'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    border-color: #e31e24;
    background: #fef2f2;
  }
`;

const PreviewSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
`;

const PreviewHeading = styled.h1<{ fontFamily: string }>`
  font-family: ${props => props.fontFamily};
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.2;
`;

const PreviewSubheading = styled.h2<{ fontFamily: string }>`
  font-family: ${props => props.fontFamily};
  font-size: 24px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.3;
`;

const PreviewBody = styled.p<{ fontFamily: string }>`
  font-family: ${props => props.fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #e31e24;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #b71c1c;
  }
`;

const fontOptions = [
  {
    id: 'executive',
    name: 'Classic Executive',
    description: 'Playfair Display + Source Sans Pro',
    heading: "'Playfair Display', 'Times New Roman', serif",
    body: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  {
    id: 'corporate',
    name: 'Modern Corporate',
    description: 'Montserrat + Open Sans',
    heading: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  {
    id: 'financial',
    name: 'Financial/Legal',
    description: 'Crimson Text + Lato',
    heading: "'Crimson Text', 'Times New Roman', serif",
    body: "'Lato', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  {
    id: 'tech',
    name: 'Tech Executive',
    description: 'Space Grotesk + Inter',
    heading: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  },
  {
    id: 'luxury',
    name: 'Luxury Premium',
    description: 'Cormorant Garamond + Nunito Sans',
    heading: "'Cormorant Garamond', 'Times New Roman', serif",
    body: "'Nunito Sans', -apple-system, BlinkMacSystemFont, sans-serif"
  }
];

interface FontDemoProps {
  onApplyFont?: (headingFont: string, bodyFont: string) => void;
  onClose?: () => void;
}

const FontDemo: React.FC<FontDemoProps> = ({ onApplyFont, onClose }) => {
  const [selectedFont, setSelectedFont] = useState('executive');

  const currentFont = fontOptions.find(f => f.id === selectedFont)!;

  const handleApply = () => {
    if (onApplyFont) {
      onApplyFont(currentFont.heading, currentFont.body);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <DemoContainer>
      <DemoTitle>Executive Font Options</DemoTitle>
      
      {fontOptions.map(font => (
        <FontOption
          key={font.id}
          isActive={selectedFont === font.id}
          onClick={() => setSelectedFont(font.id)}
        >
          <div style={{ fontWeight: 600 }}>{font.name}</div>
          <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.7 }}>
            {font.description}
          </div>
        </FontOption>
      ))}
      
      <PreviewSection>
        <PreviewHeading fontFamily={currentFont.heading}>
          AFRILECTRICAL
        </PreviewHeading>
        <PreviewSubheading fontFamily={currentFont.heading}>
          Engineering Excellence
        </PreviewSubheading>
        <PreviewBody fontFamily={currentFont.body}>
          Leading electrical engineering consultancy serving Africa with innovative solutions in power distribution, renewable energy, and industrial automation.
        </PreviewBody>
      </PreviewSection>
      
      <ApplyButton onClick={handleApply}>
        Apply {currentFont.name}
      </ApplyButton>
    </DemoContainer>
  );
};

export default FontDemo;