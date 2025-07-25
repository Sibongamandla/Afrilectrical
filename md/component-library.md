# Component Library Documentation

This document provides an overview of the AfriLectrical React component library, including usage guidelines, props interfaces, and best practices.

## Component Categories

### 🎨 UI Components (`src/components/ui/`)

The UI component library provides reusable, themeable components for building consistent interfaces.

#### Form Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Input` | Text input with validation states | `type`, `placeholder`, `hasError`, `fullWidth` |
| `Dropdown` | Select dropdown with search | `options`, `placeholder`, `searchable`, `multiple` |
| `Slider` | Range slider for numerical input | `min`, `max`, `value`, `step`, `range` |
| `Switch` | Toggle switch and checkbox | `checked`, `disabled`, `size`, `color` |
| `Tabs` | Tabbed content navigation | `items`, `activeTab`, `variant`, `orientation` |
| `Form` | Form wrapper with validation | `onSubmit`, `validation`, `loading` |

**Example Usage:**
```typescript
import { Input, Button } from '../components/ui';

<Input
  type="email"
  placeholder="Enter your email"
  hasError={!!emailError}
  fullWidth
  onChange={(e) => setEmail(e.target.value)}
/>
```

#### Feedback Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Toast` | Notification messages | `type`, `message`, `duration`, `position` |
| `Modal` | Overlay dialogs | `isOpen`, `onClose`, `size`, `backdrop` |
| `Tooltip` | Contextual help text | `content`, `position`, `trigger` |
| `ProgressIndicator` | Loading and progress states | `value`, `max`, `variant`, `size` |
| `Skeleton` | Loading placeholders | `variant`, `lines`, `animation` |

**Example Usage:**
```typescript
import { Modal, Button } from '../components/ui';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  size="medium"
>
  <h2>Confirm Action</h2>
  <p>Are you sure you want to proceed?</p>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>
```

#### Navigation Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Pagination` | Page navigation | `currentPage`, `totalPages`, `onPageChange` |
| `Accordion` | Collapsible content sections | `items`, `allowMultiple`, `defaultOpen` |

#### Display Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Card` | Content containers | `elevation`, `padding`, `variant` |
| `Badge` | Status indicators | `variant`, `size`, `count` |
| `GradientCard` | Stylized cards with gradients | `gradient`, `overlay`, `content` |
| `Typography` | Text components | `variant`, `color`, `align`, `gutterBottom` |
| `Icon` | Icon system | `name`, `size`, `color` |
| `OptimizedImage` | Responsive images | `src`, `alt`, `lazy`, `placeholder` |

#### Interactive Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `AnimatedButton` | Enhanced buttons with animations | `variant`, `size`, `loading`, `icon` |
| `FloatingActionButton` | Fixed position action button | `icon`, `position`, `actions` |
| `ScrollReveal` | Scroll-triggered animations | `direction`, `delay`, `cascade` |
| `ParallaxImage` | Parallax scrolling images | `src`, `speed`, `overlay` |
| `Carousel` | Image/content carousel | `items`, `autoplay`, `navigation` |
| `AnimatedCounter` | Counting number animations | `from`, `to`, `duration`, `formatter` |

**Example Usage:**
```typescript
import { AnimatedButton, ScrollReveal } from '../components/ui';

<ScrollReveal direction="up" delay={0.2}>
  <AnimatedButton
    variant="primary"
    size="large"
    icon="arrow-right"
    onClick={handleClick}
  >
    Get Started
  </AnimatedButton>
</ScrollReveal>
```

### 🏗️ Layout Components (`src/components/`)

#### Page-Level Components

| Component | Description | Usage |
|-----------|-------------|-------|
| `Header` | Site navigation and branding | Global header with responsive menu |
| `Footer` | Site footer with links | Contact info and navigation links |
| `HeroSection` | Landing page hero areas | Large promotional sections |
| `LoadingIndicator` | Full-page loading state | App initialization loading |

#### Section Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| `AboutSection` | Company information | Mission, values, team |
| `ServicesSection` | Service offerings | Tabbed interface, detailed descriptions |
| `ProjectsSection` | Portfolio showcase | Project grid, filtering |
| `NewsSection` | Latest updates | Article previews, pagination |
| `ClientsSection` | Client testimonials | Logo carousel, testimonials |
| `CallToAction` | Action-oriented sections | Conversion-focused messaging |

#### Shared Components

| Component | Description | Props |
|-----------|-------------|-------|
| `SectionHeader` | Consistent section titles | `title`, `description`, `align` |
| `Container` | Content width wrapper | `maxWidth`, `padding` |
| `Grid` | Layout grid system | `columns`, `gap`, `responsive` |

### 📱 Page Components (`src/pages/`)

#### Main Pages

- **Home**: Landing page with hero, services overview, and featured content
- **About**: Company history, mission, team information
- **Projects**: Portfolio with filtering and detailed project views
- **Services**: Comprehensive service listings with interactive elements
- **Contact**: Contact forms and company information
- **Careers**: Job listings and company culture
- **News**: Blog/news articles with subscription functionality

#### Solution Pages

- **Buildings**: Smart building electrical systems
- **RenewableEnergy**: Solar and sustainable energy solutions
- **Industry**: Industrial automation and control systems
- **RiskAndSafety**: Electrical safety and compliance
- **TransmissionAndDistribution**: Power grid infrastructure
- **TransportationAndMobility**: EV charging and transport electrical
- **UrbanPlanning**: City-wide electrical infrastructure

#### Demo Pages

- **ComponentsDemo**: UI component showcase
- **InteractiveFeatures**: Advanced component demonstrations
- **UIShowcase**: Design system examples

## Component Architecture

### Base Component Pattern

```typescript
import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const StyledComponent = styled.div<ComponentProps>`
  // Theme-based styling
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'small': return theme.spacing.sm;
      case 'large': return theme.spacing.lg;
      default: return theme.spacing.md;
    }
  }};
`;

const Component: React.FC<ComponentProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  return (
    <StyledComponent
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};

export default Component;
```

### Responsive Component Pattern

```typescript
const ResponsiveComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
```

### Animation Component Pattern

```typescript
import { motion } from 'framer-motion';

const AnimatedComponent = styled(motion.div)`
  // Styled component styles
`;

const Component: React.FC = () => {
  return (
    <AnimatedComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      Content
    </AnimatedComponent>
  );
};
```

## Component Usage Guidelines

### 1. Import Organization

```typescript
// React and external libraries first
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Internal UI components
import { Button, Card, Typography } from '../components/ui';

// Shared components
import SectionHeader from '../components/shared/SectionHeader';

// Types (if separate files)
import type { ComponentProps } from './types';
```

### 2. Prop Interfaces

Always define clear TypeScript interfaces:

```typescript
interface ComponentProps {
  // Required props first
  title: string;
  description: string;
  
  // Optional props with defaults
  variant?: 'default' | 'featured';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  
  // Event handlers
  onClick?: () => void;
  onSubmit?: (data: FormData) => void;
  
  // React-specific props
  children?: React.ReactNode;
  className?: string;
}
```

### 3. Component Composition

Favor composition over complex components:

```typescript
// Good: Composable components
<Card>
  <Typography variant="h2" gutterBottom>
    Title
  </Typography>
  <Typography variant="body1">
    Description
  </Typography>
  <Button variant="primary">
    Action
  </Button>
</Card>

// Avoid: Monolithic components with too many props
<ComplexCard
  title="Title"
  description="Description"
  buttonText="Action"
  buttonVariant="primary"
  showImage={true}
  imageUrl="/path/to/image"
  // ... many more props
/>
```

### 4. Theme Integration

Always use theme variables for consistency:

```typescript
const ThemedComponent = styled.div`
  // Colors from theme
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  
  // Spacing from theme
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  // Typography from theme
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  // Responsive breakpoints
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;
```

## Best Practices

### 1. Component Naming
- Use PascalCase for component names
- Be descriptive and specific
- Avoid generic names like `Wrapper` or `Container`

### 2. File Organization
- One component per file
- Use index.ts files for clean exports
- Group related components in directories

### 3. Props Design
- Keep props minimal and focused
- Use composition instead of complex prop interfaces
- Provide sensible defaults
- Use TypeScript for type safety

### 4. Styling Approach
- Use styled-components for component-specific styles
- Leverage the theme system for consistency
- Implement responsive design mobile-first
- Use semantic HTML elements

### 5. Performance Considerations
- Use React.memo for expensive re-renders
- Implement lazy loading for images
- Optimize bundle size with code splitting
- Use proper key props in lists

### 6. Accessibility
- Include proper ARIA attributes
- Ensure keyboard navigation
- Provide alt text for images
- Use semantic HTML structure
- Test with screen readers

This component library provides a solid foundation for building consistent, accessible, and maintainable user interfaces in the AfriLectrical React application.