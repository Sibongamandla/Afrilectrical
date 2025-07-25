import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;



const FooterLinksContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterLogo = styled(motion.div)`
  height: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
`;





const FooterLinks = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(motion.li)`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterLinkAnchor = styled(motion.a)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
  padding-top: ${({ theme }) => theme.spacing.xl};
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
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.xxl};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Footer: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5 }
  };

  const socialVariants = {
    hover: { scale: 1.2, rotate: 5 }
  };

  return (
    <FooterContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container>
        <FooterContent>
          <FooterLinksContainer variants={itemVariants}>
            <FooterLinks variants={itemVariants}>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >Services</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >Projects</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >About Us</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >Contact</FooterLinkAnchor>
              </FooterLink>
            </FooterLinks>
            <FooterLinks variants={itemVariants}>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="tel:+27333400302"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >+27 (0)33 340 0302</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="mailto:info@afrilectrical.co.za"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >info@afrilectrical.co.za</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >Pietermaritzburg, KZN</FooterLinkAnchor>
              </FooterLink>
              <FooterLink variants={itemVariants}>
                <FooterLinkAnchor 
                  href="#"
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >Level 1 B-BBEE</FooterLinkAnchor>
              </FooterLink>
            </FooterLinks>
          </FooterLinksContainer>
          <SocialLinks variants={itemVariants}>
            <SocialLink 
              href="#" 
              aria-label="LinkedIn"
              whileHover={socialVariants.hover}
              whileTap={{ scale: 0.9 }}
            >in</SocialLink>
          </SocialLinks>
        </FooterContent>

        <FooterBottom>
          <FooterLogo variants={itemVariants}>
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              whileHover={{ scale: 1.05 }}
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </motion.svg>
          </FooterLogo>
          <Copyright>
            <motion.span variants={itemVariants}>
              © 2024 Afrilectrical. All rights reserved.
            </motion.span>
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;