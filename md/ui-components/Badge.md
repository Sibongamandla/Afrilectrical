# Badge Component

## Purpose
The `Badge` component is a small, customizable indicator used to display a short piece of information, such as a count, status, or label. It's versatile for highlighting new items, notifications, or categorizing content.

## Key Features
- **Multiple Variants:** Supports various color schemes (`primary`, `secondary`, `accent`, `success`, `warning`, `error`, `info`, `neutral`, `gradient`) to convey different meanings.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Shape Customization:** Can be `rounded` (default), `pill` (fully rounded), or `square`.
- **Icon Support:** Can display an icon on either the left or right side.
- **Dot Indicator:** Option to show a small dot, typically used for unread notifications.
- **Animations:** Includes `pulse` animation for attention, `bounce` for new items, and `glow` for emphasis.
- **Outline Style:** Can be rendered with an outline instead of a solid background.
- **Removable:** Can include a close button to allow users to dismiss the badge.
- **Clickable:** Can be made clickable with an `onClick` handler.

## Props
- `children`: The content to be displayed inside the badge (e.g., text, number).
- `variant`: (Optional) Color scheme of the badge. Defaults to `primary`.
- `size`: (Optional) Size of the badge. Defaults to `medium`.
- `shape`: (Optional) Shape of the badge. Defaults to `rounded`.
- `icon`: (Optional) Name of the icon to display.
- `iconPosition`: (Optional) Position of the icon (`left` or `right`). Defaults to `left`.
- `dot`: (Optional) If `true`, displays a small dot indicator. Defaults to `false`.
- `pulse`: (Optional) If `true`, applies a pulsing animation. Defaults to `false`.
- `bounce`: (Optional) If `true`, applies a bouncing animation. Defaults to `false`.
- `glow`: (Optional) If `true`, applies a glowing effect. Defaults to `false`.
- `outline`: (Optional) If `true`, renders the badge with an outline. Defaults to `false`.
- `removable`: (Optional) If `true`, displays a remove button. Defaults to `false`.
- `onRemove`: (Optional) Callback function triggered when the remove button is clicked.
- `onClick`: (Optional) Callback function triggered when the badge is clicked.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import Badge, { BadgeGroup } from './components/ui/Badge';

const MyBadges = () => (
  <BadgeGroup spacing="medium">
    <Badge variant="primary">New</Badge>
    <Badge variant="success" pulse>Active</Badge>
    <Badge variant="warning" size="large" icon="alert-triangle">Warning</Badge>
    <Badge variant="error" shape="pill" removable onRemove={() => console.log('Removed!')}>Error</Badge>
    <Badge variant="info" dot>Updates</Badge>
    <Badge variant="gradient" glow onClick={() => alert('Badge clicked!')}>Premium</Badge>
  </BadgeGroup>
);

export default MyBadges;
```