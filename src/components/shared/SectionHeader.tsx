import React from 'react';
import styled from 'styled-components';
import Typography from '../ui/Typography';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

const StyledSectionHeader = styled.div<{
  align: 'left' | 'center' | 'right';
}>`
  text-align: ${({ align }) => align};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 800px;
  margin-left: ${({ align }) => (align === 'center' ? 'auto' : '0')};
  margin-right: ${({ align }) => (align === 'center' ? 'auto' : '0')};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  align = 'center',
  className,
  style,
}) => {
  return (
    <StyledSectionHeader align={align} className={className} style={style}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text">
          {description}
        </Typography>
      )}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
