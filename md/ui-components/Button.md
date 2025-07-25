# Button Component

## Purpose
The `Button` component now serves as a simplified wrapper around the more feature-rich `AnimatedButton` component. Its primary purpose is to provide a basic button interface for cases where advanced animations, loading states, or specific visual effects (like glow or ripple) are not required, while still leveraging the core styling and functionality of `AnimatedButton`.

## Key Features
- **Simplified Interface:** Exposes a subset of `AnimatedButton`'s props for common button use cases.
- **Consistent Styling:** Inherits styling from `AnimatedButton`, ensuring visual consistency across all button types.
- **Basic Variants & Sizes:** Supports standard button variants (`primary`, `secondary`, `outline`, `text`) and sizes (`small`, `medium`, `large`).
- **Icon Support:** Can display an icon on either side of the button text.
- **Full Width Option:** Allows the button to span the full width of its parent container.

## Props
- `children`: The content to be displayed inside the button (e.g., text).
- `variant`: (Optional) Visual style of the button. Inherited from `AnimatedButtonProps`. Defaults to `primary`.
- `size`: (Optional) Size of the button. Inherited from `AnimatedButtonProps`. Defaults to `medium`.
- `fullWidth`: (Optional) If `true`, the button takes up 100% width. Inherited from `AnimatedButtonProps`. Defaults to `false`.
- `icon`: (Optional) Name of the icon to display. Inherited from `AnimatedButtonProps`.
- `iconPosition`: (Optional) Position of the icon (`left` or `right`). Inherited from `AnimatedButtonProps`. Defaults to `left`.
- All other standard HTML button attributes are supported.

## Dependencies
- `AnimatedButton` (UI Component): This component is a direct wrapper around `AnimatedButton`.

## Usage
```tsx
import React from 'react';
import Button from './components/ui/Button';
import { Icon } from './components/ui/Icon';

const MyButtons = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="primary" size="large" onClick={() => alert('Primary Clicked!')}>Primary Button</Button>
    <Button variant="outline" icon="plus">Outline Button</Button>
    <Button variant="text" fullWidth>Text Button</Button>
    <Button variant="secondary" size="small" disabled>Disabled Small</Button>
  </div>
);

export default MyButtons;
```

## Developer Notes
- For advanced button features like loading states, glow effects, ripple effects, or rounded shapes, use the `AnimatedButton` component directly.
- This `Button` component is intended for simpler use cases to maintain a cleaner API for basic interactions.
