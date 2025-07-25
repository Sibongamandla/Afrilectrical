# Typography Component

## Purpose
The `Typography` component provides a consistent way to display text content with predefined styles, ensuring visual hierarchy and readability across the application. It abstracts away direct styling of text elements.

## Key Features
- **Semantic Variants:** Supports a wide range of semantic text variants (`h1` to `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `caption`, `overline`, `button`), each with predefined font sizes, weights, and line heights.
- **Text Alignment:** Allows setting text alignment (`left`, `center`, `right`, `justify`).
- **Color Customization:** Can apply predefined theme colors (`primary`, `secondary`, `text`, `white`, `black`, `error`, `success`, `warning`).
- **Font Weight:** Override default font weights with `light`, `regular`, `medium`, `semibold`, `bold`.
- **Gutter Bottom:** Adds a bottom margin for spacing below the text.
- **No Wrap:** Prevents text from wrapping and truncates it with an ellipsis if it overflows.
- **Responsive Sizing:** Headings (`h1`, `h2`) are designed to scale responsively based on screen size.

## Props
- `children`: The text content to be displayed.
- `variant`: (Optional) The predefined text style to apply. Defaults to `body1`.
- `align`: (Optional) Horizontal alignment of the text. Defaults to `left`.
- `color`: (Optional) The color of the text. Defaults to the theme's default text color.
- `weight`: (Optional) The font weight of the text. Overrides the variant's default weight.
- `gutterBottom`: (Optional) If `true`, adds a bottom margin to the text. Defaults to `false`.
- `noWrap`: (Optional) If `true`, prevents text from wrapping and truncates with ellipsis. Defaults to `false`.

## Dependencies
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import Typography from './components/ui/Typography';

const MyTypography = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h1" align="center" gutterBottom>Welcome to Afrilectrical</Typography>
    <Typography variant="h2" color="primary" gutterBottom>Our Services</Typography>
    <Typography variant="body1" gutterBottom>
      We provide comprehensive electrical engineering solutions across Africa.
    </Typography>
    <Typography variant="body2" color="text" noWrap>
      This is a long line of text that will be truncated if it overflows its container.
    </Typography>
    <Typography variant="caption" weight="bold" style={{ display: 'block', marginTop: '10px' }}>
      Small print details.
    </Typography>
    <Typography variant="button" color="success" style={{ display: 'block', marginTop: '10px' }}>
      Learn More
    </Typography>
  </div>
);

export default MyTypography;
```