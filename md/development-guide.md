# Development Guide

This guide provides essential information for developers working on the AfriLectrical React project.

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git for version control
- Code editor with TypeScript support (VS Code recommended)

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd afrilectrical-react

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

## Development Workflow

### 1. Project Structure Overview
```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── shared/             # Shared components
│   └── [PageComponents]/   # Page-specific components
├── pages/                  # Application pages
├── styles/                 # Global styles
├── theme.ts               # Design system
└── App.tsx                # Main application
```

### 2. Building New Components

#### UI Component Template
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
  // Use theme variables
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  
  // Responsive design
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
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

#### Adding to UI Index
After creating a component, export it from `src/components/ui/index.ts`:

```typescript
export { default as YourComponent } from './YourComponent';
```

### 3. Building New Pages

#### Page Component Template
```typescript
import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button } from '../components/ui';
import SectionHeader from '../components/shared/SectionHeader';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const YourPage: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Section>
          <SectionHeader
            title="Page Title"
            description="Page description"
            align="center"
          />
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default YourPage;
```

#### Adding to Router
Add your page to `src/App.tsx`:

```typescript
import YourPage from './pages/YourPage';

// In the Routes component
<Route path="/your-page" element={<YourPage />} />
```

### 4. Working with the Theme

#### Using Theme Values
```typescript
const ThemedComponent = styled.div`
  // Colors
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  
  // Spacing
  padding: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg};
  
  // Typography
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  
  // Borders
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  // Transitions
  transition: all ${({ theme }) => theme.transitions.normal};
`;
```

#### Responsive Design
```typescript
const ResponsiveComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
```

## Common Patterns

### 1. Form Handling
```typescript
import { useState } from 'react';
import { Input, Button } from '../components/ui';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

### 2. Animation with Framer Motion
```typescript
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h2>Animated Content</h2>
    </motion.div>
  );
};
```

### 3. Image Optimization
```typescript
import { OptimizedImage } from '../components/ui';

const ImageComponent = () => {
  return (
    <OptimizedImage
      src="/images/hero-image.jpg"
      alt="Description"
      width="100%"
      height="400px"
      lazy
      placeholder="/images/placeholder.jpg"
    />
  );
};
```

## Code Quality Guidelines

### 1. TypeScript Best Practices
- Always define interfaces for props
- Use strict type checking
- Avoid `any` types
- Use proper generic types

### 2. Component Guidelines
- Keep components focused and single-purpose
- Use composition over complex props
- Implement proper error boundaries
- Include loading states

### 3. Styling Guidelines
- Always use theme variables
- Implement mobile-first responsive design
- Use semantic HTML elements
- Follow accessibility guidelines

### 4. Performance Guidelines
- Use React.memo for expensive components
- Implement code splitting for large pages
- Optimize images and assets
- Minimize bundle size

## Build and Deployment

### Development Build
```bash
# Start development server
npm start

# Run tests
npm test

# Check TypeScript errors
npx tsc --noEmit
```

### Production Build
```bash
# Create production build
npm run build

# Test production build locally
npx serve -s build
```

### Build Verification
Always verify your build before deployment:
1. Run `npm run build` successfully
2. Check for TypeScript errors
3. Test critical user flows
4. Verify responsive design
5. Check accessibility compliance

## Troubleshooting

### Common Issues

#### TypeScript Errors
- Missing prop types: Define proper interfaces
- Theme property errors: Check theme.ts for available properties
- Import errors: Verify file paths and exports

#### Styled Components Issues
- Theme not available: Ensure ThemeProvider wraps your app
- CSS not applying: Check specificity and theme variable usage
- Responsive issues: Verify breakpoint usage

#### Build Failures
- Missing dependencies: Run `npm install`
- TypeScript errors: Check interfaces and type definitions
- Import/export issues: Verify file structure and exports

### Getting Help
1. Check existing documentation in `/md` directory
2. Review similar components for patterns
3. Check the improvements log for known issues
4. Use TypeScript IntelliSense for available props

## Contributing

### Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Write self-documenting code
- Include proper TypeScript interfaces

### Testing
- Test components in isolation
- Verify responsive behavior
- Check accessibility compliance
- Test in different browsers

### Documentation
- Update component documentation for new features
- Include usage examples
- Document breaking changes
- Update the README as needed

This development guide should help you get started quickly and maintain consistency across the codebase.