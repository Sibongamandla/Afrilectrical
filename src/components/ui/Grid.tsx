import React from 'react';
import styled, { css } from 'styled-components';

type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type GridJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type GridAlign = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

interface GridContainerProps {
  children: React.ReactNode;
  gap?: GridGap;
  columnGap?: GridGap;
  rowGap?: GridGap;
  columns?: GridColumns;
  justifyContent?: GridJustify;
  alignItems?: GridAlign;
  className?: string;
  fluid?: boolean;
}

interface GridItemProps {
  children: React.ReactNode;
  xs?: GridColumns;
  sm?: GridColumns;
  md?: GridColumns;
  lg?: GridColumns;
  xl?: GridColumns;
  className?: string;
}

const getGapSize = (gap: GridGap, theme: any) => {
  switch (gap) {
    case 'none':
      return '0';
    case 'xs':
      return theme.spacing.xs;
    case 'sm':
      return theme.spacing.sm;
    case 'md':
      return theme.spacing.md;
    case 'lg':
      return theme.spacing.lg;
    case 'xl':
      return theme.spacing.xl;
    default:
      return theme.spacing.md;
  }
};

const getJustifyContent = (justify: GridJustify) => {
  switch (justify) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    default:
      return 'flex-start';
  }
};

const getAlignItems = (align: GridAlign) => {
  switch (align) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'stretch':
      return 'stretch';
    case 'baseline':
      return 'baseline';
    default:
      return 'stretch';
  }
};



const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: 100%;
  
  ${({ gap, theme }) => gap && css`
    gap: ${getGapSize(gap, theme)};
  `}
  
  ${({ columnGap, theme }) => columnGap && css`
    column-gap: ${getGapSize(columnGap, theme)};
  `}
  
  ${({ rowGap, theme }) => rowGap && css`
    row-gap: ${getGapSize(rowGap, theme)};
  `}
  
  ${({ columns }) => columns && columns !== 'auto' && css`
    grid-template-columns: repeat(${columns}, 1fr);
  `}
  
  ${({ columns }) => columns === 'auto' && css`
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `}
  
  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${getJustifyContent(justifyContent)};
  `}
  
  ${({ alignItems }) => alignItems && css`
    align-items: ${getAlignItems(alignItems)};
  `}
  
  ${({ fluid }) => !fluid && css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  `}
`;

const GridItem = styled.div<GridItemProps>`
  ${({ xs }) => xs && css`
    grid-column: span ${xs === 'auto' ? 1 : xs};
  `}
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ sm }) => sm && css`
      grid-column: span ${sm === 'auto' ? 1 : sm};
    `}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ md }) => md && css`
      grid-column: span ${md === 'auto' ? 1 : md};
    `}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ lg }) => lg && css`
      grid-column: span ${lg === 'auto' ? 1 : lg};
    `}
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ xl }) => xl && css`
      grid-column: span ${xl === 'auto' ? 1 : xl};
    `}
  }
`;

const Grid = {
  Container: GridContainer,
  Item: GridItem,
};

export default Grid;