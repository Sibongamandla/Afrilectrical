# Icon Component

## Purpose
The `Icon` component provides a standardized way to display SVG icons throughout the application. It allows for easy customization of size and color, ensuring visual consistency and scalability.

## Key Features
- **SVG-Based:** Uses inline SVG paths for icons, which are lightweight and scale without loss of quality.
- **Customizable Size:** The `size` prop allows setting the width and height of the icon in pixels.
- **Customizable Color:** The `color` prop allows overriding the default text color for the icon.
- **Predefined Icon Set:** Includes a collection of commonly used icons categorized for energy, buildings, transportation, tools, environment, communication, and UI elements.

## Props
- `name`: (Required) The string identifier for the icon to display (e.g., `'solar'`, `'building'`, `'arrow-right'`).
- `size`: (Optional) The size of the icon in pixels (width and height). Defaults to `24`.
- `color`: (Optional) The CSS color value for the icon. Defaults to the theme's text color.

## Dependencies
- `styled-components` for styling.

## Available Icons
- **Energy & Power:** `solar`, `lightning`, `wind`, `battery`, `plug`
- **Buildings & Infrastructure:** `building`, `factory`, `hospital`, `school`, `hotel`, `home`
- **Transportation:** `train`, `bus`, `car`, `ship`, `traffic`
- **Tools & Technology:** `wrench`, `gear`, `search`, `chart`, `shield`
- **Environment & Sustainability:** `leaf`, `recycle`, `water`, `globe`
- **Communication & Contact:** `phone`, `email`, `location`
- **UI Elements:** `check`, `close`, `menu`, `arrow`, `arrow-right`
- **Money & Business:** `money`
- **Education & Growth:** `education`, `growth`
- **People & Team:** `people`
- **Safety & Security:** `safety`
- **Construction:** `construction`

## Usage
```tsx
import React from 'react';
import Icon from './components/ui/Icon';

const MyIcons = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <Icon name="solar" size={32} color="#FFD700" />
    <Icon name="building" size={24} />
    <Icon name="arrow-right" size={20} color="#007bff" />
    <Icon name="leaf" size={28} color="#28a745" />
  </div>
);

export default MyIcons;
```