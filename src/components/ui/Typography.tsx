import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { animationMixins, reducedMotionSupport } from '../../styles/animations';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'button';
type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
type TypographyColor = 'primary' | 'secondary' | 'text' | 'textSecondary' | 'textMuted' | 'white' | 'black' | 'error' | 'success' | 'warning' | 'heading';
type TypographyWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

interface TypographyProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  color?: TypographyColor;
  weight?: TypographyWeight;
  gutterBottom?: boolean;
  noWrap?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  animated?: boolean;
  delay?: number;
}

const getTypographyStyles = (variant: TypographyVariant, theme: any) => {
  switch (variant) {
    case 'h1':
      return css`
        font-size: ${theme.typography.fontSize.xxl};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        
        @media (min-width: ${theme.breakpoints.md}) {
          font-size: calc(${theme.typography.fontSize.xxl} * 1.5);
        }
      `;
    case 'h2':
      return css`
        font-size: calc(${theme.typography.fontSize.xl} * 1.2);
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        
        @media (min-width: ${theme.breakpoints.md}) {
          font-size: calc(${theme.typography.fontSize.xl} * 1.4);
        }
      `;
    case 'h3':
      return css`
        font-size: ${theme.typography.fontSize.xl};
        font-weight: ${theme.typography.fontWeight.semibold};
        line-height: ${theme.typography.lineHeight.tight};
      `;
    case 'h4':
      return css`
        font-size: ${theme.typography.fontSize.lg};
        font-weight: ${theme.typography.fontWeight.semibold};
        line-height: ${theme.typography.lineHeight.tight};
      `;
    case 'h5':
      return css`
        font-size: calc(${theme.typography.fontSize.md} * 1.1);
        font-weight: ${theme.typography.fontWeight.semibold};
        line-height: ${theme.typography.lineHeight.normal};
      `;
    case 'h6':
      return css`
        font-size: ${theme.typography.fontSize.md};
        font-weight: ${theme.typography.fontWeight.semibold};
        line-height: ${theme.typography.lineHeight.normal};
      `;
    case 'subtitle1':
      return css`
        font-size: ${theme.typography.fontSize.md};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
      `;
    case 'subtitle2':
      return css`
        font-size: ${theme.typography.fontSize.sm};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
      `;
    case 'body1':
      return css`
        font-size: ${theme.typography.fontSize.md};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.relaxed};
      `;
    case 'body2':
      return css`
        font-size: ${theme.typography.fontSize.sm};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.relaxed};
      `;
    case 'caption':
      return css`
        font-size: ${theme.typography.fontSize.xs};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.normal};
      `;
    case 'overline':
      return css`
        font-size: ${theme.typography.fontSize.xs};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        text-transform: uppercase;
        letter-spacing: 1px;
      `;
    case 'button':
      return css`
        font-size: ${theme.typography.fontSize.sm};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      `;
    default:
      return css`
        font-size: ${theme.typography.fontSize.md};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.normal};
      `;
  }
};

const getComponent = (variant: TypographyVariant) => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
    case 'overline':
    case 'button':
      return 'span';
    default:
      return 'p';
  }
};

const StyledTypography = styled(motion.div)<TypographyProps>`
  margin: 0;
  
  ${({ variant = 'body1', theme }) => getTypographyStyles(variant, theme)};
  
  ${({ align }) => align && css`text-align: ${align};`};
  
  ${({ color, theme }) => color && css`color: ${theme.colors[color] || theme.colors.text};`};
  
  ${({ weight, theme }) => weight && css`font-weight: ${theme.typography.fontWeight[weight]};`};
  
  ${({ gutterBottom, theme }) => gutterBottom && css`margin-bottom: ${theme.spacing.md};`};
  
  ${({ noWrap }) => noWrap && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};
  
  /* Enhanced typography for better readability */
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  
  /* Subtle interactive effects for headings */
  ${({ variant, color }) => (variant?.startsWith('h') || variant?.startsWith('subtitle')) && css`
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => 
        color === 'primary' || color === 'heading' 
          ? theme.colors.primaryDark 
          : theme.colors.primary};
    }
  `}
  
  /* Reduced motion support */
  ${reducedMotionSupport}
`;

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  align,
  color,
  weight,
  gutterBottom = false,
  noWrap = false,
  className,
  style,
  children,
  animated = true,
  delay = 0,
  ...props
}) => {
  const isHeading = variant?.startsWith('h') || variant?.startsWith('subtitle');
  
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      y: isHeading ? 30 : 15,
      scale: isHeading ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: isHeading ? 0.6 : 0.4,
        delay: delay,
        ease: "easeOut" as const,
      }
    }
  };

  return (
    <StyledTypography
      as={getComponent(variant)}
      variant={variant}
      align={align}
      color={color}
      weight={weight}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      className={className}
      style={style}
      initial={animated ? "hidden" : false}
      animate={animated ? "visible" : false}
      variants={animated ? animationVariants : undefined}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;