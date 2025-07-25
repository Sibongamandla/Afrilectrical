# AutoScrollCarousel Component

## Purpose
The `AutoScrollCarousel` component displays a continuous, infinitely looping carousel of client logos or other items. It's ideal for showcasing partnerships, certifications, or a list of clients in a visually engaging and space-efficient manner.

## Key Features
- **Infinite Auto-Scrolling:** The carousel automatically scrolls horizontally and seamlessly loops, creating a continuous motion effect.
- **Pause on Hover:** The scrolling animation pauses when the user hovers over the carousel, allowing them to inspect individual items.
- **Duplication for Seamless Loop:** Internally duplicates the provided `clients` array to ensure a smooth, uninterrupted looping effect without abrupt jumps.
- **Customizable Title and Subtitle:** Allows for an optional title and subtitle above the carousel to provide context.
- **Logo Styling:** Logos are initially grayscale and become colored and slightly scaled on hover, indicating interactivity and drawing attention.

## Props
- `clients`: An array of `Client` objects, where each object has a `name` (string) and `logo` (string, URL to the logo image).
- `title`: (Optional) A string to display as the main title above the carousel. Defaults to "Strategic Partners & Certifications".
- `subtitle`: (Optional) A string to display as a subtitle below the title. Defaults to "We collaborate with industry leaders and maintain the highest standards through strategic partnerships and certifications."

## Dependencies
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import AutoScrollCarousel from './components/ui/AutoScrollCarousel';

const sampleClients = [
  { name: 'Client A', logo: '/path/to/logoA.png' },
  { name: 'Client B', logo: '/path/to/logoB.png' },
  { name: 'Client C', logo: '/path/to/logoC.png' },
  // ... more clients
];

const MyClientShowcase = () => (
  <AutoScrollCarousel clients={sampleClients} title="Our Valued Partners" subtitle="Working together for a brighter future." />
);

export default MyClientShowcase;
```