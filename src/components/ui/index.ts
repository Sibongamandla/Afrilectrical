// Existing UI Components
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Container } from './Container';
export { default as Form } from './Form';
export { default as Grid } from './Grid';
export { default as Typography } from './Typography';
export { default as ServiceCard } from './ServiceCard';
export { default as ProjectGallery } from './ProjectGallery';
export { default as TechSpecs, SpecsComparison } from './TechSpecs';
export { default as Icon } from './Icon';

// Interactive Components
export { default as ScrollReveal } from './ScrollReveal';
export { default as ParallaxImage } from './ParallaxImage';
export { default as AnimatedCounter } from './AnimatedCounter';
export { default as TabsContainer } from './TabsContainer';
export { default as Carousel } from './Carousel';
export { default as NewsCardCarousel } from './NewsCardCarousel';

// Modern UI Components Library
// Form Components
export { default as Input } from './Input';
export { default as Dropdown } from './Dropdown';
export { default as Slider } from './Slider';
export { default as Switch } from './Switch';
export { default as Tabs } from './Tabs';

// Feedback Components
export { default as Toast } from './Toast';
export { default as Modal } from './Modal';
export { default as Tooltip } from './Tooltip';
export { default as ProgressIndicator } from './ProgressIndicator';
export { default as Skeleton, SkeletonGroup, SkeletonCard, SkeletonList } from './Skeleton';

// Navigation Components
export { default as Pagination } from './Pagination';
export { default as Accordion } from './Accordion';

// Display Components
export { default as Badge } from './Badge';
export { default as GradientCard } from './GradientCard';
export { default as OptimizedImage } from './OptimizedImage';

// Action Components
export { default as AnimatedButton } from './AnimatedButton';
export { default as FloatingActionButton } from './FloatingActionButton';

// Re-export types for TypeScript support
export type {
  // Form Component Types
  InputProps,
  TextareaProps
} from './Input';

export type {
  DropdownProps,
  DropdownOption
} from './Dropdown';

export type {
  SliderProps,
  RangeSliderProps
} from './Slider';

export type {
  SwitchProps,
  CheckboxProps
} from './Switch';

export type {
  TabsProps,
  TabItem
} from './Tabs';

// Feedback Component Types
export type {
  ToastProps,
  ToastManagerProps
} from './Toast';

export type {
  ModalProps
} from './Modal';

export type {
  TooltipProps
} from './Tooltip';

export type {
  ProgressIndicatorProps
} from './ProgressIndicator';

export type {
  SkeletonProps,
  SkeletonGroupProps,
  SkeletonCardProps,
  SkeletonListProps
} from './Skeleton';

// Navigation Component Types
export type {
  PaginationProps,
  PageInfoProps
} from './Pagination';

export type {
  AccordionProps,
  AccordionItem
} from './Accordion';

// Display Component Types
export type {
  BadgeProps,
  BadgeGroupProps
} from './Badge';

export type {
  GradientCardProps
} from './GradientCard';

// Action Component Types
export type {
  AnimatedButtonProps
} from './AnimatedButton';

export type {
  FloatingActionButtonProps
} from './FloatingActionButton';