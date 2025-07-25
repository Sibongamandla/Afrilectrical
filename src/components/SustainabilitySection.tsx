import React from 'react';
import styled from 'styled-components';

const SustainabilityContainer = styled.section`
  padding: 6rem 2rem;
  background: #fff;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContainer = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ExploreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e6332a;
  font-weight: bold;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const SustainabilitySection: React.FC = () => {
  return (
    <SustainabilityContainer>
      <Content>
        <TextContainer>
          <Title>Sustainability and Environment</Title>
          <Description>
            Engineering is key to Africa's sustainable future. At Afrilectrical, we're committed to planetary stewardship with carbon-neutral operations since 2022. Our renewable energy solutions have installed over 200MW capacity with 40% cost savings for clients while offsetting 50,000+ carbon tonnes annually.
          </Description>
          <ExploreLink href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Explore
          </ExploreLink>
        </TextContainer>
        <ImageContainer>
          <StyledImage src="https://www.efla-engineers.com/_next/image?url=https%3A%2F%2Fprismic-io.s3.amazonaws.com%2Fefla-main-storage%2Fde900be88e31c3533a0c18b1b056c365a108327c_efla-sustainability-and-environment-engineering-services.jpg&w=3840&q=75" alt="Sustainability and Environment" />
        </ImageContainer>
      </Content>
    </SustainabilityContainer>
  );
};

export default SustainabilitySection;