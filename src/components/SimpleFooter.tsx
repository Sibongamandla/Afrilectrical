import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 0 40px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0 30px 0;
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

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const CompanySection = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 1 / -1;
  }
`;

const Logo = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CompanyDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray300};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 350px;
`;

const ContactInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray300};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  a {
    color: ${({ theme }) => theme.colors.gray300};
    text-decoration: none;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    transition: color ${({ theme }) => theme.transitions.base};
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray700};
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
  
  a {
    color: ${({ theme }) => theme.colors.gray400};
    text-decoration: none;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    transition: color ${({ theme }) => theme.transitions.base};
    
    &:hover {
      color: ${({ theme }) => theme.colors.gray200};
    }
  }
`;

const SimpleFooter: React.FC = memo(() => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <CompanySection>
            <Logo>AFRILECTRICAL</Logo>
            <CompanyDescription>
              A consulting engineering firm based in Pietermaritzburg, KwaZulu-Natal, specialising in delivering professional services across Electrical, Civil & Structural, Mechanical, Town Planning, and Security solutions. 100% black-owned and Level 1 BBBEE contributor.
            </CompanyDescription>
          </CompanySection>
          
          <FooterSection>
            <h4>Services</h4>
            <FooterLinks>
              <FooterLink><Link to="/electrical-consulting">Electrical Consulting</Link></FooterLink>
              <FooterLink><Link to="/civil-structural">Civil & Structural</Link></FooterLink>
              <FooterLink><Link to="/mechanical">Mechanical Engineering</Link></FooterLink>
              <FooterLink><Link to="/town-planning">Town & Regional Planning</Link></FooterLink>
              <FooterLink><Link to="/security-systems">Security Systems</Link></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Company</h4>
            <FooterLinks>
              <FooterLink><Link to="/about">About Us</Link></FooterLink>
              <FooterLink><Link to="/team">Our Team</Link></FooterLink>
              <FooterLink><Link to="/careers">Careers</Link></FooterLink>
              <FooterLink><Link to="/contact">Contact</Link></FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Resources</h4>
            <FooterLinks>
              <FooterLink><Link to="/projects">Projects</Link></FooterLink>
              <FooterLink><Link to="/insights">Insights</Link></FooterLink>
              <FooterLink><Link to="/downloads">Downloads</Link></FooterLink>
              <FooterLink><Link to="/support">Support</Link></FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            © 2024 AFRILECTRICAL Consulting Engineers. All rights reserved.
          </Copyright>
          <LegalLinks>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
});

SimpleFooter.displayName = 'SimpleFooter';

export default SimpleFooter;