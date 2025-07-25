# Tabs Component

## Purpose
The `Tabs` component provides a way to organize and display content in a tabbed interface, allowing users to switch between different sections of information without navigating to a new page. It's ideal for presenting related but distinct content categories.

## Key Features
- **Tabbed Navigation:** Users can click on tabs to reveal associated content panels.
- **Multiple Variants:** Supports different visual styles for tabs (`default`, `pills`, `underline`, `cards`, `minimal`) to fit various design needs.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Orientation:** Can be displayed horizontally (default) or vertically.
- **Full Width Option:** Tabs can stretch to fill the available width.
- **Centered Tabs:** Tabs can be horizontally centered within their container.
- **Scrollable Tabs:** Automatically enables horizontal or vertical scrolling if tabs exceed the container width/height.
- **Icon and Badge Support:** Each tab can display an icon and a badge (e.g., for notifications).
- **Disabled State:** Individual tabs can be disabled, preventing selection.
- **Animated Transitions:** Uses `framer-motion` for smooth transitions between active tabs and content panels.
- **Controlled Component:** Can be controlled externally via `activeTab` and `onChange` props.

## Props
- `items`: (Required) An array of `TabItem` objects, each defining the `id`, `label`, `content`, and optional `icon`, `disabled`, and `badge`.
- `defaultActiveTab`: (Optional) The `id` of the tab that should be active by default (uncontrolled).
- `activeTab`: (Optional) The `id` of the currently active tab (controlled).
- `onChange`: (Optional) Callback function triggered when the active tab changes.
- `variant`: (Optional) Visual style of the tabs. Defaults to `default`.
- `size`: (Optional) Size of the tabs. Defaults to `medium`.
- `orientation`: (Optional) Orientation of the tabs (`horizontal` or `vertical`). Defaults to `horizontal`.
- `fullWidth`: (Optional) If `true`, tabs will take up full available width. Defaults to `false`.
- `centered`: (Optional) If `true`, tabs will be centered horizontally. Defaults to `false`.
- `scrollable`: (Optional) If `true`, tabs will be scrollable if they overflow. Defaults to `false`.
- `animated`: (Optional) If `true`, content panel transitions are animated. Defaults to `true`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Tabs, { TabItem } from './components/ui/Tabs';
import Typography from './components/ui/Typography';

const myTabItems: TabItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: 'user',
    content: <Typography variant="body1">User profile settings and information.</Typography>,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'gear',
    content: <Typography variant="body1">Application settings and preferences.</Typography>,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'bell',
    badge: 5,
    content: <Typography variant="body1">Your recent notifications.</Typography>,
  },
  {
    id: 'disabled',
    label: 'Disabled Tab',
    disabled: true,
    content: <Typography variant="body1">This tab is disabled.</Typography>,
  },
];

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h3>Underline Tabs:</h3>
      <Tabs items={myTabItems} activeTab={activeTab} onChange={setActiveTab} variant="underline" size="large" fullWidth />

      <h3 style={{ marginTop: '40px' }}>Pills Tabs:</h3>
      <Tabs items={myTabItems} defaultActiveTab="settings" variant="pills" size="medium" centered />

      <h3 style={{ marginTop: '40px' }}>Vertical Tabs:</h3>
      <div style={{ height: '300px', display: 'flex' }}>
        <Tabs items={myTabItems} defaultActiveTab="profile" orientation="vertical" variant="cards" />
      </div>
    </div>
  );
};

export default MyTabs;
```