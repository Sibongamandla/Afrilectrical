import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Client {
  name: string;
  logo: string;
}

interface AutoScrollCarouselProps {
  clients: Client[];
  title?: string;
  subtitle?: string;
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  background: #f8f9fa;
  padding: 2rem 0;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary || '#0066cc'};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent || '#ff6b00'};
    border-radius: 1px;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text || '#333'};
  max-width: 500px;
  margin: 0;
  line-height: 1.5;
`;

const LogosWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white || '#fff'};
  border-radius: 0;
  box-shadow: none;
  padding: 2rem 0;
  overflow: hidden;
  width: 100%;
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const LogoStrip = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
`;

const Logo = styled.img`
  height: 4rem;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({ 
  clients, 
  title = "Strategic Partners & Certifications",
  subtitle = "We collaborate with industry leaders and maintain the highest standards through strategic partnerships and certifications."
}) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clients, ...clients];

  return (
    <CarouselContainer>
      {(title || subtitle) && (
        <HeaderWrapper>
          <TitleContainer>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </TitleContainer>
        </HeaderWrapper>
      )}

      <LogosWrapper>
        <ScrollContainer>
          <LogoStrip>
            {duplicatedLogos.map((client, index) => (
              <LogoItem key={`${client.name}-${index}`}>
                <Logo
                  src={client.logo}
                  alt={client.name}
                />
              </LogoItem>
            ))}
          </LogoStrip>
        </ScrollContainer>
      </LogosWrapper>
    </CarouselContainer>
  );
};

export default AutoScrollCarousel;