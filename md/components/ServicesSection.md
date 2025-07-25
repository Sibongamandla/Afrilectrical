# ServicesSection Component

## Purpose
The `ServicesSection` component highlights Afrilectrical's core engineering services across multiple sectors. It uses an interactive tabbed interface to present detailed information about each service category.

## Key Features
- **Tabbed Service Categories:** Organizes services into distinct tabs (e.g., Power Distribution, Renewable Energy, Industrial Automation, Smart Buildings), allowing users to easily navigate between them.
- **Detailed Service Content:** Each tab provides a title, a general description of the service, a parallax image, and a grid of specific features or sub-services.
- **Feature Cards:** Individual features within each service category are presented in cards with icons, titles, and descriptions, and subtle hover effects.
- **Parallax Images:** Incorporates `ParallaxImage` within each tab's content for visual depth and engagement.
- **Vertical Tab Orientation:** The tabs are displayed vertically, which can be useful for sections with more content or a desire for a different layout.
- **Responsive Design:** Adapts the layout of feature grids and overall section for various screen sizes.

## Dependencies
- `TabsContainer` (UI Component): The main component used to structure the tabbed interface.
- `Icon` (UI Component): Used for icons within tab labels and feature cards.
- `ParallaxImage` (UI Component): Used for background images within each service tab.
- `styled-components` for styling.

## Usage
This component is typically used on the `Home` page or a dedicated `Services` page to provide a comprehensive overview of the company's offerings.