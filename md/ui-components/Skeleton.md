# Skeleton Component

## Purpose
The `Skeleton` component provides a placeholder loading state for UI elements, improving perceived performance and user experience by indicating that content is being loaded rather than missing. It mimics the structure of the content that will eventually appear.

## Key Features
- **Multiple Variants:** Supports different shapes to match content types: `text` (for lines of text), `rectangular` (for images, blocks), `circular` (for avatars), and `rounded` (for buttons, cards).
- **Customizable Dimensions:** `width` and `height` can be specified to match the dimensions of the loading content.
- **Animation Effects:** Includes various animations (`pulse`, `wave`, `shimmer`) to visually indicate activity. `none` can be used for static placeholders.
- **Multi-line Text:** The `text` variant can generate multiple lines of varying widths to simulate paragraphs.
- **Preset Components:** Provides convenient preset components for common loading patterns like `SkeletonButton`, `SkeletonAvatar`, `SkeletonImage`, and `SkeletonText`.
- **`SkeletonGroup`:** A wrapper component to conditionally render children or their skeleton loading states.
- **`SkeletonCard` and `SkeletonList`:** Higher-order components to quickly create skeleton loading states for entire cards or lists, including combinations of avatars, titles, subtitles, and content lines.

## Props
### `Skeleton` Props
- `width`: (Optional) Width of the skeleton. Can be a CSS string (e.g., `'100%'`) or a number (in pixels). Defaults to `'100%'`.
- `height`: (Optional) Height of the skeleton. Can be a CSS string or a number (in pixels). Defaults vary by `variant`.
- `variant`: (Optional) Shape of the skeleton. Defaults to `rectangular`.
- `animation`: (Optional) Animation style. Defaults to `pulse`.
- `lines`: (Optional) Number of lines for `text` variant. Defaults to `1`.

### `SkeletonGroup` Props
- `children`: The actual content to be rendered when `loading` is `false`.
- `loading`: (Optional) If `true`, children are hidden and skeleton is implied (though the component itself doesn't render the skeleton, it's a conceptual wrapper). Defaults to `true`.

### `SkeletonCard` Props
- `avatar`: (Optional) If `true`, includes an avatar placeholder. Defaults to `true`.
- `title`: (Optional) If `true`, includes a title placeholder. Defaults to `true`.
- `subtitle`: (Optional) If `true`, includes a subtitle placeholder. Defaults to `true`.
- `content`: (Optional) Number of content lines. Defaults to `3`.
- `actions`: (Optional) If `true`, includes action button placeholders. Defaults to `true`.
- `image`: (Optional) If `true`, includes an image placeholder. Defaults to `false`.
- `imageHeight`: (Optional) Height of the image placeholder. Defaults to `200`.
- `animation`: (Optional) Animation style. Defaults to `pulse`.

### `SkeletonList` Props
- `items`: (Optional) Number of list items to render. Defaults to `5`.
- `avatar`: (Optional) If `true`, includes an avatar placeholder per item. Defaults to `true`.
- `title`: (Optional) If `true`, includes a title placeholder per item. Defaults to `true`.
- `subtitle`: (Optional) If `true`, includes a subtitle placeholder per item. Defaults to `true`.
- `animation`: (Optional) Animation style. Defaults to `pulse`.

## Dependencies
- `framer-motion` for animations.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonCard, SkeletonList, SkeletonGroup, SkeletonButton, SkeletonAvatar, SkeletonImage, SkeletonText } from './components/ui/Skeleton';
import Button from './components/ui/Button';
import Typography from './components/ui/Typography';

const MyLoadingContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <h3>Basic Skeletons:</h3>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton variant="text" width="150px" height={20} animation="shimmer" />
        <Skeleton variant="rectangular" width={100} height={40} animation="pulse" />
      </div>

      <h3>Skeleton Text (multiple lines):</h3>
      <Skeleton variant="text" lines={3} animation="wave" />

      <h3>Skeleton Card:</h3>
      <SkeletonCard image imageHeight={150} content={2} animation="shimmer" />

      <h3>Skeleton List:</h3>
      <SkeletonList items={4} avatar title subtitle animation="pulse" />

      <h3>Conditional Loading with SkeletonGroup:</h3>
      <SkeletonGroup loading={loading}>
        {loading ? (
          <SkeletonCard animation="pulse" />
        ) : (
          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <Typography variant="h4">Loaded Content</Typography>
            <Typography variant="body1">This content appeared after the loading state.</Typography>
            <Button variant="primary">Action</Button>
          </div>
        )}
      </SkeletonGroup>

      <h3>Preset Skeletons:</h3>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <SkeletonButton animation="shimmer" />
        <SkeletonAvatar size={60} animation="wave" />
        <SkeletonImage width={200} height={100} animation="pulse" />
        <SkeletonText lines={1} animation="shimmer" />
      </div>
    </div>
  );
};

export default MyLoadingContent;
```