# Input Component

## Purpose
The `Input` component provides a flexible and customizable text input field for forms. It supports various visual styles, states, and includes features like icons, prefixes, suffixes, character counting, and clearable input.

## Key Features
- **Multiple Variants:** Supports different visual styles (`default`, `outline`, `filled`, `ghost`, `underline`) to match design requirements.
- **Size Options:** Available in `small`, `medium`, and `large` sizes.
- **Label and Messaging:** Includes a label, and can display error, success, or hint messages below the input.
- **Left and Right Icons:** Can display an icon on either side of the input field.
- **Prefix and Suffix:** Allows adding static text before or after the input value (e.g., currency symbols, units).
- **Loading State:** Shows a loading spinner on the right side.
- **Clearable Input:** An optional button to clear the input value.
- **Character Count:** Can display the current character count and maximum length, with visual feedback if the limit is exceeded.
- **State Indicators:** Visually indicates `error`, `success`, or `warning` states.
- **Animations:** Uses `framer-motion` for subtle animations on focus and error (shake).
- **`Textarea` Sub-component:** A multi-line text input with similar styling and features.

## Props
- `label`: (Optional) The text label for the input.
- `error`: (Optional) An error message string to display.
- `success`: (Optional) A success message string to display.
- `hint`: (Optional) A hint message string to display.
- `leftIcon`: (Optional) Name of the icon to display on the left.
- `rightIcon`: (Optional) Name of the icon to display on the right.
- `onRightIconClick`: (Optional) Callback function triggered when the right icon is clicked.
- `loading`: (Optional) If `true`, displays a loading spinner. Defaults to `false`.
- `clearable`: (Optional) If `true`, displays a clear button. Defaults to `false`.
- `onClear`: (Optional) Callback function triggered when the clear button is clicked.
- `size`: (Optional) Size of the input. Defaults to `medium`.
- `variant`: (Optional) Visual style of the input. Defaults to `default`.
- `state`: (Optional) Explicit state of the input (`default`, `error`, `success`, `warning`). Overridden by `error` or `success` props.
- `animate`: (Optional) If `true`, applies animations (e.g., shake on error). Defaults to `true`.
- `showCharacterCount`: (Optional) If `true`, displays character count. Requires `maxLength`.
- `maxLength`: (Optional) Maximum number of characters allowed.
- `prefix`: (Optional) Text to display before the input value.
- `suffix`: (Optional) Text to display after the input value.
- `required`: (Optional) If `true`, adds a required indicator to the label.
- `disabled`: (Optional) If `true`, the input is not interactive.
- `value`: (Optional) The current value of the input (controlled component).
- `onChange`: (Optional) Callback function triggered when the input value changes.
- `onFocus`: (Optional) Callback function triggered when the input gains focus.
- `onBlur`: (Optional) Callback function triggered when the input loses focus.

## Dependencies
- `framer-motion` for animations.
- `Icon` (UI Component) for displaying icons.
- `styled-components` for styling and keyframe animations.

## Usage
```tsx
import React, { useState } from 'react';
import Input, { Textarea } from './components/ui/Input';

const MyFormInputs = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        leftIcon="user"
        clearable
        error="Name cannot be empty"
      />
      <Input
        label="Password"
        type="password"
        rightIcon="eye"
        onRightIconClick={() => alert('Toggle password visibility')}
        loading
      />
      <Textarea
        label="Your Message"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        showCharacterCount
        maxLength={200}
        hint="Keep it concise."
      />
    </div>
  );
};

export default MyFormInputs;
```