# ParallaxImage Component

## Purpose
The `ParallaxImage` component displays an image with a parallax scrolling effect, where the image moves at a different speed than the background content, creating a sense of depth and visual interest.

## Key Features
- **Parallax Effect:** The image scrolls at a slower or faster rate than the page, depending on the `speed` and `direction` props.
- **Customizable Speed and Direction:** Control the intensity and direction (`up` or `down`) of the parallax effect.
- **Image Sizing and Fit:** Allows setting a fixed `height` for the container and `objectFit` for how the image should fit within it.
- **Color Overlay:** Can apply a semi-transparent color overlay on top of the image, with customizable `overlayColor` and `overlayOpacity`.
- **Shadows:** Supports different `shadowIntensity` levels (`light`, `medium`, `strong`, `none`) and a custom `shadowColor`.
- **Border Radius:** Customizable `borderRadius` for the image container.
- **Framer Motion Animations:** Uses `framer-motion` for smooth image transformation and initial opacity animation.

## Props
- `src`: (Required) The URL of the image to display.
- `alt`: (Required) The alt text for the image, important for accessibility.
- `speed`: (Optional) The speed of the parallax effect (0 to 1). A higher value means more parallax. Defaults to `0.3`.
- `direction`: (Optional) The direction of the parallax effect (`up` or `down`). Defaults to `up`.
- `height`: (Optional) The CSS height property for the image container (e.g., `'400px'`, `'50vh'`). Defaults to `'400px'`.
- `objectFit`: (Optional) How the image should be resized to fit its container. Defaults to `'cover'`.
- `shadowColor`: (Optional) A CSS color value for the box shadow.
- `overlayColor`: (Optional) A CSS color value for the overlay. Defaults to the theme's primary color.
- `overlayOpacity`: (Optional) The opacity of the color overlay (0 to 1). Defaults to `0.3`.
- `borderRadius`: (Optional) The CSS border-radius property for the container. Defaults to the theme's medium border radius.
- `shadowIntensity`: (Optional) Predefined intensity of the box shadow (`light`, `medium`, `strong`, `none`). Defaults to `medium`.

## Dependencies
- `framer-motion` for animations and scroll transformations.
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import ParallaxImage from './components/ui/ParallaxImage';

const MyParallaxSection = () => (
  <div style={{ height: '100vh', overflowY: 'scroll' }}>
    <div style={{ height: '50vh', background: '#f0f0f0' }}>Scroll down...</div>
    <ParallaxImage
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
      alt="Solar farm at sunset"
      speed={0.5}
      height="600px"
      overlayColor="#007bff"
      overlayOpacity={0.4}
      shadowIntensity="strong"
      borderRadius="16px"
    />
    <div style={{ height: '50vh', background: '#f0f0f0' }}>More content...</div>
  </div>
);

export default MyParallaxSection;
```