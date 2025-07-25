# Form Component

## Purpose
The `Form` component is a composite UI element that provides a structured way to collect user input. It encapsulates various input types (text, textarea, select, checkbox, radio) and handles their styling, labeling, and error display consistently.

## Key Features
- **Unified Styling:** Ensures a consistent look and feel for all form elements, leveraging theme variables for spacing, borders, and colors.
- **Labeling:** Each input element can have an associated label.
- **Error Handling:** Displays error messages below input fields when validation fails.
- **Helper Text:** Provides optional helper text for additional guidance.
- **Full Width Option:** Input elements can span the full width of their parent container.
- **Icon Support (Input):** Text inputs can include leading and trailing icons.
- **Select Options:** Dropdown select elements support a list of options.
- **Checkbox and Radio Buttons:** Styled components for boolean and mutually exclusive selections.
- **Form Grouping:** A `Form.Group` component to logically group related form controls.

## Sub-Components
- `Form.Input`: A styled text input field.
- `Form.Textarea`: A styled multi-line text input area.
- `Form.Select`: A styled dropdown select element.
- `Form.Checkbox`: A styled checkbox input.
- `Form.Radio`: A styled radio button input.
- `Form.Group`: A container for grouping form controls, applying consistent spacing.

## Props (for individual sub-components)
- `label`: (Optional) The text label for the input.
- `error`: (Optional) An error message string to display.
- `fullWidth`: (Optional) If `true`, the input takes 100% width. Defaults to `false`.
- `helperText`: (Optional) Additional descriptive text for the input.
- `startIcon`, `endIcon`: (Optional, for `Form.Input`) React nodes to display as icons.
- `options`: (Required, for `Form.Select`) An array of `{ value: string; label: string }` for dropdown options.

## Dependencies
- `styled-components` for styling.

## Usage
```tsx
import React, { useState } from 'react';
import Form from './components/ui/Form';
import Button from './components/ui/Button';
import Typography from './components/ui/Typography';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
    subscribe: false,
    preference: 'email',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <Form.Input
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          fullWidth
          error={formData.name === '' ? 'Name is required' : undefined}
        />
        <Form.Textarea
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          rows={5}
          fullWidth
        />
        <Form.Select
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select...' },
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
          ]}
          fullWidth
        />
        <Form.Checkbox
          label="Subscribe to newsletter"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        <div>
          <Typography variant="subtitle2">Preferred Contact Method:</Typography>
          <Form.Radio
            label="Email"
            name="preference"
            value="email"
            checked={formData.preference === 'email'}
            onChange={handleChange}
          />
          <Form.Radio
            label="Phone"
            name="preference"
            value="phone"
            checked={formData.preference === 'phone'}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="primary">Submit</Button>
      </Form.Group>
    </form>
  );
};

export default ContactForm;
```