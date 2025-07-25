# Toast Component

## Purpose
The `Toast` component provides a non-intrusive, temporary notification that appears on the screen to inform users about the outcome of an action or a system event. It disappears automatically after a short duration.

## Key Features
- **Temporary Notifications:** Displays messages that fade away after a set `duration`.
- **Multiple Types:** Supports different types (`success`, `error`, `warning`, `info`) with corresponding visual styles and icons to convey the message's nature.
- **Customizable Content:** Can display a `title` and an optional `message`.
- **Positioning:** Can be positioned in any of the four corners of the viewport (`top-right`, `top-left`, `bottom-right`, `bottom-left`).
- **Progress Bar:** Optionally shows a progress bar that indicates the remaining display time.
- **Close Button:** Includes a close button for manual dismissal.
- **Framer Motion Animations:** Uses `framer-motion` for smooth slide-in and slide-out animations.
- **`ToastManager`:** A component to manage and render multiple toasts, typically used with a global state or context.
- **`useToast` Hook:** A custom React hook for convenient state management of toasts, including adding, removing, and clearing all toasts.

## Props
- `id`: (Required) A unique identifier for the toast.
- `type`: (Required) The type of toast (`success`, `error`, `warning`, `info`).
- `title`: (Required) The main title of the toast notification.
- `message`: (Optional) A detailed message for the toast.
- `duration`: (Optional) The time in milliseconds before the toast automatically closes. Defaults to `5000`.
- `onClose`: (Required) Callback function triggered when the toast is closed (either automatically or manually).
- `position`: (Optional) The position of the toast on the screen. Defaults to `top-right`.
- `showProgress`: (Optional) If `true`, displays a progress bar. Defaults to `true`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React from 'react';
import { ToastManager, useToast } from './components/ui/Toast';
import Button from './components/ui/Button';

const MyToastNotifications = () => {
  const { toasts, addToast, removeToast, clearAllToasts } = useToast();

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={() => addToast({ type: 'success', title: 'Success!', message: 'Your operation was completed successfully.' })}>
        Show Success Toast
      </Button>
      <Button onClick={() => addToast({ type: 'error', title: 'Error!', message: 'Something went wrong. Please try again.', duration: 8000 })} style={{ marginLeft: '10px' }}>
        Show Error Toast
      </Button>
      <Button onClick={() => addToast({ type: 'info', title: 'Heads Up!', message: 'This is an informational message.', position: 'bottom-left' })} style={{ marginLeft: '10px' }}>
        Show Info Toast (Bottom Left)
      </Button>
      <Button onClick={clearAllToasts} style={{ marginLeft: '10px' }}>
        Clear All Toasts
      </Button>

      <ToastManager toasts={toasts} position="top-right" />
    </div>
  );
};

export default MyToastNotifications;
```