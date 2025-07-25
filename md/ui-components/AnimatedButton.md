# AnimatedButton Component

## Purpose
The `AnimatedButton` component is the primary and most feature-rich button component in the UI library. It provides a visually engaging and interactive button with extensive styling options, animations, and states like loading and disabled. It is designed for most button use cases across the application.

## Key Features
- **Comprehensive Variants:** Supports a wide range of visual styles (`primary`, `secondary`, `accent`, `outline`, `ghost`, `gradient`) to fit various contexts and design needs.
- **Flexible Size Options:** Available in `small`, `medium`, `large`, and `xl` sizes for precise control over visual hierarchy.
- **Icon Support:** Can display an `Icon` component on either the left or right side of the button text.
- **Loading State:** Shows a spinning indicator and applies a shimmer effect when in a loading state, providing clear feedback to the user.
- **Disabled State:** Visually indicates when the button is not interactive, preventing unintended actions.
- **Layout Options:** Can span the full width of its parent container (`fullWidth`) and apply fully rounded corners (`rounded`).
- **Visual Effects:** Includes optional `glow` effect for emphasis and a `rippleEffect` for a material-design-like interactive feedback on click.
- **Framer Motion Animations:** Leverages `framer-motion` for smooth hover, tap, and entry animations, enhancing user experience.

## Props
- `children`: The content to be displayed inside the button (e.g., text, other React nodes).
- `variant`: (Optional) Visual style of the button. Accepts `'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient'`. Defaults to `primary`.
- `size`: (Optional) Size of the button. Accepts `'small' | 'medium' | 'large' | 'xl'`. Defaults to `medium`.
- `icon`: (Optional) The string name of the icon to display (from the `Icon` component's available set).
- `iconPosition`: (Optional) Position of the icon (`'left'` or `'right'`). Defaults to `'left'`.
- `loading`: (Optional) If `true`, the button shows a loading spinner and shimmer effect. Defaults to `false`.
- `disabled`: (Optional) If `true`, the button is disabled. Defaults to `false`.
- `fullWidth`: (Optional) If `true`, the button takes up 100% width. Defaults to `false`.
- `rounded`: (Optional) If `true`, the button has fully rounded corners. Defaults to `false`.
- `glow`: (Optional) If `true`, the button has a subtle glow effect. Defaults to `false`.
- `rippleEffect`: (Optional) If `true`, a ripple effect is shown on click. Defaults to `true`.
- `onClick`: (Optional) Callback function triggered on button click.
- `type`: (Optional) HTML button type (`'button' | 'submit' | 'reset'`). Defaults to `'button'`.
- `className`: (Optional) Additional CSS class names.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import AnimatedButton from './components/ui/AnimatedButton';

const MyAnimatedButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
    <AnimatedButton variant="primary" size="large" icon="check" onClick={() => alert('Form Submitted!')}>
      Submit Application
    </AnimatedButton>
    <AnimatedButton variant="outline" loading>
      Processing Data
    </AnimatedButton>
    <AnimatedButton variant="gradient" glow rounded size="xl" icon="star">
      Unlock Premium Features
    </AnimatedButton>
    <AnimatedButton variant="ghost" disabled>
      Cannot Proceed
    </AnimatedButton>
  </div>
);

export default MyAnimatedButtons;
```

## Developer Notes
- This component is the recommended choice for most button implementations due to its rich feature set and animated feedback.
- The simpler `Button` component is available for very basic use cases where the overhead of `framer-motion` animations and advanced features is not desired, or for maintaining backward compatibility.
