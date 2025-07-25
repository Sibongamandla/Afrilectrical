# NewsCardCarousel Component

## Purpose
The `NewsCardCarousel` component displays a collection of news items in a horizontally scrolling carousel format. It's designed to present articles, updates, or blog posts in an engaging and easily browsable manner.

## Key Features
- **Horizontal Scrolling:** News cards are arranged horizontally and can be scrolled manually or automatically.
- **Auto-Rotation:** Optionally auto-advances through news items at a configurable interval.
- **Pause on Hover:** Auto-rotation pauses when the user hovers over the carousel.
- **Navigation Arrows:** Provides left and right arrows for manual navigation through the cards.
- **Play/Pause Button:** Allows users to control the auto-rotation.
- **Progress Bar:** Displays a progress bar indicating the current scroll position within the carousel.
- **News Card Structure:** Each news item is presented as a card with an image, category badge, date, title, description, and a "Read More" button.
- **Responsive Design:** Adapts the number of visible cards and scrolling behavior for different screen sizes.
- **Keyboard Navigation:** Supports navigation using arrow keys and spacebar for play/pause.

## Props
- `newsItems`: (Required) An array of `NewsItem` objects, each containing `id`, `title`, `description`, `image`, `date`, `category`, and optional `readTime` and `url`.
- `title`: (Optional) The main title for the carousel section. Defaults to "Latest News".
- `autoRotate`: (Optional) If `true`, the carousel auto-advances. Defaults to `true`.
- `rotationInterval`: (Optional) Time in milliseconds between auto-rotations. Defaults to `5000`.
- `showReadTime`: (Optional) If `true`, displays the estimated read time on each card. Defaults to `true`.
- `onCardClick`: (Optional) Callback function triggered when a news card is clicked.

## Dependencies
- `styled-components` for styling and keyframe animations.
- `React.useState`, `React.useEffect`, `React.useCallback` for state and lifecycle management.

## Usage
```tsx
import React from 'react';
import NewsCardCarousel from './components/ui/NewsCardCarousel';

const sampleNews = [
  {
    id: '1',
    category: 'Technology',
    image: 'https://via.placeholder.com/400x200/FF5733/FFFFFF?text=News+1',
    title: 'New Breakthrough in AI',
    description: 'Scientists have announced a major breakthrough in artificial intelligence, promising new possibilities.',
    date: '2023-10-26',
    readTime: '5 min read',
    url: '#',
  },
  {
    id: '2',
    category: 'Environment',
    image: 'https://via.placeholder.com/400x200/33FF57/FFFFFF?text=News+2',
    title: 'Sustainable Energy Initiatives',
    description: 'Governments worldwide are launching new initiatives to promote sustainable energy sources.',
    date: '2023-10-25',
    readTime: '3 min read',
    url: '#',
  },
  // ... more news items
];

const MyNewsSection = () => (
  <NewsCardCarousel newsItems={sampleNews} title="Company Updates" autoRotate rotationInterval={7000} />
);

export default MyNewsSection;
```