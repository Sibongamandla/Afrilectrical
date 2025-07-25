import { DefaultTheme } from 'styled-components';
import { theme as baseTheme } from '../theme';

export type FontThemeType = 'executive' | 'corporate' | 'financial' | 'tech' | 'luxury';

export const createThemeWithFonts = (fontType: FontThemeType): DefaultTheme => {
  const fontFamilies = baseTheme.typography.fontFamily as any;
  
  let selectedFonts;
  switch (fontType) {
    case 'executive':
      selectedFonts = fontFamilies.executive;
      break;
    case 'corporate':
      selectedFonts = fontFamilies.corporate;
      break;
    case 'financial':
      selectedFonts = fontFamilies.financial;
      break;
    case 'tech':
      selectedFonts = fontFamilies.tech;
      break;
    case 'luxury':
      selectedFonts = fontFamilies.luxury;
      break;
    default:
      selectedFonts = fontFamilies.executive;
  }

  return {
    ...baseTheme,
    typography: {
      ...baseTheme.typography,
      fontFamily: {
        ...baseTheme.typography.fontFamily,
        heading: selectedFonts.heading,
        body: selectedFonts.body,
      }
    }
  };
};

export const fontDescriptions = {
  executive: {
    name: 'Classic Executive',
    description: 'Sophisticated serif headings with clean sans-serif body text. Perfect for traditional corporate environments.',
    style: 'Traditional, authoritative, prestigious'
  },
  corporate: {
    name: 'Modern Corporate',
    description: 'Contemporary sans-serif combination that conveys innovation and reliability.',
    style: 'Modern, professional, approachable'
  },
  financial: {
    name: 'Financial/Legal',
    description: 'Elegant serif with excellent readability for formal documents and presentations.',
    style: 'Formal, trustworthy, established'
  },
  tech: {
    name: 'Tech Executive',
    description: 'Modern geometric fonts that communicate innovation and technical expertise.',
    style: 'Innovative, precise, forward-thinking'
  },
  luxury: {
    name: 'Luxury Premium',
    description: 'Refined serif with distinctive character for premium brand positioning.',
    style: 'Elegant, exclusive, sophisticated'
  }
};

export default createThemeWithFonts;