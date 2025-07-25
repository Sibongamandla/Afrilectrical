# Card Component

## Purpose
The `Card` component is a flexible container used to group related content and display it in a visually distinct block. It's a fundamental building block for many UI layouts, providing structure and visual hierarchy.

## Key Features
- **Elevation (Shadows):** Supports different levels of elevation (`none`, `low`, `medium`, `high`) to create visual depth and separate content from the background. These correspond to predefined shadow styles in the theme.
- **Padding:** An optional `padding` prop to apply default internal spacing to the card's content.
- **Border:** An optional `bordered` prop to add a subtle border around the card.
- **Hover Effects:** Includes a subtle box-shadow transition on hover for interactive feedback.

## Props
- `children`: The content to be rendered inside the card.
- `elevation`: (Optional) Controls the shadow intensity of the card. Defaults to `low`.
- `padding`: (Optional) If `true`, applies default padding inside the card. Defaults to `false`.
- `bordered`: (Optional) If `true`, adds a border to the card. Defaults to `false`.

## Dependencies
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import Card from './components/ui/Card';
import Typography from './components/ui/Typography';

const MyCards = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Card elevation="medium" padding>
      <Typography variant="h4">Card Title</Typography>
      <Typography variant="body1">This is some content inside a card with medium elevation and padding.</Typography>
    </Card>
    <Card elevation="none" bordered padding>
      <Typography variant="h4">Bordered Card</Typography>
      <Typography variant="body1">This card has no elevation but has a border and padding.</Typography>
    </Card>
  </div>
);

export default MyCards;
```