# Container Component

## Purpose
The `Container` component provides a consistent maximum width and horizontal padding for content, ensuring readability and a structured layout across the application. It helps in centering content and maintaining visual harmony.

## Key Features
- **Fixed Max Width:** Content is constrained within a maximum width, preventing it from stretching too wide on large screens.
- **Fluid Option:** Can be set to `fluid` to take up the full width of its parent, overriding the `maxWidth`.
- **Customizable Max Width:** Supports predefined maximum widths (`xs`, `sm`, `md`, `lg`, `xl`, `none`) to control content area size.
- **Horizontal Padding:** Automatically applies responsive horizontal padding to ensure content doesn't touch the edges of the viewport.
- **Vertical Padding:** An optional `padding` prop to apply default vertical spacing above and below the content.

## Props
- `children`: The content to be rendered inside the container.
- `fluid`: (Optional) If `true`, the container takes 100% width. Defaults to `false`.
- `maxWidth`: (Optional) Sets the maximum width of the container. Defaults to `lg` (1200px).
- `padding`: (Optional) If `true`, applies default vertical padding. Defaults to `false`.

## Dependencies
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import Container from './components/ui/Container';
import Typography from './components/ui/Typography';

const MyPageLayout = () => (
  <Container maxWidth="md" padding>
    <Typography variant="h2">Welcome to My Section</Typography>
    <Typography variant="body1">
      This content is centered and constrained within a medium-sized container, with vertical padding.
    </Typography>
  </Container>
);

export default MyPageLayout;
```