# Modal Component

## Purpose
The `Modal` component displays content in a dialog box that overlays the rest of the application. It's used to capture user focus for critical information, confirmations, or complex forms without navigating away from the current page.

## Key Features
- **Overlay Backdrop:** A semi-transparent backdrop covers the background content, preventing interaction with elements outside the modal.
- **Customizable Size:** Supports various predefined sizes (`small`, `medium`, `large`, `xl`, `fullscreen`) to fit different content needs.
- **Title and Close Button:** Can display a title in the header and a customizable close button.
- **Close Behavior:** Can be configured to close on backdrop click (`closeOnBackdrop`) or on pressing the Escape key (`closeOnEscape`).
- **Scroll Lock:** Prevents scrolling of the underlying page content when the modal is open.
- **Framer Motion Animations:** Uses `framer-motion` for smooth entry and exit animations of both the modal and its backdrop.
- **Portal Rendering:** Renders the modal outside the normal DOM hierarchy using `createPortal` to ensure it overlays all other content and avoids z-index issues.
- **`ModalFooterComponent`:** A sub-component to consistently style the footer area of the modal, typically used for action buttons.
- **`useModal` Hook:** A custom React hook for convenient state management of modal visibility.

## Props
- `isOpen`: (Required) A boolean indicating whether the modal is currently open.
- `onClose`: (Required) Callback function triggered when the modal is requested to be closed (e.g., by clicking the close button, backdrop, or Escape key).
- `children`: The content to be rendered inside the modal body.
- `title`: (Optional) The title to display in the modal header.
- `size`: (Optional) Predefined size of the modal. Defaults to `medium`.
- `closeOnBackdrop`: (Optional) If `true`, clicking the backdrop closes the modal. Defaults to `true`.
- `closeOnEscape`: (Optional) If `true`, pressing the Escape key closes the modal. Defaults to `true`.
- `showCloseButton`: (Optional) If `true`, displays a close button in the header. Defaults to `true`.
- `zIndex`: (Optional) CSS `z-index` property for the modal overlay. Defaults to `1300`.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for the close icon.
- `styled-components` for styling.
- `react-dom/client` for `createPortal`.

## Usage
```tsx
import React from 'react';
import Modal, { ModalFooterComponent, useModal } from './components/ui/Modal';
import Button from './components/ui/Button';
import Typography from './components/ui/Typography';

const MyModal = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={closeModal} title="Welcome to Our App" size="large">
        <Typography variant="body1" gutterBottom>
          This is the content of your modal. You can put any React elements here.
          It's useful for displaying forms, detailed information, or confirmations.
        </Typography>
        <Typography variant="body2">
          Click the close button, press Escape, or click outside to close.
        </Typography>
        <ModalFooterComponent>
          <Button variant="secondary" onClick={closeModal}>Cancel</Button>
          <Button variant="primary" onClick={closeModal}>Confirm</Button>
        </ModalFooterComponent>
      </Modal>
    </>
  );
};

export default MyModal;
```