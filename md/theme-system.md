# Theme System Documentation

This document provides comprehensive documentation for the AfriLectrical React theme system, including usage patterns, available properties, and best practices.

## Overview

The theme system provides a centralized design system that ensures consistency across all components. It's built using TypeScript for type safety and styled-components for seamless integration.

## Theme Structure

### Color System

The theme includes a comprehensive color palette designed for electrical engineering branding:

#### Primary Colors
```typescript
colors: {
  primary: '#e31e24',           // AfriLectrical red
  primaryLight: '#ff5252',      // Lighter variant
  primaryDark: '#b71c1c',       // Darker variant
  primaryAlpha: 'rgba(227, 30, 36, 0.1)', // Transparent variant
}
```

#### Secondary & Accent Colors
```typescript
secondary: '#0066cc',          // Professional blue
secondaryLight: '#4d94ff',
secondaryDark: '#004c99',
secondaryAlpha: 'rgba(0, 102, 204, 0.1)',

accent: '#ff9800',             // Orange for interactive elements
accentLight: '#ffb74d',
accentDark: '#f57c00',
accentAlpha: 'rgba(255, 152, 0, 0.1)',
```

#### Gradient System
```typescript
gradient: {
  primary: 'linear-gradient(135deg, #e31e24 0%, #b71c1c 100%)',
  secondary: 'linear-gradient(135deg, #0066cc 0%, #004c99 100%)',
  accent: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
  sunset: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 50%, #ffcc02 100%)',
  ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  forest: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  royal: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}
```

#### Neutral Colors
```typescript
white: '#ffffff',
black: '#000000',
background: '#fafafa',
backgroundDark: '#f5f5f5',
lightGrey: '#f5f5f5',
grey: '#9e9e9e',
darkGrey: '#616161',
charcoal: '#2c2c2c',
text: '#333333',
textLight: '#666666',
textMuted: '#999999',
heading: '#212121',
```

#### Functional Colors
```typescript
// Success states
success: '#4caf50',
successLight: '#81c784',
successDark: '#388e3c',
successAlpha: 'rgba(76, 175, 80, 0.1)',

// Warning states
warning: '#ff9800',
warningLight: '#ffb74d',
warningDark: '#f57c00',
warningAlpha: 'rgba(255, 152, 0, 0.1)',

// Error states
error: '#f44336',
errorLight: '#e57373',
errorDark: '#d32f2f',
errorAlpha: 'rgba(244, 67, 54, 0.1)',

// Info states
info: '#2196f3',
infoLight: '#64b5f6',
infoDark: '#1976d2',
infoAlpha: 'rgba(33, 150, 243, 0.1)',
```

#### Special Effects
```typescript
// Glass morphism
glass: {
  light: 'rgba(255, 255, 255, 0.1)',
  medium: 'rgba(255, 255, 255, 0.2)',
  dark: 'rgba(0, 0, 0, 0.1)',
},

// UI elements
highlight: '#f2622a',
surface: '#ffffff',
surfaceElevated: '#ffffff',
border: '#e0e0e0',
borderLight: '#f0f0f0',
borderDark: '#d0d0d0',
```

### Typography System

#### Font Families
```typescript
typography: {
  fontFamily: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  }
}
```

#### Font Sizes
```typescript
fontSize: {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  md: '1.125rem',   // 18px
  lg: '1.25rem',    // 20px
  xl: '1.5rem',     // 24px
  xxl: '2rem',      // 32px
  xxxl: '2.5rem',   // 40px
  display: '3rem',  // 48px
}
```

#### Font Weights
```typescript
fontWeight: {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}
```

#### Line Heights & Letter Spacing
```typescript
lineHeight: {
  tight: 1.2,
  base: 1.5,
  relaxed: 1.75,
},

letterSpacing: {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}
```

### Responsive Breakpoints

```typescript
breakpoints: {
  xs: '480px',   // Extra small devices
  sm: '576px',   // Small devices
  md: '768px',   // Medium devices (tablets)
  lg: '992px',   // Large devices (desktops)
  xl: '1200px',  // Extra large devices
  xxl: '1400px', // Ultra wide screens
}
```

### Spacing System

Based on 4px increments for consistent spacing:

```typescript
spacing: {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  xxl: '3rem',    // 48px
}
```

### Border Radius

```typescript
borderRadius: {
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  round: '50%',
}
```

### Shadow System

```typescript
shadows: {
  sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  lg: '0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)',
  xl: '0 15px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
}
```

### Transitions

```typescript
transitions: {
  fast: '0.15s ease',
  base: '0.3s ease',
  slow: '0.5s ease',
  normal: '0.3s ease',
}
```

### Z-Index Scale

```typescript
zIndex: {
  hide: -1,
  base: 0,
  raised: 1,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
  header: 90,
}
```

## Usage Patterns

### Basic Usage in Styled Components

```typescript
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  }
`;
```

### Responsive Design Patterns

```typescript
const ResponsiveContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `0 ${theme.spacing.xs}`};
  }
`;
```

### Color Variations

```typescript
const StatusCard = styled.div<{ status: 'success' | 'warning' | 'error' }>`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  ${({ theme, status }) => {
    switch (status) {
      case 'success':
        return `
          background-color: ${theme.colors.successAlpha};
          border: 1px solid ${theme.colors.success};
          color: ${theme.colors.successDark};
        `;
      case 'warning':
        return `
          background-color: ${theme.colors.warningAlpha};
          border: 1px solid ${theme.colors.warning};
          color: ${theme.colors.warningDark};
        `;
      case 'error':
        return `
          background-color: ${theme.colors.errorAlpha};
          border: 1px solid ${theme.colors.error};
          color: ${theme.colors.errorDark};
        `;
      default:
        return `
          background-color: ${theme.colors.surface};
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.text};
        `;
    }
  }}
`;
```

## Best Practices

### 1. Always Use Theme Variables
❌ **Avoid hardcoded values:**
```typescript
const BadButton = styled.button`
  background: #e31e24;
  padding: 16px;
  border-radius: 8px;
`;
```

✅ **Use theme variables:**
```typescript
const GoodButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
```

### 2. Consistent Spacing
Use the spacing scale for all margins, paddings, and gaps:

```typescript
const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  > * + * {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;
```

### 3. Responsive Typography
```typescript
const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.display};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;
```

### 4. Consistent Shadows and Elevations
```typescript
const Card = styled.div<{ elevation?: 'low' | 'medium' | 'high' }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  ${({ theme, elevation = 'medium' }) => {
    switch (elevation) {
      case 'low':
        return `box-shadow: ${theme.shadows.sm};`;
      case 'medium':
        return `box-shadow: ${theme.shadows.md};`;
      case 'high':
        return `box-shadow: ${theme.shadows.lg};`;
    }
  }}
`;
```

## TypeScript Integration

The theme is fully typed for excellent developer experience:

```typescript
// Theme interface is automatically available
const MyComponent = styled.div`
  // TypeScript will provide autocomplete for theme properties
  color: ${({ theme }) => theme.colors.primary}; // ✅ Autocomplete works
  background: ${({ theme }) => theme.colors.nonExistent}; // ❌ TypeScript error
`;
```

## Extending the Theme

To add new properties to the theme:

1. **Update the theme object** in `src/theme.ts`
2. **Update the TypeScript interface** in the same file
3. **Use the new properties** in your components

```typescript
// Add to theme object
export const theme = {
  // ... existing properties
  customProperty: {
    newValue: '10px',
  },
};

// Add to TypeScript interface
declare module 'styled-components' {
  export interface DefaultTheme {
    // ... existing properties
    customProperty: {
      newValue: string;
    };
  }
}
```

This theme system ensures consistent, maintainable, and scalable styling across the entire AfriLectrical React application.