# ProgressIndicator Component

## Purpose
The `ProgressIndicator` component provides visual feedback to users about the status of a process or the completion of a task. It can represent determinate progress (a specific percentage) or indeterminate progress (an ongoing activity).

## Key Features
- **Multiple Variants:** Supports different visual styles: `linear` (progress bar), `circular` (spinner), `dots` (bouncing dots), and `wave` (animated bars).
- **Determinate & Indeterminate:** Can show a specific `value` (0-100) for determinate progress or an `indeterminate` animation for ongoing processes.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Color Schemes:** Customizable with various color schemes (`primary`, `secondary`, `accent`, `success`, `warning`, `error`).
- **Label Display:** Can optionally display a `label` or the percentage value.
- **Custom Thickness:** For linear and circular variants, the thickness of the indicator can be adjusted.
- **Framer Motion Animations:** Uses `framer-motion` for smooth transitions and animations.

## Props
- `value`: (Optional) A number from 0 to 100 representing the progress. Used for determinate progress. Defaults to `0`.
- `variant`: (Optional) The visual style of the indicator. Defaults to `linear`.
- `size`: (Optional) The size of the indicator. Defaults to `medium`.
- `color`: (Optional) The color scheme of the indicator. Defaults to `primary`.
- `indeterminate`: (Optional) If `true`, the indicator shows an ongoing animation without a specific value. Defaults to `false`.
- `showLabel`: (Optional) If `true`, displays a label (percentage or custom text). Defaults to `false`.
- `label`: (Optional) Custom text to display as a label. Overrides percentage if `showLabel` is `true`.
- `thickness`: (Optional) The thickness of the linear bar or circular stroke. Overrides default size thickness.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import ProgressIndicator from './components/ui/ProgressIndicator';

const MyProgressIndicators = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
    <h3>Linear Progress</h3>
    <ProgressIndicator value={75} showLabel label="Uploading Files" />
    <ProgressIndicator indeterminate color="secondary" size="large" showLabel label="Processing..." />

    <h3>Circular Progress</h3>
    <ProgressIndicator variant="circular" value={60} showLabel color="success" />
    <ProgressIndicator variant="circular" indeterminate size="small" color="error" />

    <h3>Dots Progress</h3>
    <ProgressIndicator variant="dots" indeterminate color="accent" />

    <h3>Wave Progress</h3>
    <ProgressIndicator variant="wave" indeterminate color="primary" size="large" />
  </div>
);

export default MyProgressIndicators;
```