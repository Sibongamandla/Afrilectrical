import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  padding?: boolean;
  className?: string;
}

const getMaxWidth = (maxWidth: ContainerProps['maxWidth'], theme: any) => {
  switch (maxWidth) {
    case 'xs':
      return css`max-width: 576px;`;
    case 'sm':
      return css`max-width: 768px;`;
    case 'md':
      return css`max-width: 992px;`;
    case 'lg':
      return css`max-width: 1200px;`;
    case 'xl':
      return css`max-width: 1400px;`;
    case 'none':
      return css`max-width: none;`;
    default:
      return css`max-width: 1200px;`;
  }
};

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  ${({ fluid }) => !fluid && css`
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-left: ${({ theme }) => theme.spacing.lg};
      padding-right: ${({ theme }) => theme.spacing.lg};
    }
  `}
  
  ${({ maxWidth, theme }) => getMaxWidth(maxWidth, theme)}
  
  ${({ padding, theme }) => padding && css`
    padding-top: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.lg};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding-top: ${theme.spacing.xl};
      padding-bottom: ${theme.spacing.xl};
    }
  `}
`;

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  maxWidth = 'lg',
  padding = false,
  className,
  ...props
}) => {
  return (
    <StyledContainer
      fluid={fluid}
      maxWidth={maxWidth}
      padding={padding}
      className={className}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;