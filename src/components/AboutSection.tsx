import React from 'react';
import styled from 'styled-components';
import { Icon } from './ui';

const AboutContainer = styled.section`
  padding: 8rem 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: left;
  }
`;

const AboutText = styled.div`
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: #666666;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: left;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0066cc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666666;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const AboutImageContainer = styled.div`
  order: 2;

  @media (max-width: 968px) {
    order: 1;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 102, 204, 0.15);

  @media (max-width: 768px) {
    height: 350px;
    font-size: 2.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ImageIcon = styled.div`
  position: relative;
  z-index: 1;
`;

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <AboutContent>
          <AboutText>
            <AboutTitle>About Afrilectrical</AboutTitle>
            <AboutDescription>
              We are a leading electrical engineering company dedicated to powering Africa's future through innovative electrical solutions. Our expertise spans power distribution, industrial systems, and renewable energy integration across the continent.
            </AboutDescription>
            <AboutDescription>
              With a commitment to excellence and sustainable development, we partner with governments, corporations, and communities to deliver reliable electrical infrastructure that drives economic growth and improves quality of life.
            </AboutDescription>
            <AboutStats>
              <StatItem>
                <StatNumber>500+</StatNumber>
                <StatLabel>Projects Delivered</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>25+</StatNumber>
                <StatLabel>Countries Served</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>20+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
            </AboutStats>
          </AboutText>
          <AboutImageContainer>
            <AboutImage>
              <ImageIcon><Icon name="lightning" size={48} color="white" /></ImageIcon>
            </AboutImage>
          </AboutImageContainer>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;