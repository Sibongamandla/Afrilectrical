# ScrollReveal Component

## Purpose
The `ScrollReveal` component provides a way to animate elements into view as the user scrolls down the page. It enhances visual engagement by making content appear dynamically rather than being static.

## Key Features
- **Scroll-Triggered Animations:** Elements animate only when they become visible within the viewport.
- **Customizable Direction:** Content can animate from `up`, `down`, `left`, or `right`.
- **Configurable Delay and Duration:** Control the timing and speed of the animation.
- **Distance Control:** Adjust how far the element moves during the animation.
- **Threshold Control:** Define how much of the element needs to be visible to trigger the animation.
- **One-Time Animation:** Option to animate only once when first entering the viewport (`once` prop).
- **Staggered Children:** If `staggerChildren` is `true`, direct children of `ScrollReveal` will animate sequentially with a delay.
- **Cascade Effect:** If `cascade` is `true`, text content within the children will animate letter by letter or word by word, creating a typewriter-like effect.
- **Framer Motion Integration:** Built on `framer-motion` for robust and performant animations.

## Props
- `children`: The content (React nodes) to be animated.
- `direction`: (Optional) The direction from which the content animates (`up`, `down`, `left`, `right`). Defaults to `up`.
- `delay`: (Optional) The delay before the animation starts in seconds. Defaults to `0`.
- `duration`: (Optional) The duration of the animation in seconds. Defaults to `0.6`.
- `distance`: (Optional) The distance (in pixels) the element moves during the animation. Defaults to `50`.
- `threshold`: (Optional) A number from 0 to 1, indicating the percentage of the target element that needs to be visible before the animation triggers. Defaults to `0.1`.
- `once`: (Optional) If `true`, the animation plays only once when it enters the viewport. Defaults to `true`.
- `staggerChildren`: (Optional) If `true`, direct children will animate with a stagger effect. Defaults to `false`.
- `staggerDelay`: (Optional) The delay between each child's animation when `staggerChildren` is `true`. Defaults to `0.05`.
- `cascade`: (Optional) If `true`, applies a letter-by-letter or word-by-word animation to text content. Defaults to `false`.

## Dependencies
- `framer-motion` for animations and viewport detection.
- `styled-components` for basic container styling.

## Usage
```tsx
import React from 'react';
import ScrollReveal from './components/ui/ScrollReveal';
import Typography from './components/ui/Typography';

const MyAnimatedSection = () => (
  <div style={{ height: '150vh', paddingTop: '50vh' }}>
    <ScrollReveal direction="up" delay={0.2} duration={0.8} once>
      <Typography variant="h2" align="center">Welcome to Our Animated Section</Typography>
    </ScrollReveal>

    <div style={{ marginTop: '100px' }}>
      <ScrollReveal staggerChildren staggerDelay={0.1}>
        <Typography variant="body1">This is the first paragraph.</Typography>
        <Typography variant="body1">This is the second paragraph, appearing after a delay.</Typography>
        <Typography variant="body1">And the third one follows.</Typography>
      </ScrollReveal>
    </div>

    <div style={{ marginTop: '100px' }}>
      <ScrollReveal cascade delay={0.3}>
        <Typography variant="h3">A captivating headline with a cascade effect.</Typography>
      </ScrollReveal>
    </div>
  </div>
);

export default MyAnimatedSection;
```