# OptimizedImage Component

## Purpose
The `OptimizedImage` component provides a robust and efficient way to display images across the application. It centralizes responsive image handling, lazy loading, and consistent application of styling properties like `border-radius` and `box-shadow` from the theme. This ensures visual consistency, improves performance, and simplifies image management.

## Key Features
- **Responsive Image Handling:** Automatically adjusts image display based on container dimensions and `objectFit`.
- **Lazy Loading:** Images are loaded only when they enter the viewport, improving initial page load times and reducing bandwidth usage. This behavior can be toggled via the `lazyLoad` prop.
- **Consistent Styling:** Applies `border-radius` and `box-shadow` from the global theme, ensuring visual cohesiveness.
- **Color Overlay:** Can apply a semi-transparent color overlay on top of the image, with customizable `overlayColor` and `overlayOpacity`.
- **Shadows:** Supports different `shadowIntensity` levels (`light`, `medium`, `strong`, `none`) and a custom `shadowColor`.
- **Customizable Dimensions:** `width` and `height` props allow explicit control over the image container's dimensions.
- **Framer Motion Animations:** Uses `framer-motion` for smooth fade-in animations when the image loads.

## Props
- `src`: (Required) The URL of the image to display.
- `alt`: (Required) The alt text for the image, important for accessibility.
- `width`: (Optional) The CSS width property for the image container (e.g., `'100%'`, `'300px'`). Defaults to `'100%'`.
- `height`: (Optional) The CSS height property for the image container (e.g., `'400px'`, `'50vh'`). Defaults to `'auto'`.
- `objectFit`: (Optional) How the image should be resized to fit its container. Defaults to `'cover'`.
- `shadowColor`: (Optional) A CSS color value for the box shadow.
- `overlayColor`: (Optional) A CSS color value for the overlay. Defaults to the theme's primary color.
- `overlayOpacity`: (Optional) The opacity of the color overlay (0 to 1). Defaults to `0.3`.
- `borderRadius`: (Optional) The CSS border-radius property for the container. Defaults to the theme's medium border radius.
- `shadowIntensity`: (Optional) Predefined intensity of the box shadow (`light`, `medium`, `strong`, `none`). Defaults to `medium`.
- `lazyLoad`: (Optional) If `true`, the image will lazy load when it enters the viewport. Defaults to `true`.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling.

## Usage
```tsx
import React from 'react';
import OptimizedImage from './components/ui/OptimizedImage';

const MyImageSection = () => (
  <div style={{ height: '100vh', overflowY: 'scroll' }}>
    <div style={{ height: '50vh', background: '#f0f0f0' }}>Scroll down...</div>
    <OptimizedImage
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
      alt="Solar farm at sunset"
      height="600px"
      overlayColor="#007bff"
      overlayOpacity={0.4}
      shadowIntensity="strong"
      borderRadius="16px"
      lazyLoad={true}
    />
    <div style={{ height: '50vh', background: '#f0f0f0' }}>More content...</div>
  </div>
);

export default MyImageSection;
```