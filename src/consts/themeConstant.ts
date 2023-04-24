import {
  FontFamily,
  FontSize,
  FontSizeKey,
  FontWeight,
  FontWeightKey,
  LetterSpacing,
  LetterSpacingKey,
  LineHeight,
  LineHeightKey,
  TextDecoration,
  TextTransform,
} from '@/types/style.type';

export const themeValues = {
  palette: {
    black: '#000B00',
    white: '#F7EFE3',
    primary: {
      main: '#003149',
      light: '#A2D7DD',
    },
    secondary: '#491800',
    semantics: {
      error: '#B7282E',
      warning: '#F8B400',
      success: '#86B81B',
      info: '#745399',
      paper: '#FFFFFC',
      link: '#005baa',
    },
  },
  spacing: 8,
};

export const fontFamilies: Record<FontFamily, FontFamily> = {
  'Sawarabi Gothic': 'Sawarabi Gothic',
  'Kaisei Opti': 'Kaisei Opti',
  serif: 'serif',
  'sans-serif': 'sans-serif',
};

export const fontWeights: Record<FontWeightKey, FontWeight> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const LineHeights: Record<LineHeightKey, LineHeight> = {
  heading: '110%',
  body: '140%',
};

export const letterSpacings: Record<LetterSpacingKey, LetterSpacing> = {
  default: '0',
  decreased: '-5%',
  increased: '120%',
};

export const fontSizes: Record<FontSizeKey, FontSize> = {
  body: 16,
  h1: 48.329,
  h2: 39.063,
  h3: 31.25,
  h4: 25,
  h5: 20,
  h6: 16,
  sm: 13.6,
  xs: 10.4,
};

export const textTransforms: Record<TextTransform, TextTransform> = {
  uppercase: 'uppercase',
  none: 'none',
};

export const textDecorations: Record<TextDecoration, TextDecoration> = {
  underline: 'underline',
  none: 'none',
};
