# Carousel Component

## Purpose
The `Carousel` component displays a series of items (slides) one at a time, typically with navigation controls. It's used for showcasing images, testimonials, news, or other content in a rotating manner.

## Key Features
- **AutoPlay:** Automatically advances slides at a configurable interval.
- **Navigation Arrows:** Provides left and right arrows for manual navigation.
- **Pagination Dots:** Displays dots at the bottom to indicate the current slide and allow direct navigation.
- **Infinite Loop:** Seamlessly loops through slides, creating a continuous experience.
- **Progress Bar:** Optionally shows a progress bar indicating the time until the next slide transition.
- **Play/Pause Button:** Allows users to pause or resume the auto-play functionality.
- **Pause on Hover:** Automatically pauses auto-play when the user hovers over the carousel.
- **Drag/Swipe Support:** Enables users to navigate slides by dragging or swiping.
- **Customizable Transition:** Configurable transition duration and easing function for smooth slide changes.
- **Image Preloading/Lazy Loading:** Options to preload all images or lazy load them for performance optimization.
- **Accessibility:** Includes ARIA attributes for improved screen reader compatibility and keyboard navigation.
- **`HeroSlide` Sub-component:** A specialized slide component designed for hero sections, featuring background images, titles, subtitles, descriptions, and call-to-action buttons.

## Props
- `items`: An array of React nodes, where each node represents a slide.
- `autoPlay`: (Optional) If `true`, slides advance automatically. Defaults to `true`.
- `interval`: (Optional) Time in milliseconds between slide transitions when `autoPlay` is `true`. Defaults to `5000`.
- `showArrows`: (Optional) If `true`, displays navigation arrows. Defaults to `true`.
- `showDots`: (Optional) If `true`, displays pagination dots. Defaults to `true`.
- `infiniteLoop`: (Optional) If `true`, the carousel loops infinitely. Defaults to `true`.
- `showProgress`: (Optional) If `true`, displays a progress bar. Defaults to `true`.
- `showControls`: (Optional) If `true`, displays the bottom control bar (dots, play/pause). Defaults to `true`.
- `showPlayPause`: (Optional) If `true`, displays the play/pause button. Defaults to `true`.
- `pauseOnHover`: (Optional) If `true`, auto-play pauses on hover. Defaults to `true`.
- `enableDrag`: (Optional) If `true`, enables drag/swipe navigation. Defaults to `true`.
- `transitionDuration`: (Optional) Duration of slide transitions in milliseconds. Defaults to `500`.
- `easing`: (Optional) CSS easing function for transitions. Defaults to `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- `preloadImages`: (Optional) If `true`, preloads all images. Defaults to `true`.
- `lazy`: (Optional) If `true`, lazy loads images. Defaults to `false`.
- `accessibility`: (Optional) Object for accessibility settings (role, label, etc.).
- `onChange`: (Optional) Callback function triggered when the active slide changes.
- `onSlideChange`: (Optional) Callback function triggered when the active slide changes, providing current and previous index.
- `onLoad`: (Optional) Callback function triggered when images are loaded.

## Dependencies
- `styled-components` for styling and keyframe animations.
- `React.useState`, `React.useEffect`, `React.useRef`, `React.useCallback`, `React.useMemo` for state and lifecycle management.

## Usage
```tsx
import React from 'react';
import Carousel, { HeroSlide } from './components/ui/Carousel';

const slides = [
  <HeroSlide
    key="slide1"
    subtitle="Innovation"
    title="Cutting-Edge Solutions"
    description="We deliver advanced electrical engineering solutions."
    backgroundImage="/images/slide1.jpg"
    buttonText="Discover More"
    onButtonClick={() => console.log('Slide 1 CTA')}
  />,
  <HeroSlide
    key="slide2"
    subtitle="Sustainability"
    title="Green Energy Future"
    description="Committed to sustainable and renewable energy projects."
    backgroundImage="/images/slide2.jpg"
    buttonText="Learn About Green Energy"
    onButtonClick={() => console.log('Slide 2 CTA')}
  />,
];

const MyCarousel = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Carousel items={slides} autoPlay interval={7000} showArrows showDots infiniteLoop />
  </div>
);

export default MyCarousel;
```