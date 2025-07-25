# Tooltip Component

## Purpose
The `Tooltip` component displays a small, contextual pop-up that provides additional information or a description when a user hovers over, clicks, or focuses on an element. It enhances usability by offering helpful hints without cluttering the main interface.

## Key Features
- **Multiple Triggers:** Can be activated on `hover` (default), `click`, `focus`, or `manual` control.
- **Customizable Placement:** Supports various placements around the target element (`top`, `bottom`, `left`, `right`, and combinations like `top-start`, `bottom-end`).
- **Configurable Delay:** Control the delay before the tooltip appears (`delay`) and disappears (`hideDelay`).
- **Arrow Indicator:** Can display a small arrow pointing to the triggered element.
- **Offset:** Adjust the distance between the tooltip and the trigger element.
- **Max Width:** Limit the maximum width of the tooltip content.
- **Variants and Sizes:** Supports different visual styles (`default`, `dark`, `light`, `primary`, `success`, `warning`, `error`) and sizes (`small`, `medium`, `large`).
- **Interactive Content:** If `interactive` is `true`, the tooltip content can be interacted with (e.g., clickable links) without immediately disappearing.
- **Controlled Visibility:** Can be controlled externally via the `visible` prop and `onVisibleChange` callback.
- **Framer Motion Animations:** Uses `framer-motion` for smooth fade and scale animations.
- **Portal Rendering:** Renders the tooltip in a `Portal` to ensure it overlays all other content and avoids z-index issues.

## Props
- `children`: (Required) The element that triggers the tooltip.
- `content`: (Required) The content to be displayed inside the tooltip.
- `placement`: (Optional) Position of the tooltip relative to the trigger. Defaults to `top`.
- `trigger`: (Optional) Event that triggers the tooltip. Defaults to `hover`.
- `delay`: (Optional) Delay in milliseconds before the tooltip appears. Defaults to `0`.
- `hideDelay`: (Optional) Delay in milliseconds before the tooltip disappears. Defaults to `0`.
- `disabled`: (Optional) If `true`, the tooltip will not appear. Defaults to `false`.
- `arrow`: (Optional) If `true`, displays a small arrow. Defaults to `true`.
- `offset`: (Optional) Distance between the tooltip and the trigger in pixels. Defaults to `8`.
- `maxWidth`: (Optional) Maximum width of the tooltip content in pixels. Defaults to `200`.
- `variant`: (Optional) Visual style of the tooltip. Defaults to `default`.
- `size`: (Optional) Size of the tooltip. Defaults to `medium`.
- `interactive`: (Optional) If `true`, the tooltip content can be interacted with. Defaults to `false`.
- `visible`: (Optional) Controls the visibility of the tooltip (controlled component).
- `onVisibleChange`: (Optional) Callback function triggered when the tooltip's visibility changes.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling and keyframe animations.
- `react-dom/client` for `createPortal`.

## Usage
```tsx
import React from 'react';
import Tooltip from './components/ui/Tooltip';
import Button from './components/ui/Button';

const MyTooltips = () => (
  <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
    <Tooltip content="This is a default tooltip!" placement="top">
      <Button>Hover Me (Top)</Button>
    </Tooltip>

    <Tooltip content="Click to see more info." placement="bottom" trigger="click" interactive>
      <Button>Click Me (Bottom)</Button>
    </Tooltip>

    <Tooltip content="A very long message that wraps nicely within the max width." placement="right" maxWidth={150} variant="dark">
      <Button>Hover Me (Right, Long)</Button>
    </Tooltip>

    <Tooltip content="Success!" placement="left" variant="success" size="large">
      <Button>Hover Me (Left, Success)</Button>
    </Tooltip>
  </div>
);

export default MyTooltips;
```