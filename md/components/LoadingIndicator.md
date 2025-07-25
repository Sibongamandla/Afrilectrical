# LoadingIndicator Component

## Purpose
The `LoadingIndicator` component provides a visual cue to the user that content is being loaded or an operation is in progress. It displays a simple spinning animation.

## Key Features
- **Full-Screen Overlay:** Covers the entire viewport with a semi-transparent background, preventing user interaction while loading.
- **Spinning Spinner:** Features a classic circular spinner animation to indicate activity.
- **Fixed Position:** Ensures the loading indicator remains visible regardless of scroll position.
- **High Z-Index:** Placed on top of all other content to ensure visibility.

## Dependencies
- `styled-components` for styling and keyframe animations.

## Usage
This component is typically rendered conditionally based on a loading state, often at the root level of the application or a specific section that requires a loading overlay.