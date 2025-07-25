import React from 'react';
import AnimatedButton, { AnimatedButtonProps } from './AnimatedButton';

// Define a subset of AnimatedButtonProps for the simpler Button component
interface ButtonProps extends Omit<AnimatedButtonProps, 'glow' | 'rippleEffect' | 'rounded' | 'loading'> {
  // Override variant to only allow basic types if needed, or keep all from AnimatedButton
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  // Override icon to be React.ReactNode if it was previously, otherwise keep string
  icon?: string; // Assuming AnimatedButton uses string for icon name
}

const Button: React.FC<ButtonProps> = (props) => {
  // Pass all props directly to AnimatedButton
  // You can set default values here if you want to enforce simpler behavior
  return <AnimatedButton {...props} />;
};

export default Button;