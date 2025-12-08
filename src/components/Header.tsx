import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { animationMixins, reducedMotionSupport } from '../styles/animations';

const HeaderContainer = styled.header<{ isScrolled: boolean; $isDropdownOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ isScrolled, $isDropdownOpen, theme }) => {
    if ($isDropdownOpen) {
      return theme.colors.gray900;
    }
    return isScrolled
      ? 'rgba(255, 255, 255, 0.98)'
      : 'rgba(255, 255, 255, 0.95)';
  }};
  backdrop-filter: ${({ $isDropdownOpen }) => $isDropdownOpen ? 'none' : 'blur(12px)'};
  -webkit-backdrop-filter: ${({ $isDropdownOpen }) => $isDropdownOpen ? 'none' : 'blur(12px)'};
  border-bottom: ${({ isScrolled, $isDropdownOpen, theme }) => {
    if ($isDropdownOpen) {
      return `1px solid ${theme.colors.gray700}`;
    }
    return isScrolled
      ? '1px solid rgba(0, 0, 0, 0.06)'
      : '1px solid rgba(0, 0, 0, 0.04)';
  }};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${({ isScrolled }) => isScrolled ? '4px 0' : '8px 0'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled
      ? '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.04)'
      : 'none'
  };

  @supports not (backdrop-filter: blur(12px)) {
    background: ${({ isScrolled, theme }) =>
      isScrolled
        ? theme.colors.white
        : 'rgba(255, 255, 255, 0.98)'
    };
  }

  ${reducedMotionSupport}
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 24px;
    height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 20px;
    height: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 16px;
    height: 52px;
  }
`;

const Logo = styled(motion(Link))<{ $isDropdownOpen: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 10;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const LogoMark = styled(motion.img)`
  height: 52px;
  width: auto;
  max-width: 220px;
  transition: all ${({ theme }) => theme.transitions.base};

  /* CSS-based transparency for white background */
  background: transparent;
  mix-blend-mode: multiply;

  ${Logo}:hover & {
    transform: scale(1.02);
    filter: brightness(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 48px;
    max-width: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 44px;
    max-width: 180px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 40px;
    max-width: 160px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))<{ $isDropdownOpen: boolean }>`
  color: ${({ $isDropdownOpen, theme }) =>
    $isDropdownOpen ? theme.colors.white : '#374151'
  };
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  letter-spacing: -0.01em;

  &:hover {
    color: #111827;
    background: rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(227, 30, 36, 0.06);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(motion.button)<{ $isDropdownOpen: boolean }>`
  color: ${({ $isDropdownOpen, theme }) => 
    $isDropdownOpen ? theme.colors.white : theme.colors.text
  };
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};

  /* Hover background effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primarySoft};
    border-radius: inherit;
    opacity: 0;
    transform: scale(0.85);
    transition: all ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &.open {
    color: ${({ theme }) => theme.colors.primary};
    
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  ${animationMixins.focusEffect}
`;

const DropdownArrow = styled(motion.span)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-left: ${({ theme }) => theme.spacing.xs};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  ${DropdownButton}:hover &,
  ${DropdownButton}.open & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface DropdownMenuProps {
  $isOpen: boolean;
}

const DropdownMenu = styled(motion.div)<DropdownMenuProps>`
  position: fixed;
  top: 72px; /* Start below the navbar */
  left: 0;
  width: 100vw;
  height: calc(100vh - 72px); /* Take remaining height */
  background: ${({ theme }) => theme.colors.gray900};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: 68px;
    height: calc(100vh - 68px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 64px;
    height: calc(100vh - 64px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 60px;
    height: calc(100vh - 60px);
  }
`;


const DropdownList = styled.ul`
  list-style: none;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: none;
  position: relative;
  z-index: 1;
`;

const DropdownItem = styled(motion.li)`
  position: relative;
  width: 100%;
`;

const DropdownLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.75rem, 4vw, 3rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  
  /* Left accent line */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ theme }) => theme.colors.gradient.hero};
    transform: scaleY(0);
    transition: transform ${({ theme }) => theme.transitions.base};
    transform-origin: center;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primarySoft};
    transform: translateX(12px) scale(1.02);
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    
    &::before {
      transform: scaleY(1);
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  &:active {
    transform: translateX(6px) scale(0.98);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
  
  ${animationMixins.focusEffect}
`;

const ArrowIcon = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  
  &::after {
    content: '→';
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
  
  ${DropdownLink}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(8px) scale(1.1);
    border-color: ${({ theme }) => theme.colors.primaryDark};
    
    &::after {
      transform: translateX(2px);
    }
  }
`;

const ContactButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: #111827;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  color: white;
  letter-spacing: -0.01em;

  &:hover {
    background: #1f2937;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isDropdownOpen]);

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeOut" as const
      }
    })
  };

  const solutionItems = [
    { path: '/solutions/buildings', label: 'Buildings' },
    { path: '/solutions/renewable-energy', label: 'Renewable Energy' },
    { path: '/solutions/industry', label: 'Industry' },
    { path: '/solutions/risk-and-safety', label: 'Risk & Safety' },
    { path: '/solutions/sustainability-and-environment', label: 'Sustainability & Environment' },
    { path: '/solutions/transmission-and-distribution', label: 'Transmission & Distribution' },
    { path: '/solutions/urban-planning', label: 'Urban Planning' },
    { path: '/solutions/transportation-and-mobility', label: 'Transportation & Mobility' }
  ];

  return (
    <HeaderContainer isScrolled={isScrolled} $isDropdownOpen={isDropdownOpen}>
      <Nav>
        <Logo 
          to="/"
          $isDropdownOpen={isDropdownOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogoMark
            src="/media/images/afrilectrical_logo.svg"
            alt="AFRILECTRICAL Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Logo>
        <NavLinks>
          <li>
            <NavLink
              to="/services"
              $isDropdownOpen={isDropdownOpen}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              $isDropdownOpen={isDropdownOpen}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              $isDropdownOpen={isDropdownOpen}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              About Us
            </NavLink>
          </li>
{/* Stories page commented out - contains fabricated content
          <li>
            <NavLink
              to="/stories"
              $isDropdownOpen={isDropdownOpen}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Stories
            </NavLink>
          </li>
*/}
{/* News page commented out - contains fabricated content
          <li>
            <NavLink
              to="/news"
              $isDropdownOpen={isDropdownOpen}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              News
            </NavLink>
          </li>
*/}
        </NavLinks>
        <ContactButton 
          to="/contact"
          whileHover={{ 
            scale: 1.05,
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact our experts
        </ContactButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;