# GradientCard Component

## Purpose
The `GradientCard` component is a visually appealing container that uses CSS gradients for its background, providing a modern and dynamic look. It can be used to highlight important content or create engaging sections.

## Key Features
- **Gradient Backgrounds:** Supports various predefined gradient variants (`primary`, `secondary`, `accent`, `neutral`, `glass`) for diverse visual effects.
- **Size Options:** Offers `small`, `medium`, and `large` sizes to control the card's minimum height.
- **Hover Effects:** Includes optional hover animations (translateY and box-shadow) for interactive feedback.
- **Glow Effect:** Can apply a subtle pulsing glow animation for added emphasis.
- **Loading State:** Displays a shimmer animation when in a loading state.
- **Clickable:** Can be made clickable with an `onClick` handler.
- **Customizable Padding and Border Radius:** Allows control over internal spacing and corner roundness.
- **Framer Motion Animations:** Utilizes `framer-motion` for smooth entry, hover, and tap animations.

## Props
- `children`: The content to be rendered inside the card.
- `variant`: (Optional) Defines the gradient style. Defaults to `neutral`.
- `size`: (Optional) Sets the minimum height of the card. Defaults to `medium`.
- `hover`: (Optional) If `true`, applies hover effects. Defaults to `true`.
- `glow`: (Optional) If `true`, applies a pulsing glow animation. Defaults to `false`.
- `loading`: (Optional) If `true`, displays a shimmer loading animation. Defaults to `false`.
- `onClick`: (Optional) Callback function triggered when the card is clicked.
- `padding`: (Optional) Controls the internal padding. Defaults to `medium`.
- `borderRadius`: (Optional) Controls the border radius. Defaults to `medium`.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import GradientCard from './components/ui/GradientCard';
import Typography from './components/ui/Typography';

const MyGradientCards = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
    <GradientCard variant="primary" size="large" hover glow>
      <Typography variant="h4" color="white">Primary Focus</Typography>
      <Typography variant="body2" color="white">This card highlights key information with a primary gradient and glow.</Typography>
    </GradientCard>
    <GradientCard variant="glass" padding="large" onClick={() => alert('Glass card clicked!')}>
      <Typography variant="h4">Glass Effect</Typography>
      <Typography variant="body2">A transparent card with a frosted glass effect.</Typography>
    </GradientCard>
  </div>
);

export default MyGradientCards;
```