# FloatingActionButton Component

## Purpose
The `FloatingActionButton` (FAB) is a circular button that triggers a primary action on a screen. It floats above the UI and is designed to be visually prominent and easily accessible.

## Key Features
- **Prominent Placement:** Typically positioned at the bottom-right of the screen, but customizable to other corners.
- **Icon-Based:** Displays a single icon representing its action.
- **Multiple Sizes:** Available in `small`, `medium`, and `large` sizes.
- **Variant Styling:** Supports different color variants (`primary`, `secondary`, `accent`).
- **Tooltip Support:** Can display a tooltip on hover to describe its action.
- **Animations:** Includes optional floating animation and a pulse effect to draw attention.
- **Framer Motion Integration:** Uses `framer-motion` for smooth entry, hover, and tap animations.

## Props
- `icon`: The name of the icon to display within the FAB.
- `onClick`: Callback function triggered when the FAB is clicked.
- `position`: (Optional) Specifies the corner where the FAB should be placed (`bottom-right`, `bottom-left`, `top-right`, `top-left`). Defaults to `bottom-right`.
- `size`: (Optional) Size of the FAB (`small`, `medium`, `large`). Defaults to `medium`.
- `variant`: (Optional) Color variant of the FAB (`primary`, `secondary`, `accent`). Defaults to `primary`.
- `tooltip`: (Optional) Text to display in a tooltip on hover.
- `animate`: (Optional) If `true`, applies a subtle floating animation. Defaults to `true`.
- `pulse`: (Optional) If `true`, applies a pulsing animation to draw attention. Defaults to `false`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying the icon.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import FloatingActionButton from './components/ui/FloatingActionButton';

const MyFAB = () => (
  <FloatingActionButton
    icon="plus"
    onClick={() => alert('Add new item!')}
    position="bottom-right"
    size="large"
    variant="accent"
    tooltip="Add New Item"
    pulse
  />
);

export default MyFAB;
```