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
      ? theme.colors.white
      : 'rgba(255, 255, 255, 0.97)';
  }};
  backdrop-filter: ${({ $isDropdownOpen }) => $isDropdownOpen ? 'none' : 'blur(20px)'};
  -webkit-backdrop-filter: ${({ $isDropdownOpen }) => $isDropdownOpen ? 'none' : 'blur(20px)'};
  border-bottom: ${({ isScrolled, $isDropdownOpen, theme }) => {
    if ($isDropdownOpen) {
      return `1px solid ${theme.colors.gray700}`;
    }
    return isScrolled 
      ? `1px solid ${theme.colors.gray200}` 
      : `1px solid ${theme.colors.gray100}`;
  }};
  transition: all ${({ theme }) => theme.transitions.base};
  padding: ${({ isScrolled, theme }) => 
    isScrolled ? `${theme.spacing.sm} 0` : `${theme.spacing.md} 0`
  };
  box-shadow: ${({ isScrolled, theme }) => 
    isScrolled 
      ? '0 4px 20px rgba(0, 0, 0, 0.08)'
      : '0 2px 10px rgba(0, 0, 0, 0.04)'
  };
  
  /* Enhanced glass morphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ isScrolled, theme }) => 
      isScrolled 
        ? 'transparent'
        : `linear-gradient(135deg, ${theme.colors.glass.light} 0%, transparent 100%)`
    };
    pointer-events: none;
    z-index: -1;
  }
  
  @supports not (backdrop-filter: blur(16px)) {
    background: ${({ isScrolled, theme }) => 
      isScrolled 
        ? theme.colors.white
        : 'rgba(255, 255, 255, 0.95)'
    };
  }
  
  ${reducedMotionSupport}
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xxl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
    height: 68px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    height: 64px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    height: 60px;
  }
`;

const Logo = styled(motion(Link))<{ $isDropdownOpen: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  color: ${({ $isDropdownOpen, theme }) => 
    $isDropdownOpen ? theme.colors.white : theme.colors.heading
  };
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  z-index: 10;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  letter-spacing: -0.02em;
  
  ${animationMixins.gentleHoverScale}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
`;

const LogoMark = styled(motion.img)`
  height: 80px; /* Increased from 64px */
  width: auto; /* Let width scale proportionally with the logo text */
  max-width: 350px; /* Increased from 280px to allow much wider logo */
  margin-right: 0; /* Remove margin since this is now the complete logo */
  transition: all ${({ theme }) => theme.transitions.base};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  /* Remove white background - Option 1 */
  background: transparent;
  filter: 
    contrast(1.3) 
    brightness(0.9) 
    saturate(1.1);
  mix-blend-mode: multiply;
  
  /* Alternative Option 2 - If background is specific color */
  /* 
  background: transparent;
  filter: 
    contrast(2) 
    brightness(0.8) 
    drop-shadow(0 0 0 rgba(0,0,0,0));
  */
  
  /* Alternative Option 3 - Aggressive white removal */
  /*
  filter: 
    invert(1) 
    contrast(2) 
    brightness(1.2) 
    invert(1);
  */
  
  ${Logo}:hover & {
    transform: translateY(-2px) scale(1.05);
    filter: brightness(1.1) contrast(1.2);
    mix-blend-mode: multiply;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 68px; /* Increased from 56px */
    max-width: 300px; /* Increased from 240px */
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 56px; /* Increased from 48px */
    max-width: 250px; /* Increased from 200px */
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 48px; /* Increased from 42px */
    max-width: 220px; /* Increased from 180px */
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))<{ $isDropdownOpen: boolean }>`
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
  
  /* Active indicator line */
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient.hero};
    border-radius: 1px;
    transition: transform ${({ theme }) => theme.transitions.base};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  ${animationMixins.focusEffect}
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
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.gradient.hero};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(227, 30, 36, 0.3);
  min-width: 180px;

  /* Shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.glass.light}, transparent);
    transition: left ${({ theme }) => theme.transitions.slow};
  }

  ${animationMixins.buttonHover}
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primarySoft};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
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
            src="/afri-logo.ico" 
            alt="AFRILECTRICAL Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Logo>
        <NavLinks>
          <li>
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton 
                onClick={toggleDropdown}
                $isDropdownOpen={isDropdownOpen}
                className={isDropdownOpen ? 'open' : ''}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Solutions
                <DropdownArrow
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </DropdownArrow>
              </DropdownButton>
              <AnimatePresence>
                {isDropdownOpen && (
                  <DropdownMenu
                    $isOpen={isDropdownOpen}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <DropdownList>
                      {solutionItems.map((item, index) => (
                        <DropdownItem
                          key={item.path}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          variants={itemVariants}
                        >
                          <DropdownLink 
                            to={item.path} 
                            onClick={closeDropdown}
                            whileHover={{ 
                              x: 12,
                              scale: 1.02,
                              transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{item.label}</span>
                            <ArrowIcon />
                          </DropdownLink>
                        </DropdownItem>
                      ))}
                    </DropdownList>
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </DropdownContainer>
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